'''from app import app
import os
from flask import Flask

app = Flask(__name__)

app.run(debug=True)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)'''

from app import app

if __name__ == "__main__":
    app.run(debug=True)