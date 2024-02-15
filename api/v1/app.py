from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return render_template('LandingPage.html')

#@app.route('/about')
#@app.route('/contacts')
#@app.route('/projects')
#@app.route('/signup/signin')

if __name__ == '__main__':
    app.run(debug=True)