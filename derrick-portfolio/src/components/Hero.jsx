import { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import profileImage from '../assets/Luden.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    'Data Scientist',
    'ML Engineer', 
    'AI Enthusiast',
    'Analytics Expert'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center particle-bg hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Hi, I'm{' '}
                <span className="gradient-text">Derrick Lubanga</span>
              </h1>
              
              <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                <span className="inline-block min-h-[1.2em]">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl">
                Data Scientist with 3+ years of hands-on experience in Machine Learning, 
                Statistical modeling, and Large Language Models. Passionate about solving 
                real-world problems through scalable, data-driven solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('#projects')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold rounded-lg transition-all hover:scale-105"
              >
                View My Work
              </Button>
              
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold rounded-lg transition-all hover:scale-105"
                onClick={() => window.open('/Resume/Derrick Lubanga_DataS.pdf', '_blank', 'noopener,noreferrer')}
                
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a 
                href="mailto:lubanga.derrickn@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://github.com/LubangaD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/lubanga99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 hover:scale-105 transition-transform duration-300">
                <img 
                  src={profileImage} 
                  alt="Derrick Lubanga" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-chart-2 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-chart-3 rounded-full animate-bounce delay-700"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('#about')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

