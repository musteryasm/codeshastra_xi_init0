from flask import Flask, jsonify
from service.graph import get_daily_sales_data, all_data
from flask_cors import CORS, cross_origin
# from service.telegram import send_text_message, send_pdf_with_message
app = Flask(__name__)
cors = CORS(app) # allow CORS for all domains on all routes.
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=['GET'])
def home():
    return "Running!"

@app.route("/timestamp", methods=["GET"])
def timestamp_data():
    return get_daily_sales_data()

@app.route('/all-data', methods=["GET"])
def send_all_data():
    data = all_data()
    return jsonify(data)

#telegram
# @app.route("/send_message", methods=["POST"])
# def send_message():
#
#     send_text_message()

if __name__ == '__main__':
    app.run(debug=True)
