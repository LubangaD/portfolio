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
            "description": "Large Language Models Innovation in Insurance - Advanced AI chatbot system for insurance claim processing and customer service automation using state-of-the-art LLMs.",
            "category": "AI/ML",
            "technologies": ["Python", "LLMs", "OpenAI", "Streamlit", "Insurance Analytics"],
            "github_url": "https://github.com/LubangaD/tunga-AKI-hackathon",
            "demo_url": "https://tunga-chat-hackathon.streamlit.app/chatbot",
            "image_url": None,
            "featured": True
        },
        {
            "title": "COVID-19 Analytics Dashboard",
            "description": "Comprehensive data visualization dashboard tracking COVID-19 trends, vaccination rates, and health metrics with interactive charts and real-time data updates.",
            "category": "Analytics",
            "technologies": ["Jupyter Notebook", "Python", "Pandas", "Plotly", "Data Visualization"],
            "github_url": "https://github.com/LubangaD/coviddashboard",
            "demo_url": None,
            "image_url": None,
            "featured": True
        },
        {
            "title": "Database Retrieval Chatbot",
            "description": "Intelligent chatbot that retrieves information from databases and generates SQL statements using natural language processing. Enables non-technical users to query databases conversationally.",
            "category": "AI/ML",
            "technologies": ["Jupyter Notebook", "Python", "NLP", "SQL", "Database Integration"],
            "github_url": "https://github.com/LubangaD/database-retrieval-MySQL",
            "demo_url": "http://database-retrieval-mysql-k33darydmgcunjlgltem22.streamlit.app/",
            "image_url": None,
            "featured": False
        },
        {
            "title": "Youth Employment Analytics",
            "description": "Comprehensive analysis of youth employment trends in the job market, identifying key factors affecting employment rates and providing insights for policy makers.",
            "category": "Analytics",
            "technologies": ["Jupyter Notebook", "Python", "Statistical Analysis", "Data Mining"],
            "github_url": "https://github.com/LubangaD/youth_data_analysis",
            "demo_url": None,
            "image_url": None,
            "featured": False
        },
        {
            "title": "Hospital Analytics Platform",
            "description": "Real-time analytics platform for hospital operations, including sentiment analysis of patient reviews, inventory management predictions, and operational efficiency metrics.",
            "category": "Healthcare",
            "technologies": ["Python", "NLP", "BERT", "spaCy", "Power BI", "Predictive Modeling"],
            "github_url": None,
            "demo_url": None,
            "image_url": None,
            "featured": True
        },
        {
            "title": "Weather Data Pipeline",
            "description": "Real-time IoT weather data pipeline using Apache Kafka and Spark Streaming, enabling sub-5-minute response to abnormal weather events from sensor networks.",
            "category": "Data Engineering",
            "technologies": ["Apache Kafka", "Spark Streaming", "IoT", "Real-time Analytics", "Python"],
            "github_url": "https://github.com/LubangaD/lorowandatapipiline.git",
            "demo_url": None,
            "image_url": None,
            "featured": True
        },

        {
            "title": "Pharmaceutical Inventory ROP model ",
            "description": "Developed a robust Reorder Point (ROP) model for pharmaceutical inventory management, optimizing stock levels and reducing waste. The model integrates real-time data analytics to ensure timely replenishment of critical medications.",
            "category": "Statiscal Modeling",
            "technologies": ["Streamlit", "Statistical Model", "ML", "Real-time Analytics", "Python"],
            "github_url": "https://github.com/LubangaD/mythesis.git",
            "demo_url": "https://avenuehealthcaretool.streamlit.app/",
            "image_url": None,
            "featured": True
        }
    ]
    
    with app.app_context():
        # Create all tables
        db.create_all()
        
        # Add new projects
        for project_data in projects_data:
            project = Project.from_dict(project_data)
            db.session.add(project)
        
        db.session.commit()
        print(f"Successfully seeded {len(projects_data)} projects!")

if __name__ == '__main__':
    seed_projects()

