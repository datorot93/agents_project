# utils
import sys
import json
import asyncio

# Crewai
from crew import RecruitmentCrew

# FastAPI
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

# Schemas
from schemas.job_requirements import JobRequirements

app = FastAPI(title="AI Agents", docs_url="/api/docs", openapi_url="/api")

# CORS Middleware (opcional, agrega si es necesario)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Cambia esto para restringir los orígenes permitidos
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.post("/api/search_candidates")
async def run_endpoint(inputs: JobRequirements):
    
    formatted_responsibilities = "\n- ".join(inputs.responsibilities)
    formatted_requirements = "\n- ".join(inputs.requirements)
    formatted_preferred_qualifications = "\n- ".join(inputs.preferred_qualifications)

    formatted_inputs = {
        "job_requirements": f"""
        job_requirement:
        title: > {inputs.job_title}
        description: > 
          - {inputs.job_description}
        responsibilities: > \n-{formatted_responsibilities}
        requirements: > \n-{formatted_requirements}
        preferred_qualifications: > \n-{formatted_preferred_qualifications}
        """
    }


    try:
        # result = RecruitmentCrew().run_individual_tasks()
        result = RecruitmentCrew().crew().kickoff(inputs=formatted_inputs)
        # recruitment_crew = RecruitmentCrew()
        # result = recruitment_crew.kickoff_with_timeout(timeout=120).crew().kickoff(inputs=formatted_inputs)
        # result = await asyncio.wait_for(RecruitmentCrew().crew().kickoff(inputs=formatted_inputs), timeout=120.0)
        # result = await asyncio.wait_for(RecruitmentCrew().crew().kickoff(inputs=formatted_inputs), timeout=120.0)
        result = result.replace("`", "").replace("json", "")
        json_result = json.loads(result)
        with open("output.json", "w") as f:
            f.write(str(json_result))
        return {"status": "success", "message": "Recruitment crew started successfully.", "result": json_result}
    # except asyncio.TimeoutError:
    #     raise HTTPException(status_code=504, detail="The request timed out.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")
    

@app.get("/api/run")
async def run_endpoint():
    
    return {"status": "success", "message": "Recruitment crew started successfully."}

def run():
    # Replace with your inputs, it will automatically interpolate any tasks and agents information
    inputs = {
        'job_requirements': """
        job_requirement:
  title: >
    Python and React JS Engineer
  description: >
    We are seeking a skilled Python and React JS engineer to join our team.
    The ideal candidate will have experience in both backend and frontend development,

  responsibilities: >
    - Write clean, maintainable, and efficient code.
    - Ensure application performance and responsiveness.
    - Identify and resolve bottlenecks and bugs.

  requirements: >
    - Proven experience with Python and React.
    - Strong understanding of object-oriented programming.
    - Proficiency with JavaScript, HTML, CSS, and React.

  preferred_qualifications: >
    - Experience with cloud services (AWS, Google Cloud, or Azure).
    - Bachelor's degree in Computer Science or a related field.
        """
    }
    # RecruitmentCrew().crew().kickoff(inputs=inputs)

def train():
    """
    Train the crew for a given number of iterations.
    """
    inputs = {
        'job_requirements': """
        job_requirement:
  title: >
    Python and React JS Engineer
  description: >
    We are seeking a skilled Python and React JS engineer to join our team.
    The ideal candidate will have experience in both backend and frontend development,

  responsibilities: >
    - Develop and maintain web applications using Python and React JS.
    - Collaborate with teams to define and implement new features.
    - Write clean, maintainable, and efficient code.

  requirements: >
    - Proven experience with Python and React JS.
    - Strong understanding of object-oriented programming.
    - Proficiency with JavaScript, HTML, CSS, and React.

  preferred_qualifications: >
    - Experience with cloud services (AWS, Google Cloud, or Azure).
    - Bachelor's degree in Computer Science or a related field.
        """
    }
    try:
        RecruitmentCrew().crew().train(n_iterations=int(sys.argv[1]), inputs=inputs)

    except Exception as e:
        raise Exception(f"An error occurred while training the crew: {e}")
    

if __name__ == "__main__":
  uvicorn.run("main:app", host="0.0.0.0", reload=True, port=8888)