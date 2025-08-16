import { User, MapPin, GraduationCap, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const highlights = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "3+ Years Experience",
      description: "Hands-on experience in ML, Statistical modeling, and LLMs"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "MSc Data Science",
      description: "Strathmore University | Thesis on Predictive Analytics in Healthcare"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Based in Nairobi",
      description: "Working across Africa and Europe"
    },
    {
      icon: <User className="h-6 w-6" />,
      title: "Problem Solver",
      description: "Passionate about real-world impact through data"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A dedicated Data Scientist with a passion for transforming data into actionable insights 
            and building AI-powered solutions that make a real difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a dedicated Data Scientist and AI enthusiast with a background in 
                data analytics, business intelligence, and machine learning. My passion lies in 
                transforming complex data into actionable insights and crafting innovative solutions 
                that drive real-world impact.
              </p>
              
              <p>
              I help businesses and organizations unlock the value of their data by building predictive models, automating analytics pipelines, and creating interactive dashboards.
              My work empowers teams to make data-driven decisions, optimize operations, and uncover hidden insights using machine learning, real-time data processing, and natural language processing. Whether it’s forecasting demand, 
              improving customer experience, or enhancing system efficiency. I turn complex data into clear, actionable outcomes.
              </p>
              
              {/* <p>
                My experience spans across healthcare, public sector, and insurance domains, where 
                I've developed predictive models, real-time analytics pipelines, and deployed 
                AI-powered applications that have significantly improved decision-making processes 
                and operational efficiency.
              </p> */}
              
              <p>
                I believe in the power of data to solve complex problems and am committed to 
                contributing to Kenya's growing AI talent pipeline through hands-on training 
                and knowledge sharing.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border border-border/50 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Education</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">MSc Data Science And Analytics</h4>
                    <p className="text-primary font-medium">Strathmore University</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Major: Data Science | Minor: Computational Statistics
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Thesis: Developing Predictive Analytics for ABC-VEN Inventory management in Kenyan Hospitals
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">BS Mathematics and Computer Science</h4>
                    <p className="text-primary font-medium">Kenya Methodist University</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Major: Mathematics | Minor: Computer Science
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Strong foundation in mathematical modeling and computational thinking
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

