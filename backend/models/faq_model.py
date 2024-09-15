from pydantic import BaseModel, Field
from typing import Optional

class FAQModel(BaseModel):
    id: Optional[str] = Field(None, alias="_id", title="Unique FAQ ID")  # Optional ID field
    question: str = Field(..., title="The question text")
    answer: str = Field(..., title="The answer text")
    image: Optional[str] = Field(None, title="Image URL")

    class Config:
        allow_population_by_field_name = True  # Enable population of _id
        schema_extra = {
            "example": {
                "question": "What is Fruit AI?",
                "answer": "Fruit AI is a health management system...",
                "image": "https://example.com/image.jpg"
            }
        }