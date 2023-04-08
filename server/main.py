from typing import Union
from fastapi import FastAPI, status, Response
from Database import Database


app = FastAPI()
db = Database()

# 조회수 가져옴
def getViewsFromDb():
    views = db.read("views", {"id":1})[0][1]
    return views

# 조회수 + d 함
def updateViews(d):
    db.update("views", {"id":1, "count":int(getViewsFromDb())+d})

# 유저 아이피 반환
def getIp():
    userIp = ""
    return userIp

# 중복이면 참 반환, 처음이면 거짓
def checkIp(ip):
    ret = True
    return ret

@app.get("/views", status_code=200)
def getViews():
    return {"views":getViewsFromDb()}

@app.post("/views", status_code=201)
def getViews(response: Response):
    if checkIp(getIp()):
        response.status_code = 403
        return {"response":"중복된 요청"}
    updateViews(1)
    return {"response":"성공"}