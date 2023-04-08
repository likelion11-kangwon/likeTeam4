from typing import Union
from fastapi import FastAPI
from Database import Database


app = FastAPI()
db = Database()

@app.get("/views")
def getViews():
    return "hello"

@app.post("/views")
def getViews():
    return "hello"