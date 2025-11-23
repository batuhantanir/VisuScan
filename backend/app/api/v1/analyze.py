from fastapi import status, File, UploadFile, HTTPException, Request
from fastapi.responses import JSONResponse
from fastapi.routing import APIRouter
from app.schemas.analyzeResult import AnalysisResponse
from app.services.gemini_service import analyze_image_structured

router = APIRouter(
    prefix="/analyze",
)


@router.post("/")
async def get_analysis(
    request: Request,
    file: UploadFile = File(),
) -> JSONResponse:
    if not file:
        return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content={"message": "No file uploaded."},
        )

    if file.content_type.split("/")[0] != "image":
        return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content={"message": "Uploaded file is not an image."},
        )

    if file.filename == "":
        return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content={"message": "Uploaded file has no filename."},
        )

    content = await file.read()

    if not content:
        return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content={"message": "Uploaded file is empty."},
        )
    
    language = request.headers.get("Accept-Language", "en")

    result = await analyze_image_structured(content, language=language)

    if result is None or "error" in result:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Yapay zeka analizi sırasında bir hata oluştu."
        )

    print(f"Analysis Result: {result}")
    response_content = AnalysisResponse(
        result=result,
    )

    return JSONResponse(status_code=status.HTTP_200_OK, content=response_content.dict())
