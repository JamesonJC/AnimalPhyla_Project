from flask import render_template, request, redirect, url_for, flash
from app import app
from models.db_connect import execute_query, fetch_data
from models.utils import hash_password

@app.route('/')
@app.route('/home')
def index():
    return render_template('index.html')

# New route for handling sign-up form submission
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        # Get form data
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        confirm_password = request.form['confirm_password']

        # Check if passwords match
        if password != confirm_password:
            flash('Passwords do not match', 'error')
            return redirect(url_for('signup'))

        # Hash the password (for security)
        # Note: You should use a secure password hashing library (e.g., Werkzeug)
        hashed_password = hash_password(password)

        # Insert user data into the database
        query = "INSERT INTO users (username, email, password) VALUES (%s, %s, %s)"
        data = (username, email, hashed_password)
        execute_query(query, data)

        # Redirect to the home page or another appropriate page
        return redirect(url_for('index'))

    return render_template('signup.html')
# New route for handling login form submission
@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        query = "SELECT * FROM users WHERE email=%s AND password=%s"
        data = (email, password)

        user = execute_query(query, data, fetchone=True)

        if user:
            # User found, you can implement login logic here
            return redirect(url_for('index'))
        else:
            # User not found or incorrect credentials
            return render_template('login.html', error='Invalid email or password')

@app.route('/projects')
def projects():
    return render_template('conservation_projects.html')

@app.route('/about')
def aboutUs():
    return render_template('about_us.html')

@app.route('/contacts')
def contacts():
    return render_template('contacts.html')