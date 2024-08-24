# UTILS
import sys
from recruitment.crew import RecruitmentCrew

# Pydantic
from pydantic import BaseModel

# FastAPI
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
import uvicorn


app = FastAPI()

# CORS Middleware (opcional, agrega si es necesario)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Cambia esto para restringir los orígenes permitidos
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo Pydantic para recibir los inputs
class JobRequirementsInput(BaseModel):
    job_requirements: str


@app.post("/run/")
async def run_endpoint(inputs: JobRequirementsInput):
    try:
        # Llama a la función `run` con los inputs recibidos
        result = RecruitmentCrew().crew().kickoff(inputs=inputs.dict())
        return {"status": "success", "message": "Recruitment crew started successfully.", "result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")

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