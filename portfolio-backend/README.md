# Derrick Lubanga - Data Scientist Portfolio

A professional full-stack portfolio website showcasing expertise in data science, machine learning, and analytics.

## Quick Start

1. **Start the Backend**:
   ```bash
   cd portfolio-backend
   source venv/bin/activate
   python run_backend.py
   ```

2. **Access the Portfolio**:
   Open http://localhost:5001 in your browser

   The dev server only accepts connections from this machine, with the Flask debugger on.
   To open it from another device on your network, start it with `HOST=0.0.0.0`; the
   debugger is then switched off, because anyone who can reach it could run code.

## Features

- 🎨 Modern dark theme design
- 📱 Fully responsive layout
- 🚀 Dynamic project management
- 🔍 Project filtering by category
- 📊 Interactive skills visualization
- 💼 Professional experience timeline
- 📧 Contact form integration

## Tech Stack

- **Frontend**: React, Tailwind CSS, Vite
- **Backend**: Flask, SQLAlchemy, SQLite
- **Deployment**: Production-ready with static file serving

## Project Management

### Admin access
Reading projects is public. Creating, updating and deleting projects, and every
`/api/users` route, need an admin token. Set it in the environment before starting
the backend (use a long random value, and set the same variable on your host when deploying):

```bash
export ADMIN_TOKEN="$(python -c 'import secrets; print(secrets.token_urlsafe(32))')"
```

If `ADMIN_TOKEN` is not set, those routes return `403`. Requests without the right
token return `401`. You can also manage projects with `python seed_projects.py`,
which writes to the database directly and updates existing projects by title.

### Add New Projects via API:
```bash
curl -X POST http://localhost:5001/api/projects \
  -H "Authorization: Bearer $ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Your Project",
    "description": "Project description",
    "category": "AI/ML",
    "technologies": ["Python", "TensorFlow"],
    "github_url": "https://github.com/user/repo",
    "featured": true
  }'
```

### View All Projects:
```bash
curl http://localhost:5001/api/projects
```

## Customization

- Update personal info in React components
- Modify colors in `src/App.css`
- Add new sections as needed
- Extend API for additional features

## Deployment

The application is ready for deployment to any platform supporting Python/Flask applications.

---

Created with ❤️ for Derrick Lubanga's professional portfolio.

