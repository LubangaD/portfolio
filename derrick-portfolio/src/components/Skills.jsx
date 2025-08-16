import { useState, useEffect, useRef } from 'react';
import { Code, Database, Brain, BarChart3, Cloud, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "JavaScript", level: 75 },
        { name: "R", level: 70 }
      ]
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Machine Learning & AI",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Scikit-learn", level: 90 },
        { name: "LLMs & NLP", level: 85 }
      ]
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Data Visualization",
      skills: [
        { name: "Power BI", level: 95 },
        { name: "Tableau", level: 85 },
        { name: "Matplotlib", level: 90 },
        { name: "Plotly", level: 85 }
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Engineering",
      skills: [
        { name: "Apache Kafka", level: 80 },
        { name: "Apache Spark", level: 75 },
        { name: "ETL Pipelines", level: 85 },
        { name: "BigQuery", level: 70 }
      ]
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud & Deployment",
      skills: [
        { name: "AWS", level: 75 },
        { name: "Azure", level: 70 },
        { name: "Docker", level: 65 },
        { name: "Streamlit", level: 90 }
      ]
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Tools & Frameworks",
      skills: [
        { name: "Git", level: 85 },
        { name: "Jupyter", level: 95 },
        { name: "Flask", level: 80 },
        { name: "React", level: 75 }
      ]
    }
  ];

  const SkillBar = ({ skill, isVisible }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: isVisible ? '0.2s' : '0s'
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning the entire data science pipeline, from data collection 
            and processing to advanced machine learning and deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border border-border/50 hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    {category.icon}
                  </div>
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    skill={skill} 
                    isVisible={isVisible}
                  />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Additional Expertise</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/80 backdrop-blur-sm border border-border/50 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8" />
                </div>
                <h4 className="font-semibold mb-2">Statistical Modeling</h4>
                <p className="text-sm text-muted-foreground">
                  Advanced statistical methods, hypothesis testing, and predictive modeling
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border border-border/50 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <h4 className="font-semibold mb-2">Business Intelligence</h4>
                <p className="text-sm text-muted-foreground">
                  Dashboard design, KPI development, and data-driven decision making
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border border-border/50 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8" />
                </div>
                <h4 className="font-semibold mb-2">Research & Training</h4>
                <p className="text-sm text-muted-foreground">
                  Academic research, workshop facilitation, and knowledge transfer
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

