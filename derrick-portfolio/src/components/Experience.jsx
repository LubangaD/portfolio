import { Calendar, MapPin, Building, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Junior Data Scientist",
      company: "iLab Africa, Strathmore University",
      location: "Nairobi, Kenya",
      period: "July 2025 – Present",
      type: "Full-time",
      achievements: [
        "Developing statistical models to forecast poultry population and production for the Kenya Livestock Masterplan",
        "Designing data pipeline using IMARIKA LoRaWAN sensors for Power BI visualizations",
        "Implementing weather forecasting with Neural GCM to support data-driven planting decisions for farmers"
      ],
      technologies: ["Python", "Power BI", "LoRaWAN", "Neural Networks", "Statistical Modeling"]
    },
    {
      title: "Design Thinking Innovator",
      company: "SUGAR Network for Design Innovation",
      location: "Potsdam, Germany",
      period: "Dec 2024 – March 2025",
      type: "Hybrid",
      achievements: [
        "Facilitated 5+ stakeholder workshops across Africa and Europe to design cross-functional innovation strategies",
        "Supported integration of 3 Kenyan institutions into the SUGAR network through academic-industry collaboration models",
        "Developed frameworks for international design thinking methodologies"
      ],
      technologies: ["Design Thinking", "Workshop Facilitation", "Cross-cultural Collaboration"]
    },
    {
      title: "Data Science Research Scholar",
      company: "iLab Africa, Strathmore University",
      location: "Nairobi, Kenya",
      period: "May 2023 – June 2025",
      type: "Research",
      achievements: [
        "Designed and deployed real-time AI chatbot using Python, Streamlit, and LLMs for live data stream analytics",
        "Engineered real-time data pipeline for IoT weather data using Apache Kafka and Spark Streaming",
        "Developed interactive Power BI dashboard showcased during Kenya–EU Economic Partnership Agreement forum",
        "Conducted sentiment and thematic analysis of hospital reviews using NLP libraries (spaCy, NLTK, BERT)",
        "Developed predictive models for inventory management, minimizing overstocking and stockouts",
        "Built time series forecasting models improving financial planning accuracy by 15%",
        "Conducted geospatial analytics to map hospital locations and propose infrastructure enhancements"
      ],
      technologies: ["Python", "Streamlit", "LLMs", "Apache Kafka", "Spark", "Power BI", "NLP", "BERT", "spaCy", "NLTK", "ARIMA", "XGBoost", "Prophet", "GeoPandas", "Folium"]
    },
    {
      title: "Data Analyst Intern",
      company: "Meru County Government",
      location: "Meru, Kenya",
      period: "May 2022 – Oct 2022",
      type: "Internship",
      achievements: [
        "Analyzed procurement and electronics consumption data using Pandas, Power BI, and SQL",
        "Produced reports that influenced strategic budget reallocations across county departments",
        "Wrote Python scripts for data cleaning and validation, increasing reporting accuracy by 30%",
        "Designed interactive dashboards for stakeholders to support evidence-based policy planning",
        "Maintained digital infrastructure uptime at 98%"
      ],
      technologies: ["Python", "Pandas", "Power BI", "SQL", "Data Cleaning", "Dashboard Design"]
    },
    {
      title: "Data Science Research Assistant",
      company: "CNEAT Research Academy",
      location: "Meru, Kenya",
      period: "Oct 2020 – Apr 2022",
      type: "Research",
      achievements: [
        "Conducted field studies on assistive technologies in education using custom Google Forms",
        "Cleaned and analyzed data using Excel and Python for NGO inclusive learning programs",
        "Diagnosed and resolved 75+ hardware and software malfunctions, maintaining 99% operational uptime",
        "Pioneered integration of assistive technology tools resulting in 95% satisfaction rate",
        "Trained over 60 students with physical disabilities on accessibility software"
      ],
      technologies: ["Python", "Excel", "Google Forms", "Data Analysis", "Assistive Technology"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A journey through impactful roles in data science, research, and innovation across 
            healthcare, government, and academic sectors.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-primary font-semibold mt-1">
                      <Building className="h-4 w-4" />
                      {exp.company}
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="border-primary/30 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

