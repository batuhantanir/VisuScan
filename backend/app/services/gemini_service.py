import google.generativeai as genai
from PIL import Image
import io
import json
import typing_extensions as typing
from app.core.config import GEMINI_API_KEY


class ImageAnalysisSchema(typing.TypedDict):
    main_subject: str
    description: str
    tags: list[str]
    is_safe_for_work: bool
    quality_score: int


genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel(
    'gemini-2.5-flash',
    generation_config={
        "response_mime_type": "application/json",
        "response_schema": ImageAnalysisSchema
    }
)


async def analyze_image_structured(file_bytes: bytes) -> dict:
    try:
        image = Image.open(io.BytesIO(file_bytes))

        prompt = "Bu resmi analiz et..."

        response = await model.generate_content_async([prompt, image])

        json_response = json.loads(response.text)

        return json_response

    except Exception as e:
        print(f"AI Service Error: {e}")
        return None
