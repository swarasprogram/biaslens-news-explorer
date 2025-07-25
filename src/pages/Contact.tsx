import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, MessageSquare, Bug, Lightbulb, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedbackType: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your feedback. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", feedbackType: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/biaslens",
      description: "Check out our open source code"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com/company/biaslens",
      description: "Connect with our team"
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:team@biaslens.com",
      description: "team@biaslens.com"
    }
  ];

  const feedbackTypes = [
    { value: "bug", label: "Bug Report", icon: <Bug className="h-4 w-4" /> },
    { value: "suggestion", label: "Feature Suggestion", icon: <Lightbulb className="h-4 w-4" /> },
    { value: "compliment", label: "Compliment", icon: <Heart className="h-4 w-4" /> },
    { value: "general", label: "General Inquiry", icon: <MessageSquare className="h-4 w-4" /> }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions, feedback, or ideas? We'd love to hear from you. 
            Our team is always looking to improve BiasLens.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your full name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                {/* Feedback Type */}
                <div>
                  <label htmlFor="feedbackType" className="block text-sm font-medium mb-2">
                    Feedback Type
                  </label>
                  <Select value={formData.feedbackType} onValueChange={(value) => handleInputChange("feedbackType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select feedback type..." />
                    </SelectTrigger>
                    <SelectContent>
                      {feedbackTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center gap-2">
                            {type.icon}
                            <span>{type.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us what's on your mind..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{link.name}</h3>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* FAQ / Quick Help */}
            <Card className="bg-accent border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl">Quick Help</CardTitle>
                <CardDescription>
                  Common questions and useful information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">How accurate is the bias detection?</h4>
                  <p className="text-sm text-muted-foreground">
                    Our AI models achieve 85%+ accuracy in bias classification, constantly improving through user feedback.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Can I suggest new features?</h4>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! We welcome feature suggestions and actively consider user feedback for our roadmap.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Is BiasLens free to use?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, BiasLens is completely free. We believe bias detection should be accessible to everyone.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-primary text-primary-foreground border-0 shadow-soft">
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-sm opacity-90">
                  We typically respond to messages within 24-48 hours. 
                  For urgent issues, please mention "URGENT" in your subject line.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Email */}
        <div className="text-center mt-12">
          <Card className="bg-muted/30 border-0 shadow-soft">
            <CardContent className="pt-6">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Direct Team Contact</h3>
              <p className="text-muted-foreground mb-4">
                For partnerships, press inquiries, or technical questions
              </p>
              <Badge variant="outline" className="text-lg py-2 px-4">
                team@biaslens.com
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;