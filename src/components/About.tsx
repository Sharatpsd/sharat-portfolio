import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating intelligent solutions through code and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Biography */}
          <Card className="bg-card/50 backdrop-blur border-primary/20 card-glow transition-smooth hover:scale-105">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am a Computer Science and Engineering student at Green University of Bangladesh, with a growing interest in Python development and Machine Learning. My academic work and projects include full-stack web development using Django and experimenting with intelligent applications. I am committed to writing clean, efficient code and view every project as an opportunity to develop my skills and broaden my knowledge.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Personal Interests */}
          <Card className="bg-card/50 backdrop-blur border-secondary/20 card-glow transition-smooth hover:scale-105">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Beyond Code</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Programming</h4>
                    <p className="text-muted-foreground">Gaining experience in multiple programming languages and technologies through continuous practice.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Machine Learning</h4>
                    <p className="text-muted-foreground">Actively learning the fundamentals of ML with the aim of applying this knowledge in future research and projects.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📑</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Research</h4>
                    <p className="text-muted-foreground">Developing interest in academic research related to machine learning, artificial intelligence, and data-driven solutions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Problem-Solving</h4>
                    <p className="text-muted-foreground">Applying analytical thinking and technical skills to solve real-world challenges and improve professional competency.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "15+", label: "Projects Completed" },
            { number: "3+", label: "Years Learning" },
            { number: "10+", label: "Technologies" },
            { number: "100%", label: "Dedication" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-card/30 backdrop-blur rounded-xl border border-primary/10 transition-smooth hover:border-primary/30 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;