from flask import Flask, request, jsonify

app = Flask(__name__)

# Mock function to check if user exists
def user_exists(email):
    # Query database to check if the user exists
    return False  # Assume user doesn't exist for this example

@app.route("/api/update-profile", methods=["POST"])
def update_profile():
    data = request.get_json()
    full_name = data.get("fullName")
    email = data.get("email")
    mobile = data.get("mobile")
    birthday = data.get("birthday")
    gender = data.get("gender")
    
    if user_exists(email):
        return jsonify({"error": "User already exists"}), 400
    
    # Proceed to update user in the database
    # db.update_user(data)
    return jsonify({"message": "Profile updated successfully!"})

if __name__ == "__main__":
    app.run(debug=True)
