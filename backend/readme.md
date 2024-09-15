# Backend Setup for Fruti.AI

This guide will help you set up and run the backend server for the Fruti.AI project.

## Setup Instructions

### 1. Navigate to the Backend Directory

Open your terminal or command prompt and change to the `backend` directory:

```bash
cd backend
python -m venv venv
venv\Scripts\activate
On macOS/Linux:
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload

