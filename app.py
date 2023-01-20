
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def test():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/login_confirm', methods=['POST'])
def login_comfirm():
    id = request.form['id']
    pw = request.form['pw']
    if id == 'admin' and pw == 'admin':
        return redirect(url_for('login'))
    else:
        return redirect(url_for('index'))

if __name__=="__main__":
    app.run(host='0.0.0.0', port='8080', debug=True)
