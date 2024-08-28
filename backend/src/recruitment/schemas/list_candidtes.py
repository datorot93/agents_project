# Pydantic
from pydantic import BaseModel
from .candidate import Candidate

# Modelo Pydantic para recibir los inputs
class ListCandidate(BaseModel):
    candidates: list[Candidate]