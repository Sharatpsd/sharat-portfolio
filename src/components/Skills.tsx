import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    // Programming Languages
    { name: "Python", level: 95, category: "Programming" },
    { name: "JavaScript", level: 85, category: "Programming" },
    { name: "Java", level: 80, category: "Programming" },
    { name: "C++", level: 75, category: "Programming" },
    { name: "C", level: 70, category: "Programming" },
    { name: "Assembly (8086)", level: 65, category: "Programming" },
    
    // Web Technologies
    { name: "Django", level: 90, category: "Web" },
    { name: "Flask", level: 85, category: "Web" },
    { name: "HTML/CSS", level: 90, category: "Web" },
    { name: "React", level: 80, category: "Web" },
    { name: "Apache", level: 75, category: "Web" },
    
    // Tools & Technologies
    { name: "Git/GitHub", level: 90, category: "Tools" },
    { name: "Docker", level: 80, category: "Tools" },
    { name: "VS Code", level: 95, category: "Tools" },
    { name: "PyCharm", level: 85, category: "Tools" },
    { name: "Jupyter Notebook", level: 90, category: "Tools" },
    { name: "Postman", level: 85, category: "Tools" },
  ];

  const categories = ["Programming", "Web", "Tools"];

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

  const SkillBar = ({ skill, delay }: { skill: Skill; delay: number }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-primary font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out ${
            isVisible ? "skill-glow" : ""
          }`}
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building robust, scalable, and intelligent applications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <Card
              key={category}
              className="bg-card/50 backdrop-blur border-primary/20 card-glow transition-smooth hover:scale-105"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">
                  <span className={`${
                    category === "Programming" ? "text-primary" :
                    category === "Web" ? "text-secondary" : "text-accent"
                  }`}>
                    {category}
                  </span>
                </CardTitle>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
              </CardHeader>
              <CardContent className="pt-2">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={categoryIndex * 200 + skillIndex * 100}
                    />
                  ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Machine Learning Special Section */}
        <Card className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur border-primary/30 card-glow">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">Machine Learning & AI</h3>
            <p className="text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
              Specialized in developing intelligent applications with a focus on computer vision, 
              predictive modeling, and data-driven solutions. Experienced in implementing ML algorithms 
              from scratch and integrating them into production-ready web applications.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🧠", title: "Deep Learning", desc: "Neural Networks & Computer Vision" },
                { icon: "📊", title: "Data Science", desc: "Statistical Analysis & Visualization" },
                { icon: "🤖", title: "ML Engineering", desc: "Model Deployment & Optimization" },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="p-4 bg-card/30 rounded-lg border border-primary/20 transition-smooth hover:border-primary/40 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;