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
                  I'm a final-year Computer Science Engineering student at Green University of Bangladesh, 
                  specializing in <span className="text-primary font-medium">Python development</span> and 
                  <span className="text-secondary font-medium"> Machine Learning</span>.
                </p>
                <p>
                  My expertise spans full-stack web development with Django, intelligent ML applications, 
                  and building scalable solutions that bridge the gap between complex algorithms and 
                  user-friendly interfaces.
                </p>
                <p>
                  I believe in writing clean, efficient code that not only solves problems but creates 
                  meaningful impact. Every project is an opportunity to learn, innovate, and push the 
                  boundaries of what's possible with technology.
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
                    <span className="text-2xl">📸</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Photography</h4>
                    <p className="text-muted-foreground">Capturing moments and perspectives through the lens, 
                    exploring visual storytelling and composition.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎬</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Cinematography</h4>
                    <p className="text-muted-foreground">Creating visual narratives and experimenting with 
                    motion, lighting, and cinematic techniques.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚽</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Football</h4>
                    <p className="text-muted-foreground">Team sports enthusiast, believing in collaboration, 
                    strategy, and the pursuit of excellence both on and off the field.</p>
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