import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-pic.jpg";
const Hero = () => {
  return <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img src={profileImage} alt="Sharat Acharjee Mugdho - Professional Profile" className="w-48 h-48 rounded-full border-4 border-primary/20 shadow-2xl transition-smooth hover:scale-105 hover:border-primary/40" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-0 hover:opacity-100 transition-smooth"></div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl font-bold font-heading mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent md:text-5xl">Hello, I'm Sharat Acharjee Mugdho</h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            A Python Django Devoloper
            <br />
            <span className="text-primary font-medium">Building intelligent web solutions</span>
          </p>
          
          {/* Specialties */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["Python", "Django", "React", "JavaScript"].map((skill, index) => <span key={skill} className="px-4 py-2 bg-card/50 backdrop-blur border border-primary/20 rounded-full text-sm font-medium transition-smooth hover:bg-primary/10 hover:border-primary/40" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {skill}
              </span>)}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-6 text-lg font-medium bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth hover:scale-105 hover:shadow-lg" onClick={() => window.open('https://drive.google.com/file/d/1VZhwHpYlof4pdZ61LO7tTwIajdGXGeln/view?usp=sharing', '_blank')}>
              Too see My Resume 
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-medium border-primary/30 text-primary hover:bg-primary/10 transition-smooth hover:scale-105" onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-secondary rounded-full animate-pulse delay-500"></div>
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-primary rounded-full animate-pulse delay-1000"></div>
    </section>;
};
export default Hero;
