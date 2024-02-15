from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return render_template('LandingPage.html')

# Additional routes for serving static files
@app.route('/static/css/<path:filename>')
def serve_css(filename):
    return send_from_directory('web_static/styles', filename)

@app.route('/static/images/<path:filename>')
def serve_images(filename):
    return send_from_directory('web_static/images', filename)

@app.route('/static/scripts/<path:filename>')
def serve_scripts(filename):
    return send_from_directory('web_static/scripts', filename)

#@app.route('/about')
#@app.route('/contacts')
#@app.route('/projects')
#@app.route('/signup/signin')

if __name__ == '__main__':
    app.run(debug=True)