import os
import urllib
from selenium.webdriver.common.by import By

from .driver import Driver

class Client:
    """
    Client class to interact with LinkedIn for finding people based on skills.

    Attributes:
        driver (Driver): The web driver used to navigate LinkedIn and perform searches.
    """

    def __init__(self):
        """
        Initializes the Client with a LinkedIn URL and cookie for authentication.
        """
        url = 'https://linkedin.com/'
        cookie = {
            "name": "li_at",
            "value": os.environ["LINKEDIN_COOKIE"],
            "domain": ".linkedin.com"
        }

        self.driver = Driver(url, cookie)

    def find_people(self, skills):
        """
        Finds people on LinkedIn based on the provided skills.

        Args:
            skills (str): A comma-separated string of skills to search for.

        Returns:
            list: A list of dictionaries containing the name, position, and location of each person found.
        """
        skills = skills.split(",")
        search = " ".join(skills)
        encoded_string = urllib.parse.quote(search.lower())
        url = f"https://www.linkedin.com/search/results/people/?keywords={encoded_string}"
        self.driver.navigate(url)

        people = self.driver.get_elements("ul li div div.linked-area")

        results = []
        for person in people:
            try:
                result = {}
                result["name"] = person.find_element(By.CSS_SELECTOR, "span.entity-result__title-line").text
                result["position"] = person.find_element(By.CSS_SELECTOR, "div.entity-result__primary-subtitle").text
                result["location"] = person.find_element(By.CSS_SELECTOR, "div.entity-result__secondary-subtitle").text
            except Exception as e:
                print(e)
                continue
            results.append(result)
        return results

    def close(self):
        """
        Closes the web driver.
        """
        self.driver.close()