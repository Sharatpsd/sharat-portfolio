import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubLink: string;
  demoLink?: string;
  category: "ML" | "Web" | "Full-Stack";
}

const Portfolio = () => {
  const projects: Project[] = [
    {
      title: "Precision Eye Care",
      description: "Advanced ML application for automatic detection of eye conditions, power measurement, and personalized treatment suggestions using computer vision and deep learning.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "NumPy"],
      features: [
        "Real-time eye condition detection",
        "Automated power measurement",
        "Treatment recommendation system",
        "Computer vision processing"
      ],
      githubLink: "#",
      demoLink: "#",
      category: "ML"
    },
    {
      title: "Heart Disease Predictor",
      description: "Intelligent health assessment tool combining logistic regression ML models with a user-friendly Django web interface for heart disease risk prediction.",
      technologies: ["Python", "Django", "Scikit-learn", "Pandas", "Bootstrap"],
      features: [
        "ML-powered risk assessment",
        "Interactive web interface", 
        "Data visualization dashboard",
        "Patient history tracking"
      ],
      githubLink: "#",
      demoLink: "#",
      category: "Full-Stack"
    },
    {
      title: "Django CRUD Management",
      description: "Comprehensive web application demonstrating full Create, Read, Update, Delete operations with modern UI/UX and robust backend architecture.",
      technologies: ["Django", "PostgreSQL", "JavaScript", "CSS3", "HTML5"],
      features: [
        "Complete CRUD functionality",
        "Responsive design",
        "User authentication",
        "Data validation & security"
      ],
      githubLink: "#",
      category: "Web"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "ML": return "text-primary bg-primary/10 border-primary/30";
      case "Full-Stack": return "text-secondary bg-secondary/10 border-secondary/30";
      case "Web": return "text-accent bg-accent/10 border-accent/30";
      default: return "text-muted-foreground bg-muted/10 border-muted/30";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "ML": return "🧠";
      case "Full-Stack": return "⚡";
      case "Web": return "🌐";
      default: return "💻";
    }
  };

  return (
    <section id="portfolio" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Portfolio & Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions at the intersection of machine learning, web development, and user experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card/50 backdrop-blur border-primary/20 card-glow transition-smooth hover:scale-105 hover:border-primary/40 group h-full flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                    {getCategoryIcon(project.category)} {project.category}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6 flex-1">
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-primary border-primary/30 hover:bg-primary/10"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    View Code
                  </Button>
                  {project.demoLink && (
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => window.open(project.demoLink, '_blank')}
                    >
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur border-primary/30 card-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Collaborate?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always excited to work on new projects and explore innovative solutions. 
                Let's build something amazing together.
              </p>
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-medium bg-primary hover:bg-primary/90 transition-smooth hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;