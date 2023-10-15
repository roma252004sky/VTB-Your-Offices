from flask import Flask, render_template, request, redirect
import sqlite3
app = Flask(__name__)
conn = sqlite3.connect('VTB.db')
c = conn.cursor()
conn.commit()
conn.close()
@app.route('/add', methods=['POST'])
def add():
    id = request.form['id']
    conn = sqlite3.connect('VTB.db')
    c = conn.cursor()
    c.execute('''INSERT INTO TenserFlow (id) VALUES (null)''', (id))
    conn.commit()
    return redirect('/')
if __name__ == '__main__':
    app.run(debug=True)