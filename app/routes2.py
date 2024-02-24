from flask import render_template, Blueprint, request, flash, redirect, url_for
from animalPhyla.models.db_connect import execute_query, fetch_data
from animalPhyla.models.utils import hash_password
from animalPhyla.models.models import User
from animalPhyla.models.db_config import db

index = Blueprint('index', __name__, static_folder="static", template_folder="templates")

@index.route('/')
@index.route('/home')
def home():
    return render_template('index.html')

@index.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        confirm_password = request.form['confirm_password']

        if password != confirm_password:
            flash('Passwords do not match', 'error')
            return redirect(url_for('signup'))

        # Create a new User instance and set the password
        new_user = User(username=username, email=email)
        new_user.set_password(password)

        # Add the new user to the database
        db.session.add(new_user)
        db.session.commit()

        return redirect(url_for('index'))

    return render_template('signup.html')

@index.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        # Query the database for the user with the given email
        user = User.query.filter_by(email=email).first()

        if user and user.check_password(password):
            # User found, you can implement login logic here
            return redirect(url_for('index'))
        else:
            return render_template('login.html', error='Invalid email or password')

@index.route('/projects')
def projects():
    return render_template('conservation_projects.html')

@index.route('/about')
def aboutUs():
    return render_template('about_us.html')

@index.route('/contacts')
def contacts():
    return render_template('contacts.html')