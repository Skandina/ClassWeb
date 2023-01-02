from flask import Flask, render_template

host_addr = "0.0.0.0"
port_num = "8080"
if __name__ == "__main__":
    app.run(host_addr, port_num)

@app.route('/hello_flask')
def hello_flask():
    return render_template('hello_flask.html')

@app.route('/login_confirm', methods=['POST'])
def login_comfirm():
    id = request.form['id']
    pw = request.form['pw']
    if id == 'admin' and pw == 'admin':
        return redirect(url_for('login'))
    else:
        return redirect(url_for('index'))