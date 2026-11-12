import os
import sys
# DON'T CHANGE THIS !!!
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from flask import Flask, send_from_directory
from flask_cors import CORS
from src.models.user import db
from src.models.project import Project
from src.routes.user import user_bp
from src.routes.project import project_bp

app = Flask(__name__, static_folder=os.path.join(os.path.dirname(__file__), 'static'))
app.config['SECRET_KEY'] = 'asdf#FGSgvasgf$5$WGT'

# Enable CORS for all routes
CORS(app)

app.register_blueprint(user_bp, url_prefix='/api')
app.register_blueprint(project_bp, url_prefix='/api')

# uncomment if you need to use database
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.path.dirname(__file__), 'database', 'app.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
with app.app_context():
    db.create_all()

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    static_folder_path = app.static_folder
    if static_folder_path is None:
            return "Static folder not configured", 404

    full_path = os.path.join(static_folder_path, path)
    if path != "" and os.path.isfile(full_path):
        return send_from_directory(static_folder_path, path)
    # a page route (/about, /work/<slug>): the build writes each one as <route>/index.html with its own meta
    if path != "" and os.path.isfile(os.path.join(full_path, 'index.html')):
        return send_from_directory(full_path, 'index.html')
    else:
        index_path = os.path.join(static_folder_path, 'index.html')
        if os.path.exists(index_path):
            # every real page has its own built file, so any other path is a 404: the app still loads
            # and shows its not-found page, but crawlers get the right status
            return send_from_directory(static_folder_path, 'index.html'), (200 if path == "" else 404)
        else:
            return "index.html not found", 404


if __name__ == '__main__':
    # Same safety rules as run_backend.py: loopback by default, debugger only on loopback.
    host = os.environ.get('HOST', '127.0.0.1')
    app.run(host=host, port=5000, debug=host in ('127.0.0.1', 'localhost', '::1'))
