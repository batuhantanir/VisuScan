from fastapi import APIRouter, HTTPException, status

router = APIRouter(
    prefix="/analyze",
    tags=["Analyze"],
)


@router.get("/")
def get_analysis():
    return {"message": "This is a placeholder for analysis"}


@router.post("/",
             status_code=status.HTTP_201_CREATED)
def post_analysis(data: dict):
    return {"message": "Analysis created", "data": data}