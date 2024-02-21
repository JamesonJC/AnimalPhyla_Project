import pymysql

config = pymysql.connect(
    host='sql10.freesqldatabase.com',
    database='sql10685554',
    user='sql10685554',
    passwd='ezFxZQrIWX',
    port=3306,
    cursorclass=pymysql.cursors.DictCursor
)

cursor = config.cursor()

sql_query = """ CREATE TABLE  Users (
user_id integer PRIMARY KEY,
username VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
password_hash VARCHAR(255) NOT NULL
)"""

cursor.execute(sql_query)
config.close()