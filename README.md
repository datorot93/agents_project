# AGENTS PROJECT

<a id="readme-top"></a>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <!-- <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot][product-screenshot]

The **AI AGENTS** is an innovative recruitment automation platform designed to streamline the hiring process by leveraging intelligent agents. This project aims to reduce the time and effort required to find and match candidates with job requirements, making the recruitment process more efficient and effective.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Key Features
* **Automated Candidate Research**: Utilize intelligent agents to scour the web and gather information about potential candidates based on specified skills and job requirements.
* **Candidate Matching and Scoring**: Automatically match and score candidates against job requirements to identify the best fits.
* **Outreach Strategy**: Develop and execute personalized outreach strategies to engage with potential candidates.
* **Comprehensive Reporting**: Generate detailed reports on the recruitment process, including candidate profiles and matching scores.


### Why this project?

* **Efficiency**: Focus on creating something amazing by automating repetitive tasks like candidate research and matching.
* **Consistency**: Ensure a consistent and thorough recruitment process by implementing standardized procedures.
* **Scalability**: Easily scale your recruitment efforts without a proportional increase in workload.

### Built With

Job Requirements Input: Define the job requirements, including title, description, responsibilities, and qualifications.
Automated Research: Intelligent agents perform web searches to find potential candidates.
Matching and Scoring: Candidates are matched and scored based on how well they meet the job requirements.
Outreach and Engagement: Develop outreach strategies to engage with top candidates.
Reporting: Generate comprehensive reports to review the recruitment process and candidate details.
Built With
This project is built using the following major frameworks and libraries:

- **FastAPI**: For building the backend API.
- **Selenium**: For web scraping and automation.
- **Pydantic**: For data validation and settings management.
- **CrewAI**: For natural language processing and candidate matching.
- **React**: For building the frontend user interface, providing a dynamic and responsive experience for users.
- **Tailwind**: For styling the frontend with utility-first CSS, enabling rapid UI development and ensuring a consistent design.
- **Docker**: For containerization and easy deployment.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Docker and Docker Compose installed on your machine.

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/datorot93/agents_project.git
    ```

2. **Navigate to the backend folder and create a `.env` file with the following variables:**
    ```sh
    cd agents_project/backend
    touch .env
    ```

    Add the following content to the `.env` file:
    ```env
    OPENAI_API_KEY=your_openai_api_key
    OPENAI_MODEL_NAME=your_openai_model_name
    SERPER_API_KEY=your_serper_api_key
    LINKEDIN_COOKIE=your_linkedin_cookie
    ```

    ##### Anotation
    ###### LINKEDIN_COOKIE 
    * Navigate to www.linkedin.com and log in
    * Open browser developer tools (Ctrl-Shift-I or right click -> inspect element)
    * Select the appropriate tab for your browser (Application on Chrome, Storage on Firefox)
    * Click the Cookies dropdown on the left-hand menu, and select the www.linkedin.com option
    * Find and copy the li_at value and add it to your .env file
    * Be sure to fetch the cookies again if selenium doesnt login to linkedin after a while

    ###### SERPER_API_KEY
    Serper is a search engine API that allows developers to integrate search functionality into their applications. It provides a simple and efficient way to query search results programmatically.
    * Create an account in https://serper.dev
    * Sign in or Sign Out an account
    * Copy the API_KEY they provide




3. **Navigate to the root path of the project:**
    ```sh
    cd ..
    ```

4. **Run the Docker Compose command to start the project:**
    ```sh
    docker-compose up -d
    ```

    This command will start downloading the necessary images and setting up the project.

5. **Access the project:**

    Once the setup is complete, the project will be running at:
    ```
    http://localhost:8000
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/screenshot.jpeg
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 