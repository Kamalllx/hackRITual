from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Routes for rendering pages
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/secret_cameras')
def secret_cameras():
    return render_template('security_cameras.html')

@app.route('/secret_cameras/flag_part2')
def flag_part2():
    return render_template('flag_part2.html')

@app.route('/secret_cameras/TheProfessorsCommunications')
def next_challenge():
    return render_template('TheProfessorsCommunications.html')

# API route to check answers
@app.route('/check-answer', methods=['POST'])
def check_answer():
    data = request.json
    question = data.get("question")
    user_answer = data.get("answer")

    # Define correct answers and logic
    correct_answers = {
        "camera_equation": "2333336",
        "binary_puzzle": "10101101",
    }

    if question == "binary_puzzle":
        if user_answer == correct_answers["binary_puzzle"]:
            return jsonify({
                "success": True,
                "message": "Success! Flag Part 2: _R1Tu4l_ \n\n..... Secret Quest: Solve the equation in Camera 2 feed to get the route to the next challenge!"
            })
        else:
            return jsonify({
                "success": False,
                "message": (
                    "Incorrect! Try again. Find the Binary equivalent of X.\n\n"
                    "Clues to find X are:\n\n"
                    "Clue 1: The number must be the highest prime less than 200 satisfying the other clues.\n"
                    "Clue 2: The number leaves a remainder of 3 when divided by 5.\n"
                    "Clue 3: The number minus 30 is divisible by 11."
                )
            })

    elif question == "camera_equation":
        if user_answer == correct_answers["camera_equation"]:
            return jsonify({
                "success": True,
                "message": "Correct! URL to the next challenge: \n /secret_cameras/TheProfessorsCommunications"
            })
        else:
            return jsonify({
                "success": False,
                "message": "Incorrect! Try solving the equation again."
            })

    # If question not recognized
    return jsonify({
        "success": False,
        "message": "Invalid question or answer."
    })

if __name__ == '__main__':
    app.run(debug=True)
