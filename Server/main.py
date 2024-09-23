from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
from psycopg2 import sql

app = Flask(__name__)
CORS(app)

# Database connection setup
def get_db_connection():
    conn = psycopg2.connect(
        dbname='postgres',
        user='postgres',
        password='1234',
        host='localhost',
        port='5432'
    )
    return conn

@app.route("/")
def getHome():
    return "Home"

@app.route("/userDetails/<userid>")
def getUserDetails(userid):
    if userid == "123":
        member = {
            "name": "pabi",
            "fname": "Ramesh Keshri"
        }
    else:
        member = {}
    return jsonify(member)

@app.route("/insertData", methods=['POST'])
def insertData():
    sname = request.form.get('sname')
    lname = request.form.get('lname')
    fname = request.form.get('fname')
    email = request.form.get('email')
    pwd = request.form.get('pwd')

    print(f"First name: {fname}")
    print(f"Name: {sname}")

    # Insert data into the database
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
      
        insert_query = sql.SQL('INSERT INTO public."Student" (sname, lname, fname, email, pwd) VALUES (%s, %s, %s, %s, %s)')
        cursor.execute(insert_query, (sname, lname, fname, email, pwd))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({'msg': 'Data added successfully'})
    except Exception as e:
        return jsonify({'msg': 'Error occurred', 'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
