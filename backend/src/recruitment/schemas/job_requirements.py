# Pydantic
from pydantic import BaseModel


# Modelo Pydantic para recibir los inputs
class JobRequirements(BaseModel):
    job_title: str
    job_description: str
    requirements: list
    responsibilities: list
    preferred_qualifications: list

