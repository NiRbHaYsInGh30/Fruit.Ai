import os
from pymongo import MongoClient

MONGO_URL = os.getenv('MONGO_URL', 'mongodb+srv://ns362038:wbNp4WJJmWEJXuQ@cluster.gotpp.mongodb.net/')  # Set from environment variable
client = MongoClient(MONGO_URL)

db = client['FruitAi']  # Your database
faq_collection = db['faqs']  # Collection for FAQs

def faq_helper(faq) -> dict:
    """Helper function to convert MongoDB document to dictionary format."""
    faq['_id'] = str(faq['_id'])
    return faq
