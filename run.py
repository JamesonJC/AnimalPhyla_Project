from app import app
import os

#port = int(os.environ.get("PORT", 5000))
app.run(debug=True)

if __name__ == "__main__":
    #port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, port=8000)