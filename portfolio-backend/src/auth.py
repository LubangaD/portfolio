import hmac
import os
from functools import wraps

from flask import jsonify, request


def admin_auth_error():
    """Return an error response unless the request carries the admin token, else None.

    The token comes from the ADMIN_TOKEN environment variable and must be sent as
    `Authorization: Bearer <token>`. If ADMIN_TOKEN is not set, admin access is
    refused outright so a misconfigured deployment fails closed.
    """
    expected = os.environ.get('ADMIN_TOKEN')
    if not expected:
        return jsonify({
            'success': False,
            'error': 'Admin access is disabled: ADMIN_TOKEN is not configured on the server'
        }), 403

    scheme, _, supplied = request.headers.get('Authorization', '').partition(' ')
    if scheme.lower() != 'bearer' or not hmac.compare_digest(
        supplied.strip().encode(), expected.encode()
    ):
        return (
            jsonify({'success': False, 'error': 'Unauthorized'}),
            401,
            {'WWW-Authenticate': 'Bearer'},
        )
    return None


def require_admin(view):
    """Route decorator: only let requests with a valid admin token through."""
    @wraps(view)
    def wrapper(*args, **kwargs):
        error = admin_auth_error()
        if error is not None:
            return error
        return view(*args, **kwargs)
    return wrapper
