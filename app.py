from flask import Flask, render_template, jsonify
app = Flask(__name__, static_folder="./dist", template_folder="./dist")
# app = Flask(__name__, static_folder="./", template_folder="./")
@app.route('/')
def index():
    return render_template("index.html")
@app.route('/test')
def test():
    return jsonify(10)
app.run(host="localhost", port="8081", debug=True)