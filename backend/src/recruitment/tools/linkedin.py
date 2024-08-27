from crewai_tools import BaseTool

from .client import Client as LinkedinClient


class LinkedInTool(BaseTool):
    """
    LinkedInTool class to retrieve LinkedIn profiles based on a list of skills.

    Attributes:
        name (str): The name of the tool.
        description (str): The description of the tool.
    """

    name: str = "Retrieve LinkedIn profiles"
    description: str = (
        "Retrieve LinkedIn profiles given a list of skills. Comma separated"
    )

    def _run(self, skills: str) -> str:
        """
        Runs the tool to retrieve LinkedIn profiles based on the provided skills.

        Args:
            skills (str): A comma-separated string of skills to search for.

        Returns:
            str: A formatted string of LinkedIn profiles.
        """
        linkedin_client = LinkedinClient()
        people = linkedin_client.find_people(skills)
        people = self._format_publications_to_text(people)
        linkedin_client.close()
        return people

    def _format_publications_to_text(self, people):
        """
        Formats the retrieved LinkedIn profiles into a text representation.

        Args:
            people (list): A list of dictionaries containing LinkedIn profile information.

        Returns:
            str: A formatted string of LinkedIn profiles.
        """
        candidates = []

        result = ["\n".join([
            "Person Profile",
            "-------------",
            p['name'],
            p['position'],
            p['location']
        ]) for p in people]
        result = "\n\n".join(result)

        return result