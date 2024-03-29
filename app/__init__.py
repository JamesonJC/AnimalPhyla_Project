from flask import Flask
from animalPhyla.models.db_config import db
from app.routes2 import index
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://sql10685554:ezFxZQrIWX@sql10.freesqldatabase.com/sql10685554'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
bcrypt = Bcrypt(app)

app.register_blueprint(index, url_prefix='/')  # Add url_prefix here