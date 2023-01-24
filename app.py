
from flask import Flask, render_template,request

app = Flask(__name__)


@app.route('/')
def test():
    return render_template('index.html')

@app.route('/login_check', methods=["POST"])
def login_check():
    userId = request.form['id']
    userPwd = request.form['pwd']

    if userId  == 'admin' and userPwd == 'admin123':
        return render_template('login.html')
    else:
        return render_template('index.html')
    
    return print("username:", username, "password:", password)

if __name__=="__main__":
    app.run(host='0.0.0.0', port='8080', debug=True)
