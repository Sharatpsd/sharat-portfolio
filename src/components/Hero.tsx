import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-pic.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profileImage}
                alt="Sharat Acharjee Mugdho - Professional Profile"
                className="w-48 h-48 rounded-full border-4 border-primary/20 shadow-2xl transition-smooth hover:scale-105 hover:border-primary/40"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-0 hover:opacity-100 transition-smooth"></div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
            Hello, I'm Sharat Acharjee Mugdho, a Python Full-Stack Developer
          </h1>
          
          {/* Bio Sections */}
          <div className="max-w-4xl mx-auto mb-12 space-y-8">
            {/* My Journey */}
            <div className="text-left bg-card/30 backdrop-blur border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">My Journey</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a Computer Science and Engineering student at Green University of Bangladesh, with a growing interest in Python development and Machine Learning. My academic work and projects include full-stack web development using Django and experimenting with intelligent applications. I am committed to writing clean, efficient code and view every project as an opportunity to develop my skills and broaden my knowledge.
              </p>
            </div>

            {/* Beyond Code */}
            <div className="text-left bg-card/30 backdrop-blur border border-secondary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">Beyond Code</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💻</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Programming</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Gaining experience in multiple programming languages and technologies through continuous practice.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🤖</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Machine Learning</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Actively learning the fundamentals of ML with the aim of applying this knowledge in future research and projects.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📑</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Research</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Developing interest in academic research related to machine learning, artificial intelligence, and data-driven solutions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🛠️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Problem-Solving</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Applying analytical thinking and technical skills to solve real-world challenges and improve professional competency.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Specialties */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["Django", "Machine Learning", "Full-Stack", "Python"].map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-card/50 backdrop-blur border border-primary/20 rounded-full text-sm font-medium transition-smooth hover:bg-primary/10 hover:border-primary/40"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="px-8 py-6 text-lg font-medium bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth hover:scale-105 hover:shadow-lg"
              onClick={() => window.open('https://drive.google.com/file/d/1CNx-n2E4kp6RseyiSO6Hkj-Dm_TX42pJ/view', '_blank')}
            >
              Download My Resume
            </Button>
            <Button
              variant="outline"
              size="lg" 
              className="px-8 py-6 text-lg font-medium border-primary/30 text-primary hover:bg-primary/10 transition-smooth hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-secondary rounded-full animate-pulse delay-500"></div>
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-primary rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;