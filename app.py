from flask import Flask, render_template, jsonify, url_for

import numpy as np
import pandas as pd

N = 300

# Flask application:
app = Flask(__name__)
app.config['SECRET_KEY'] = '123'
app.config['TEMPLATES_AUTO_RELOAD'] = True

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('graph.html', title='Live Data Feed Example')

@app.route('/data.csv', methods=['GET', 'POST'])
def renderCSVData():
    y1 = np.random.rand(N, 1).flatten()
    y2 = np.random.rand(N, 1).flatten()
    y3 = (0.5 + 0.5 * np.random.rand(N, 1)).flatten()
    y4 = (0.5 + 0.5 * np.random.rand(N, 1)).flatten()
    array = np.stack((y1, y2, y3, y4))
    return jsonify(array.tolist())

@app.route('/text', methods=['GET', 'POST'])
def renderTextData():
    return jsonify([np.random.randint(0,10), 'some text here'])


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', use_reloader=False)