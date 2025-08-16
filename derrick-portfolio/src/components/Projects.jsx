import { useState, useEffect } from 'react';
import { Github, ExternalLink, Plus, Edit, Trash2, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  // Fetch projects from backend
  useEffect(() => {
    fetchProjects();
    fetchCategories();
  }, []);

  // Filter projects when activeFilter changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [projects, activeFilter]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/projects');
      const data = await response.json();
      
      if (data.success) {
        setProjects(data.projects);
      } else {
        setError(data.error || 'Failed to fetch projects');
      }
    } catch (err) {
      setError('Failed to connect to server');
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/projects/categories');
      const data = await response.json();
      
      if (data.success) {
        setCategories(['all', ...data.categories]);
      }
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  const handleAddProject = () => {
    setShowAddForm(true);
  };

  const ProjectCard = ({ project }) => {
    const getTechColor = (tech) => {
      const colors = {
        'Python': 'bg-blue-500/20 text-blue-300',
        'JavaScript': 'bg-yellow-500/20 text-yellow-300',
        'React': 'bg-cyan-500/20 text-cyan-300',
        'Flask': 'bg-green-500/20 text-green-300',
        'LLMs': 'bg-purple-500/20 text-purple-300',
        'NLP': 'bg-pink-500/20 text-pink-300',
        'Machine Learning': 'bg-orange-500/20 text-orange-300',
        'Data Science': 'bg-indigo-500/20 text-indigo-300',
      };
      return colors[tech] || 'bg-gray-500/20 text-gray-300';
    };

    return (
      <div className="project-card group">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
            {project.featured && (
              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <Edit className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className={`text-xs px-2 py-1 rounded-full ${getTechColor(tech)}`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div className="flex gap-3 mt-auto">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
          {project.demo_url && (
            <a
              href={project.demo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Demo
            </a>
          )}
          {!project.github_url && !project.demo_url && (
            <span className="text-sm text-muted-foreground">Coming Soon</span>
          )}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Loading projects...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-destructive max-w-3xl mx-auto">
              Error loading projects: {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in data science, machine learning, and analytics across various domains including healthcare, insurance, and public sector.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className="capitalize"
            >
              <Filter className="h-4 w-4 mr-2" />
              {category === 'all' ? 'All Projects' : category}
            </Button>
          ))}
          
          <Button
            onClick={handleAddProject}
            variant="outline"
            className="border-dashed border-primary/50 text-primary hover:bg-primary/10"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Project
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found for the selected category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

