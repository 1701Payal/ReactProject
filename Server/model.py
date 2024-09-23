from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Defining the User Model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(50), nullable=False)
    lastname = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)  # Hash passwords in production

    def __repr__(self):
        return f"<User {self.firstname} {self.lastname}>"