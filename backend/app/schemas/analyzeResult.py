from typing import Dict, Any
from pydantic import BaseModel


class AnalysisResponse(BaseModel):
    result: Dict[str, Any]
