import sqlite3
import config

class Database:
    def __init__(self):
        self.dbConnection = sqlite3.connect(config.dbPath, check_same_thread=False)
    def __del__(self):
        self.dbConnection.close()

    def create(self, table, data):
        try:
            c = self.dbConnection.cursor()
            query = "INSERT INTO " + table +  "("+", ".join(list(data.keys()))+")" + "VALUES " + "(" + ",".join(["?" for _ in data])+ ")"
            c.execute(query, list(data.values()))
            self.dbConnection.commit()
            return True
        except Exception as e:
            print(e)
            return False
    def read(self, table, data):
        try:
            c = self.dbConnection.cursor()
            query = "SELECT * FROM " + table
            if data:
                query += "WHERE" + " AND ".join([str(a)+"="+str(data[a]) for a in data])
            c.execute(query)
            return c.fetchall()
        except Exception as e:
            print(e)
            return None
    def update(self, table, data):
        try:
            c = self.dbConnection.cursor()
            query = "UPDATE " + table + " SET "
            query += ", ".join([str(a)+"="+str(data[a]) for a in data if not a=="id"])
            query += "WHERE " + "id=" + data["id"]
            c.execute(query)
            self.dbConnection.commit()
            return True
        except Exception as e:
            print(e)
            return False

if __name__ == "__main__":
    con = sqlite3.connect(config.dbPath)
    c = con.cursor()
    c.execute("CREATE TABLE Address (id integer PRIMARY KEY, ip text)")
    c.execute("CREATE TABLE Views (id integer PRIMARY KEY, count integer)")
    con.close()