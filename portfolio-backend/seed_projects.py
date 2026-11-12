#!/usr/bin/env python3
import os
import sys
sys.path.insert(0, os.path.dirname(__file__))

from src.main import app, db
from src.models.project import Project
import json

def seed_projects():
    """Seed the database with initial projects from GitHub analysis"""
    
    projects_data = [
        {
            "title": "LLM Innovation in Insurance",
            "description": "A chatbot from the Tunga AKI hackathon that answers customer and claims questions for insurers with large language models.",
            "category": "AI/ML",
            "technologies": ["Python", "LLMs", "OpenAI", "Streamlit", "Insurance Analytics"],
            "github_url": "https://github.com/LubangaD/tunga-AKI-hackathon",
            "demo_url": "https://tunga-chat-hackathon.streamlit.app/chatbot",
            "image_url": "/assets/img/photo-f821965-960.jpg",
            "featured": True
        },
        {
            "title": "COVID-19 Analytics Dashboard",
            "description": "Charts of COVID-19 cases, vaccination rates and health measures, built in Python with Pandas and Plotly.",
            "category": "Analytics",
            "technologies": ["Jupyter Notebook", "Python", "Pandas", "Plotly", "Data Visualization"],
            "github_url": "https://github.com/LubangaD/coviddashboard",
            "demo_url": None,
            "image_url": "/assets/img/photo-f104570836-960.jpg",
            "featured": True
        },
        {
            "title": "Database Retrieval Chatbot",
            "description": "Ask in plain English; Vanna writes the SQL, runs it on the insurance database and returns a table, a chart and a summary.",
            "category": "AI/ML",
            "technologies": ["Jupyter Notebook", "Python", "NLP", "SQL", "Database Integration"],
            "github_url": "https://github.com/LubangaD/database-retrieval-MySQL",
            "demo_url": "http://database-retrieval-mysql-k33darydmgcunjlgltem22.streamlit.app/",
            "image_url": "/assets/img/photo-f15152154-960.jpg",
            "featured": False
        },
        {
            "title": "Youth Employment Analytics",
            "description": "An analysis of youth employment in Kenya's job market and the factors that shape it, written for policy makers.",
            "category": "Analytics",
            "technologies": ["Jupyter Notebook", "Python", "Statistical Analysis", "Data Mining"],
            "github_url": "https://github.com/LubangaD/youth_data_analysis",
            "demo_url": None,
            "image_url": None,
            "featured": False
        },
        {
            "title": "Hospital Analytics Platform",
            "description": "Sentiment analysis of patient reviews with BERT and spaCy, plus stock forecasts and operations figures in Power BI.",
            "category": "Healthcare",
            "technologies": ["Python", "NLP", "BERT", "spaCy", "Power BI", "Predictive Modeling"],
            "github_url": None,
            "demo_url": None,
            "image_url": "/assets/img/photo-f138548117-960.jpg",
            "featured": True
        },
        {
            "title": "Weather Data Pipeline",
            "description": "IoT weather readings stream through Apache Kafka and Spark, flagging abnormal weather within five minutes.",
            "category": "Data Engineering",
            "technologies": ["Apache Kafka", "Spark Streaming", "IoT", "Real-time Analytics", "Python"],
            "github_url": "https://github.com/LubangaD/lorowandatapipiline.git",
            "demo_url": None,
            "image_url": "/assets/img/photo-f85085759-960.jpg",
            "featured": True
        },

        {
            "title": "Pharmaceutical Inventory ROP model ",
            "description": "The reorder-point model from my MSc thesis, with a Streamlit tool that tells a hospital pharmacy when to restock.",
            "category": "Statistical Modeling",
            "technologies": ["Streamlit", "Statistical Model", "ML", "Real-time Analytics", "Python"],
            "github_url": "https://github.com/LubangaD/mythesis.git",
            "demo_url": "https://avenuehealthcaretool.streamlit.app/",
            "image_url": "/assets/img/photo-f177726226-960.jpg",
            "featured": True
        }
    ]
    
    with app.app_context():
        # Create all tables
        db.create_all()
        
        # Upsert by title so re-running the seed updates projects instead of duplicating them
        added = updated = 0
        for project_data in projects_data:
            seeded = Project.from_dict(project_data)
            existing = Project.query.filter_by(title=seeded.title).first()
            if existing is None:
                db.session.add(seeded)
                added += 1
                continue
            for field in ('description', 'category', 'technologies', 'github_url',
                          'demo_url', 'image_url', 'featured'):
                setattr(existing, field, getattr(seeded, field))
            updated += 1

        db.session.commit()
        print(f"Seeded projects: {added} added, {updated} updated.")

if __name__ == '__main__':
    seed_projects()

