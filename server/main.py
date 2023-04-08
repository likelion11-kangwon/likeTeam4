from typing import Union
from fastapi import FastAPI
from Database import Database


app = FastAPI()
db = Database()

# 조회수 가져옴
def getViewsFromDb():
    views = 0
    return views

# 조회수 + d 함
def updateViews(d):
    pass

# 유저 아이피 반환
def getIp():
    userIp = ""
    return userIp

# 중복이면 참 반환, 처음이면 거짓
def checkIp(ip):
    ret = True
    return ret

@app.get("/views")
def getViews():
    return {"views":getViewsFromDb()}

@app.post("/views")
def getViews():
    if checkIp(getIp()):
        # 중복 요청 무시하고 403 반환
        pass
    updateViews()
    #성공 이후 200 반환