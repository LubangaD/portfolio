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

### Add New Projects via API:
```bash
curl -X POST http://localhost:5001/api/projects \
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

