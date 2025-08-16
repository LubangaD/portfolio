#!/usr/bin/env python3
import os
import sys
sys.path.insert(0, os.path.dirname(__file__))

from src.main import app

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)

