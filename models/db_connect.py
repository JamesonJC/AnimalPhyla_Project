import pymysql
import logging
#from app import app

logging.basicConfig(level=logging.DEBUG)

def create_connection():
    return pymysql.connect(
        host='sql10.freesqldatabase.com',
        user='sql10685554',
        password='ezFxZQrIWX',
        database='sql10685554',
        port=3306,
        cursorclass=pymysql.cursors.DictCursor
    )

def execute_query(query, data=None, fetchone=False):
    connection = create_connection()
    try:
        with connection.cursor() as cursor:
            # Print the query and data for debugging
            logging.debug("Executing query: %s with data: %s", query, data)
            if data:
                cursor.execute(query, data)
            else:
                cursor.execute(query)
            if fetchone:
                result = cursor.fetchone()
            else:
                result = cursor.fetchall()
        connection.commit()
        return result
    finally:
        connection.close()

def fetch_data(query, data=None):
    connection = create_connection()
    try:
        with connection.cursor() as cursor:
            cursor.execute(query, data)
            result = cursor.fetchall()
        return result
    finally:
        connection.close()