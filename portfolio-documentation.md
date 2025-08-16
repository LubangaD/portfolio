# Derrick Lubanga - Data Scientist Portfolio

## Overview

A professional, full-stack portfolio website showcasing Derrick Lubanga's expertise in data science, machine learning, and analytics. The portfolio features a modern dark theme design with dynamic project management capabilities.

## Features

### 🎨 Modern Design
- **Dark Theme**: Professional dark color scheme with cyan accents
- **Responsive Layout**: Optimized for desktop and mobile devices
- **Smooth Animations**: Typewriter effects, hover animations, and smooth scrolling
- **Professional Typography**: Clean, readable fonts with proper hierarchy

### 🚀 Dynamic Content
- **Project Management**: Add, edit, and delete projects through the web interface
- **Category Filtering**: Filter projects by category (AI/ML, Analytics, Healthcare, Data Engineering)
- **Real-time Updates**: Projects are stored in a database and updated dynamically
- **GitHub Integration**: Pre-populated with projects from GitHub analysis

### 📱 Sections
1. **Hero Section**: Introduction with profile image and call-to-action
2. **About**: Personal journey, education, and key highlights
3. **Experience**: Professional timeline with detailed achievements
4. **Projects**: Dynamic showcase of data science projects
5. **Skills**: Interactive skill bars with technology proficiency
6. **Contact**: Contact form and social media links

## Technology Stack

### Frontend
- **React 18**: Modern JavaScript framework
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide Icons**: Beautiful, customizable icons
- **Vite**: Fast build tool and development server

### Backend
- **Flask**: Python web framework
- **SQLAlchemy**: Database ORM
- **SQLite**: Lightweight database
- **Flask-CORS**: Cross-origin resource sharing

## Project Structure

```
portfolio-backend/
├── src/
│   ├── models/
│   │   ├── user.py          # User model (template)
│   │   └── project.py       # Project model
│   ├── routes/
│   │   ├── user.py          # User routes (template)
│   │   └── project.py       # Project API routes
│   ├── static/              # Built React frontend
│   ├── database/
│   │   └── app.db          # SQLite database
│   └── main.py             # Flask application entry point
├── venv/                   # Python virtual environment
├── requirements.txt        # Python dependencies
├── seed_projects.py        # Database seeding script
└── run_backend.py         # Alternative run script

derrick-portfolio/
├── src/
│   ├── components/         # React components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── assets/
│   │   └── vikings.jpg     # Profile image
│   ├── App.jsx            # Main React component
│   └── App.css            # Custom styles
├── dist/                  # Built frontend (production)
└── package.json           # Node.js dependencies
```

## API Endpoints

### Projects API
- `GET /api/projects` - Get all projects (with optional filtering)
- `POST /api/projects` - Create a new project
- `GET /api/projects/{id}` - Get a specific project
- `PUT /api/projects/{id}` - Update a project
- `DELETE /api/projects/{id}` - Delete a project
- `GET /api/projects/categories` - Get all project categories

### Query Parameters
- `category`: Filter projects by category
- `featured`: Filter featured projects (true/false)

## Running Locally

### Prerequisites
- Python 3.11+
- Node.js 20+
- pnpm (or npm)

### Backend Setup
```bash
cd portfolio-backend
source venv/bin/activate
pip install -r requirements.txt
python seed_projects.py  # Seed initial data
python run_backend.py   # Start on port 5001
```

### Frontend Development (Optional)
```bash
cd derrick-portfolio
pnpm install
pnpm run dev  # Development server on port 5173
```

### Full-Stack (Production Mode)
The backend serves the built React frontend from the static directory.
Access the full application at: http://localhost:5001

## Adding New Projects

### Via API (Programmatic)
```bash
curl -X POST http://localhost:5001/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Project",
    "description": "Project description",
    "category": "AI/ML",
    "technologies": ["Python", "TensorFlow"],
    "github_url": "https://github.com/user/repo",
    "demo_url": "https://demo.example.com",
    "featured": true
  }'
```

### Via Web Interface
1. Navigate to the Projects section
2. Click "Add Project" button
3. Fill in the project details
4. Submit the form

## Customization

### Updating Personal Information
Edit the following files:
- `derrick-portfolio/src/components/About.jsx` - Personal information
- `derrick-portfolio/src/components/Experience.jsx` - Work experience
- `derrick-portfolio/src/components/Skills.jsx` - Technical skills
- `derrick-portfolio/src/components/Contact.jsx` - Contact information

### Changing Colors/Theme
Edit `derrick-portfolio/src/App.css`:
- CSS custom properties in `:root` section
- Update color values for primary, secondary, background, etc.

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add to `src/App.jsx`
3. Update navigation in `src/components/Navigation.jsx`

## Deployment

### Production Build
```bash
cd derrick-portfolio
pnpm run build
cp -r dist/* ../portfolio-backend/src/static/
cd ../portfolio-backend
source venv/bin/activate
pip freeze > requirements.txt
```

### Deployment Options
1. **Cloud Platforms**: Deploy to Heroku, Railway, or similar
2. **VPS**: Deploy to any Linux server with Python support
3. **Docker**: Containerize for consistent deployment

## Database Schema

### Projects Table
```sql
CREATE TABLE projects (
    id INTEGER PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    technologies TEXT NOT NULL,  -- JSON array
    github_url VARCHAR(500),
    demo_url VARCHAR(500),
    image_url VARCHAR(500),
    featured BOOLEAN DEFAULT FALSE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## Performance Optimizations

- **Code Splitting**: React components are lazy-loaded
- **Image Optimization**: Profile image is optimized for web
- **CSS Minification**: Tailwind CSS is purged and minified
- **Database Indexing**: Proper indexes on frequently queried fields
- **Caching**: Static assets are cached with appropriate headers

## Security Features

- **CORS Protection**: Configured for secure cross-origin requests
- **Input Validation**: All API inputs are validated
- **SQL Injection Prevention**: Using SQLAlchemy ORM
- **XSS Protection**: React's built-in XSS protection

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This portfolio is created for Derrick Lubanga. Feel free to use as inspiration for your own portfolio, but please don't copy the personal content.

## Support

For questions or issues with the portfolio:
- Email: lubanga.derrickn@gmail.com
- GitHub: https://github.com/LubangaD
- LinkedIn: https://linkedin.com/in/lubanga99

