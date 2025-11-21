from typing import Dict, Any
from pydantic import BaseModel


class AnalysisResponse(BaseModel):
    results: Dict[str, Any]
