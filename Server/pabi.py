from flask import Flask, request, jsonify
from flask_cors import CORS

from model import User,db
app = Flask(__name__)
CORS(app)

# Configuring the Database URI for SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:1234@localhost:5432/postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initializing the Database
db.init_app(app)
def serialize_user(user):
    return {
        "id": user.id,
        "firstname": user.firstname,
        "lastname": user.lastname,
        "email": user.email
    }


@app.route('/insertuser', methods=['POST'])
def insert_data():
    try:
        # Get JSON data from request
        data = request.get_json()

        # Extract fields from the JSON data
        
        firstname = data.get('firstname')
        lastname = data.get('lastname')
        email = data.get('email')
        password = data.get('password')

        # Create a new User object and add it to the session
        new_user = User(id=2,firstname=firstname, lastname=lastname, email=email, password=password)
        db.session.add(new_user)
        db.session.commit()

        # Respond with a success message
        return jsonify({"message": "Data inserted successfully!"}), 201

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": "An error occurred."}), 400

@app.route('/getuser', methods=['POST'])
def get_user_by_id():
    try:
        # Get JSON data from the request
        data = request.get_json()

        # Extract the user ID from the JSON data
        user_id = data.get('id')

        # Check if the 'id' field is provided
        if not user_id:
            return jsonify({"message": "User ID is required"}), 400

        # Query the database for the user using the model
        user = User.query.get(user_id)

        # Check if the user exists
        if user:
            # Serialize the user data into a JSON-friendly format
          
            return jsonify({"message": "User found", "user":  serialize_user(user)}), 200
        else:
            return jsonify({"message": "User not found"}), 404

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": "An error occurred."}),

@app.route('/alluser', methods=['POST'])
def get_alluser():
    try:
        # Query the database for all users
        users = User.query.all()

        # Check if any users exist
        if users:
            # Serialize the user data into a JSON-friendly format
            serialized_users = [serialize_user(p) for p in users]
          
            return jsonify({"message": "Users found", "users": serialized_users}), 200
        else:
            return jsonify({"message": "No users found"}), 404

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": "An error occurred."}), 500


@app.route('/get_alluserbySp', methods=['POST'])
def get_alluserbySp():
    try:
        # Execute the stored procedure
        result = db.session.execute("CALL sp_getAllUser")
        users = result.fetchall()

        # Check if any users exist
        if users:
            # Serialize the user data into a JSON-friendly format
            serialized_users = []
            for user in users:
                serialized_users.append({
                    "id": user.id,
                    "firstname": user.firstname,
                    "lastname": user.lastname,
                    "email": user.email
                })
          
            return jsonify({"message": "Users found", "users": serialized_users}), 200
        else:
            return jsonify({"message": "No users found"}), 404

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": "An error occurred."}), 500

@app.route("/get-user/<user_id>")
def get_user(user_id):
    user = User.query.get(user_id)
    if user:
        data = {
            "user_id": user.id,
            "firstname": user.firstname,
            "lastname": user.lastname,
            "email": user.email
        }
        return jsonify(data), 200
    else:
        return jsonify({"message": "User not found"}), 404


@app.route("/")
def home():
    return "Home Page"


if __name__ == "__main__":
    with app.app_context():
        # Create all tables
        db.create_all()
    app.run(debug=True)
