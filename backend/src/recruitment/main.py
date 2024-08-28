# utils
import sys
import json
import asyncio
import os

# Crewai
from crew import RecruitmentCrew

from openai import OpenAI

# FastAPI
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

# Schemas
from schemas.job_requirements import JobRequirements
from schemas.candidate import Candidate

app = FastAPI(title="AI Agents", docs_url="/api/docs", openapi_url="/api")

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.post("/api/search_candidates")
async def run_endpoint(inputs: JobRequirements):
    """
    Endpoint to search for candidates based on job requirements.

    Args:
        inputs (JobRequirements): The job requirements including title, description, responsibilities, requirements, and preferred qualifications.

    Returns:
        dict: A dictionary containing the status, message, and result of the recruitment process.

    Raises:
        HTTPException: If an error occurs during the recruitment process.
    """

    # Call OpenAI API
    client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])

    
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



    result = RecruitmentCrew().crew().kickoff(inputs=formatted_inputs)
    result = result.replace("`", "").replace("json", "")
    json_result = json.loads(result)

    completion = client.beta.chat.completions.parse(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "user",
                "content": result
            }
        ],
        response_format=Candidate,
    )

    message = completion.choices[0].message
    response_dict = {}
    if message.parsed:
        print(message.parsed)
        response_dict = {
            "status": "success",
            "message": "Recruitment crew started successfully.",
            "result": message.parsed
        }
    else:
        print(message.refusal)
        response_dict = {
            "status": "error",
            "message": "An error occurred during the recruitment process."
        }

    return response_dict

    # except Exception as e:
    #     raise HTTPException(status_code=500, detail=f"An error occurred: {e}")
    

if __name__ == "__main__":
  uvicorn.run("main:app", host="0.0.0.0", reload=True, port=8888)