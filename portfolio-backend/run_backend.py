#!/usr/bin/env python3
import os
import sys
sys.path.insert(0, os.path.dirname(__file__))

from src.main import app

LOOPBACK_HOSTS = ('127.0.0.1', 'localhost', '::1')

if __name__ == '__main__':
    # Listen on this machine only by default. Set HOST=0.0.0.0 to reach it from other devices.
    host = os.environ.get('HOST', '127.0.0.1')
    # The Werkzeug debugger lets anyone who can reach it run code, so only enable it on loopback.
    debug = host in LOOPBACK_HOSTS
    app.run(host=host, port=5001, debug=debug)

