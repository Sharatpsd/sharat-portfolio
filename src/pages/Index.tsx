import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Education from "@/components/Education";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Skills />
        <Portfolio />
        <Education />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
