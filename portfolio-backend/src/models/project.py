from src.models.user import db
from datetime import datetime
import json

class Project(db.Model):
    __tablename__ = 'projects'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=False)
    category = db.Column(db.String(100), nullable=False)
    technologies = db.Column(db.Text, nullable=False)  # JSON string
    github_url = db.Column(db.String(500), nullable=True)
    demo_url = db.Column(db.String(500), nullable=True)
    image_url = db.Column(db.String(500), nullable=True)
    featured = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'category': self.category,
            'technologies': json.loads(self.technologies) if self.technologies else [],
            'github_url': self.github_url,
            'demo_url': self.demo_url,
            'image_url': self.image_url,
            'featured': self.featured,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None
        }
    
    @staticmethod
    def from_dict(data):
        project = Project()
        project.title = data.get('title', '')
        project.description = data.get('description', '')
        project.category = data.get('category', '')
        project.technologies = json.dumps(data.get('technologies', []))
        project.github_url = data.get('github_url')
        project.demo_url = data.get('demo_url')
        project.image_url = data.get('image_url')
        project.featured = data.get('featured', False)
        return project

