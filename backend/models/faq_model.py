from pydantic import BaseModel, Field
from typing import Optional

class FAQModel(BaseModel):
    question: str = Field(..., title="The question text")
    answer: str = Field(..., title="The answer text")
    image: Optional[str] = Field(None, title="Image URL")
    userId: int = Field(..., title="User ID")

    class Config:
        schema_extra = {
            "example": {
                "question": "What is Fruit AI?",
                "answer": "Fruit AI is a health management system...",
                "image": "https://example.com/image.jpg",
                "userId": 1,
            }
        }
