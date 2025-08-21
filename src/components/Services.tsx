import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
}

const Services = () => {
  const services: Service[] = [
    {
      icon: "🌐",
      title: "Web Development",
      description: "Full-stack web applications with modern frameworks, responsive design, and robust backend architecture.",
      features: [
        "Responsive & Mobile-First Design",
        "RESTful API Development",
        "Database Design & Optimization",
        "User Authentication & Security"
      ],
      technologies: ["Django", "Flask", "React", "HTML/CSS", "JavaScript", "PostgreSQL"]
    },
    {
      icon: "🤖",
      title: "Machine Learning Applications",
      description: "Intelligent systems and AI-powered solutions that transform data into actionable insights and automated decisions.",
      features: [
        "Computer Vision & Image Processing",
        "Predictive Modeling & Analytics",
        "Natural Language Processing",
        "Model Deployment & Integration"
      ],
      technologies: ["Python", "TensorFlow", "Scikit-learn", "OpenCV", "Pandas", "NumPy"]
    },
    {
      icon: "⚡",
      title: "Full-Stack Development", 
      description: "End-to-end application development from concept to deployment, ensuring seamless integration between frontend and backend.",
      features: [
        "System Architecture & Design",
        "Frontend & Backend Integration",
        "Performance Optimization",
        "DevOps & Deployment"
      ],
      technologies: ["Django", "React", "Docker", "Git", "Apache", "Linux"]
    }
  ];

  return (
    <section id="services" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Services & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive development services to bring your ideas to life with cutting-edge technology
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-card/50 backdrop-blur border-primary/20 card-glow transition-smooth hover:scale-105 hover:border-primary/40 group h-full flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6 flex-1">
                  <h4 className="font-semibold text-foreground mb-4">What I Deliver</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3 text-sm text-muted-foreground">
                        <span className="text-secondary text-lg leading-none">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-auto">
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20 hover:bg-primary/20 transition-smooth"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur border-primary/30 card-glow">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">My Development Process</h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Discovery", desc: "Understanding your vision, requirements, and goals", icon: "🔍" },
                { step: "2", title: "Design", desc: "Creating architecture, wireframes, and technical specifications", icon: "📋" },
                { step: "3", title: "Development", desc: "Building with best practices, clean code, and regular updates", icon: "⚙️" },
                { step: "4", title: "Deployment", desc: "Testing, optimization, and seamless launch", icon: "🚀" }
              ].map((phase, index) => (
                <div
                  key={phase.step}
                  className="text-center group"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <span className="text-2xl">{phase.icon}</span>
                  </div>
                  <div className="w-8 h-8 mx-auto mb-3 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">{phase.step}</span>
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{phase.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-medium bg-primary hover:bg-primary/90 transition-smooth hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Work Together
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;