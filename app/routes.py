from flask import render_template
from app import app

@app.route('/')
@app.route('/home')
def index():
    return render_template('index.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/projects')
def projects():
    return render_template('conservation_projects.html')

@app.route('/about')
def aboutUs():
    return render_template('about_us.html')

@app.route('/contacts')
def contacts():
    return render_template('contacts.html')