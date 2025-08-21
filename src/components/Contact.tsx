import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("Cf-zIloKJIH6GQixV");

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Send email using EmailJS
    try {
      await emailjs.send(
        "service_36l8axo", // Service ID
        "template_lel4b1s", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Sharat Acharjee Mugdho"
        }
      );
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📱",
      label: "Phone",
      value: "01783720914",
      link: "tel:+8801783720914"
    },
    {
      icon: "✉️",
      label: "Email", 
      value: "sharatacharjee6@gmail.com",
      link: "mailto:sharatacharjee6@gmail.com"
    },
    {
      icon: "💼",
      label: "GitHub",
      value: "github.com/sharatacharjee",
      link: "https://github.com/sharatacharjee"
    },
    {
      icon: "🔗",
      label: "LinkedIn",
      value: "LinkedIn Profile",
      link: "https://linkedin.com/in/sharatacharjee"
    }
  ];

  return (
    <section id="contact" className="py-20 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur border-primary/20 card-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Send a Message</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background/50 border-primary/20 focus:border-primary/50"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background/50 border-primary/20 focus:border-primary/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background/50 border-primary/20 focus:border-primary/50 resize-none"
                    placeholder="Tell me about your project, ideas, or how I can help..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 text-lg font-medium bg-primary hover:bg-primary/90 transition-smooth hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending Message...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur border-secondary/20 card-glow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-secondary">Contact Information</CardTitle>
                <p className="text-muted-foreground">
                  Prefer direct contact? Reach out through any of these channels.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 bg-background/30 backdrop-blur rounded-lg border border-primary/10 transition-smooth hover:border-primary/30 hover:bg-primary/5 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                      <span className="text-xl">{contact.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                        {contact.label}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-primary/80 transition-smooth">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Availability Card */}
            <Card className="bg-gradient-to-r from-secondary/10 to-primary/10 backdrop-blur border-secondary/30 card-glow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
                  <span className="text-2xl text-primary-foreground">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">Ready to Start</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently available for new projects and collaborations. 
                  Let's discuss how I can help bring your ideas to life with innovative technology solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;