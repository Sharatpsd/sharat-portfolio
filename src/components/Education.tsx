import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Education & Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a strong foundation in computer science and continuously expanding my knowledge
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Education Card */}
          <Card className="bg-card/50 backdrop-blur border-primary/20 card-glow transition-smooth hover:scale-105 mb-8">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* University Logo/Icon */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary-foreground">GU</span>
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                {/* Education Details */}
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      Bachelor of Science in Computer Science & Engineering
                    </h3>
                    <p className="text-lg font-medium text-secondary mb-1">
                      Green University of Bangladesh
                    </p>
                    <p className="text-muted-foreground">
                      Dhaka, Bangladesh • <span className="text-primary font-medium">Final Year Student</span>
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Focus Areas</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Software Engineering</li>
                        <li>• Machine Learning & AI</li>
                        <li>• Database Management Systems</li>
                        <li>• Web Development</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Key Subjects</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Data Structures & Algorithms</li>
                        <li>• Object-Oriented Programming</li>
                        <li>• Computer Vision</li>
                        <li>• Software Project Management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academic Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Strong Foundation",
                description: "Comprehensive understanding of computer science fundamentals and mathematical concepts"
              },
              {
                icon: "💡", 
                title: "Practical Learning",
                description: "Hands-on experience through projects, internships, and real-world applications"
              },
              {
                icon: "🏆",
                title: "Academic Excellence",
                description: "Consistent performance and dedication to learning emerging technologies"
              }
            ].map((highlight, index) => (
              <Card
                key={highlight.title}
                className="bg-card/30 backdrop-blur border-primary/10 transition-smooth hover:border-primary/30 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{highlight.icon}</div>
                  <h3 className="font-bold text-foreground mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Continuous Learning Section */}
          <Card className="mt-8 bg-gradient-to-r from-secondary/10 to-primary/10 backdrop-blur border-secondary/30 card-glow">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Continuous Learning</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                Beyond formal education, I'm constantly exploring new technologies, attending workshops, 
                and engaging with the developer community to stay at the forefront of innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Online Courses", "Tech Communities", "Open Source", "Workshops", "Research Papers"
                ].map((item, index) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-card/50 backdrop-blur border border-secondary/20 rounded-full text-sm font-medium transition-smooth hover:bg-secondary/10 hover:border-secondary/40"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;