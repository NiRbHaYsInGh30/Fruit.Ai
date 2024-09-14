from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from pymongo import MongoClient
from pymongo.collection import Collection
from bson import ObjectId
from typing import List, Optional
import os


# MongoDB setup
MONGO_URL = os.getenv('MONGO_URL', 'mongodb+srv://ns362038:<db_password>@cluster.gotpp.mongodb.net/')  # Update with your MongoDB URI
client = MongoClient(MONGO_URL)
db = client['FruitAi']  # Replace with your actual database name
faq_collection: Collection = db['faqs']  # Replace 'faqs' with your actual collection name

app = FastAPI()

class FAQ(BaseModel):
    question: str
    answer: str
    image: Optional[str] = None
    userId: int

def faq_helper(faq) -> dict:
    """Helper function to convert MongoDB document to dictionary."""
    faq['_id'] = str(faq['_id'])
    return faq

@app.post("/faqs/", response_model=FAQ)
async def create_faq(faq: FAQ):
    result = faq_collection.insert_one(faq.dict())
    created_faq = faq_collection.find_one({"_id": result.inserted_id})
    return faq_helper(created_faq)

@app.get("/faqs/", response_model=List[FAQ])
async def read_faqs():
    faqs = list(faq_collection.find())
    return [faq_helper(faq) for faq in faqs]

@app.get("/faqs/{faq_id}", response_model=FAQ)
async def read_faq(faq_id: str):
    try:
        faq_id = ObjectId(faq_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid FAQ ID format")
    
    faq = faq_collection.find_one({"_id": faq_id})
    if faq is None:
        raise HTTPException(status_code=404, detail="FAQ not found")
    return faq_helper(faq)

@app.put("/faqs/{faq_id}", response_model=FAQ)
async def update_faq(faq_id: str, faq: FAQ):
    try:
        faq_id = ObjectId(faq_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid FAQ ID format")
    
    result = faq_collection.replace_one({"_id": faq_id}, faq.dict(), upsert=False)
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="FAQ not found")
    updated_faq = faq_collection.find_one({"_id": faq_id})
    return faq_helper(updated_faq)

@app.delete("/faqs/{faq_id}", response_model=dict)
async def delete_faq(faq_id: str):
    try:
        faq_id = ObjectId(faq_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid FAQ ID format")
    
    result = faq_collection.delete_one({"_id": faq_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="FAQ not found")
    return {"status": "FAQ deleted"}
