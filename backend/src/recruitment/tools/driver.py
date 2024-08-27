import time
from selenium import webdriver
from selenium.webdriver.common.by import By
# from selenium.webdriver.firefox.options import Options
from selenium.webdriver.chrome.options import Options

class Driver:
    """
    Driver class to interact with web pages using a web driver.

    Attributes:
        driver (WebDriver): The web driver used to navigate and interact with web pages.
    """

    def __init__(self, url, cookie=None):
        """
        Initializes the Driver with a URL and optional cookie for authentication.

        Args:
            url (str): The URL to navigate to upon initialization.
            cookie (dict, optional): A dictionary containing cookie information for authentication. Defaults to None.
        """
        self.driver = self._create_driver(url, cookie)

    def navigate(self, url, wait=3):
        """
        Navigates to the specified URL and waits for a given amount of time.

        Args:
            url (str): The URL to navigate to.
            wait (int, optional): The time to wait after navigating, in seconds. Defaults to 3.
        """
        self.driver.get(url)
        time.sleep(wait)

    def scroll_to_bottom(self, wait=3):
        """
        Scrolls to the bottom of the page and waits for a given amount of time.

        Args:
            wait (int, optional): The time to wait after scrolling, in seconds. Defaults to 3.
        """
        self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(wait)
        self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(wait)

    def get_element(self, selector):
        """
        Retrieves a single web element using a CSS selector.

        Args:
            selector (str): The CSS selector to find the element.

        Returns:
            WebElement: The web element found by the CSS selector.
        """
        return self.driver.find_element(By.CSS_SELECTOR, selector)

    def get_elements(self, selector):
        """
        Retrieves multiple web elements using a CSS selector.

        Args:
            selector (str): The CSS selector to find the elements.

        Returns:
            list: A list of web elements found by the CSS selector.
        """
        return self.driver.find_elements(By.CSS_SELECTOR, selector)

    def fill_text_field(self, selector, text):
        """
        Fills a text field with the specified text.

        Args:
            selector (str): The CSS selector to find the text field.
            text (str): The text to fill in the text field.
        """
        element = self.get_element(selector)
        element.clear()
        element.send_keys(text)

    def click_button(self, selector):
        """
        Clicks a button identified by the specified CSS selector.

        Args:
            selector (str): The CSS selector to find the button.
        """
        element = self.get_element(selector)
        element.click()

    def _create_driver(self, url, cookie):
        """
        Creates and initializes the web driver.

        Args:
            url (str): The URL to navigate to upon driver creation.
            cookie (dict, optional): A dictionary containing cookie information for authentication. Defaults to None.

        Returns:
            WebDriver: The initialized web driver.
        """
        options = Options()
        # options.add_argument("--headless")
        driver = webdriver.Firefox(options=options)
        driver.get(url)
        if cookie:
            driver.add_cookie(cookie)
        return driver

    def close(self):
        """
        Closes the web driver.
        """
        self.driver.close()