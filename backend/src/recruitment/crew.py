import concurrent.futures

from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from crewai_tools import SerperDevTool, ScrapeWebsiteTool
from tools.linkedin import LinkedInTool
from schemas.candidate import Candidate

@CrewBase
class RecruitmentCrew():
    """
    RecruitmentCrew class that defines agents and tasks for the recruitment process.

    Attributes:
        agents_config (str): Path to the agents configuration file.
        tasks_config (str): Path to the tasks configuration file.
    """

    agents_config = 'config/agents.yaml'
    tasks_config = 'config/tasks.yaml'

    @agent
    def researcher(self) -> Agent:
        """
        Creates a researcher agent.

        Returns:
            Agent: The researcher agent.
        """
        return Agent(
            config=self.agents_config['researcher'],
            tools=[SerperDevTool(), ScrapeWebsiteTool(), LinkedInTool()],
            allow_delegation=False,
            verbose=True
        )

    @agent
    def matcher(self) -> Agent:
        """
        Creates a matcher agent.

        Returns:
            Agent: The matcher agent.
        """
        return Agent(
            config=self.agents_config['matcher'],
            tools=[SerperDevTool(), ScrapeWebsiteTool()],
            allow_delegation=False,
            verbose=True
        )

    @agent
    def communicator(self) -> Agent:
        """
        Creates a communicator agent.

        Returns:
            Agent: The communicator agent.
        """
        return Agent(
            config=self.agents_config['communicator'],
            tools=[SerperDevTool(), ScrapeWebsiteTool()],
            allow_delegation=False,
            verbose=True
        )

    @agent
    def reporter(self) -> Agent:
        """
        Creates a reporter agent.

        Returns:
            Agent: The reporter agent.
        """
        return Agent(
            config=self.agents_config['reporter'],
            allow_delegation=False,
            verbose=True
        )

    @task
    def research_candidates_task(self) -> Task:
        """
        Creates a task for researching candidates.

        Returns:
            Task: The research candidates task.
        """
        return Task(
            config=self.tasks_config['research_candidates_task'],
            agent=self.researcher(),
            output_pydantic = Candidate,
            
            output_format = 'json'
        )

    @task
    def match_and_score_candidates_task(self) -> Task:
        """
        Creates a task for matching and scoring candidates.

        Returns:
            Task: The match and score candidates task.
        """
        return Task(
            config=self.tasks_config['match_and_score_candidates_task'],
            agent=self.matcher()
        )

    @task
    def outreach_strategy_task(self) -> Task:
        """
        Creates a task for developing an outreach strategy.

        Returns:
            Task: The outreach strategy task.
        """
        return Task(
            config=self.tasks_config['outreach_strategy_task'],
            agent=self.communicator()
        )

    @task
    def report_candidates_task(self) -> Task:
        """
        Creates a task for reporting candidates.

        Returns:
            Task: The report candidates task.
        """
        return Task(
            config=self.tasks_config['report_candidates_task'],
            agent=self.reporter(),
            context=[self.research_candidates_task(), self.match_and_score_candidates_task(), self.outreach_strategy_task()],
        )

    @crew
    def crew(self) -> Crew:
        """
        Creates the Recruitment crew.

        Returns:
            Crew: The recruitment crew.
        """
        return Crew(
            agents=self.agents,
            tasks=self.tasks,
            process=Process.sequential,
            verbose=2,
        )

    def kickoff_with_timeout(self, timeout: int):
        """
        Kickoff the crew with a timeout.

        Args:
            timeout (int): The timeout duration in seconds.

        Returns:
            Any: The result of the crew kickoff or None if the operation times out.
        """
        def kickoff_crew():
            return self.crew().kickoff(inputs={})  # Add any necessary inputs here

        with concurrent.futures.ThreadPoolExecutor() as executor:
            future = executor.submit(kickoff_crew)
            try:
                result = future.result(timeout=timeout)
                return result
            except concurrent.futures.TimeoutError:
                print(f"The operation exceeded the timeout of {timeout} seconds.")
                return None  # or handle the timeout case as needed