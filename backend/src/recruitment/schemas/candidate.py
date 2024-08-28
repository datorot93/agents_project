# Pydantic
from pydantic import BaseModel


# Modelo Pydantic para recibir los inputs
class Candidate(BaseModel):
    name: str
    skills: list[str]
    position: str
    email: str
    linkedin: str

