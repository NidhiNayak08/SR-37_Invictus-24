from flask import Flask, request, jsonify, session
from flask_bcrypt import Bcrypt #pip install Flask-Bcrypt = https://pypi.org/project/Flask-Bcrypt/
from flask_cors import CORS, cross_origin #ModuleNotFoundError: No module named 'flask_cors' = pip install Flask-Cors
from models import db, User
import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from joblib import load


app = Flask(__name__)
 
app.config['SECRET_KEY'] = 'cairocoders-ednalan'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///flaskdb.db'
 
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True
  
bcrypt = Bcrypt(app) 
CORS(app, supports_credentials=True)
db.init_app(app)
  
with app.app_context():
    db.create_all()
 
@app.route("/")
def hello_world():
    return "Hello, World!"

# Load the trained Decision Tree model
model = load('risk.joblib')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        print(type(model))

        print(data)

        input_data = {
            'Attendance': float(data['Attendance']),
            'Overall_Grade': data['Overall_Grade'],  # Assuming this is categorical
            'Family_Income': float(data['Family_Income']),
            'course_fees': float(data['course_fees']),
            'fees_paid': float(data['fees_paid'])
        }


        # Convert data to DataFrame with an index
        input_df = pd.DataFrame([input_data], index=[0])

        # Print the DataFrame for inspection
        print("Input Data:")
        print(input_df)

        # Ensure the model is fitted before making predictions
        # model.fit(X_train, y_train)  # Uncomment and replace with your actual training data
        
        # Make predictions using the loaded model
        # Make predictions using the loaded model
        prediction = model.predict(input_df.values)
        


        return jsonify({'prediction': int(prediction[0])})

    except Exception as e:
        return jsonify({'error': str(e)})
 
@app.route("/signup", methods=["POST"])
def signup():
    email = request.json["email"]
    password = request.json["password"]
 
    user_exists = User.query.filter_by(email=email).first() is not None
 
    if user_exists:
        return jsonify({"error": "Email already exists"}), 409
     
    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
 
    session["user_id"] = new_user.id
 
    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    })
 
@app.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]
  
    user = User.query.filter_by(email=email).first()
  
    if user is None:
        return jsonify({"error": "Unauthorized Access"}), 401
  
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401
      
    session["user_id"] = user.id
  
    return jsonify({
        "id": user.id,
        "email": user.email
    })
 
if __name__ == "__main__":
    app.run(debug=True)