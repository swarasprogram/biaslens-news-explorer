import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Globe, Shield, Users, Target, Lightbulb } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "AI/ML Engineer",
      description: "Specialized in natural language processing and bias detection algorithms",
      avatar: "🧑‍💻"
    },
    {
      name: "Maria Rodriguez",
      role: "Data Scientist",
      description: "Expert in news analysis and sentiment classification systems",
      avatar: "👩‍🔬"
    },
    {
      name: "James Kim",
      role: "Full-Stack Developer",
      description: "Focused on creating intuitive user experiences for complex data",
      avatar: "👨‍💻"
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Data Collection",
      description: "We aggregate news articles from trusted sources worldwide using automated systems.",
      icon: <Globe className="h-8 w-8 text-primary" />
    },
    {
      step: "02", 
      title: "AI Analysis",
      description: "Our GPT-powered NLP models analyze language patterns, tone, and framing to detect bias.",
      icon: <Brain className="h-8 w-8 text-primary" />
    },
    {
      step: "03",
      title: "Bias Classification",
      description: "Articles are classified by political leaning and emotional sentiment with explanations.",
      icon: <Shield className="h-8 w-8 text-primary" />
    },
    {
      step: "04",
      title: "User Interface",
      description: "Clear visualizations help users understand different perspectives on the same story.",
      icon: <Lightbulb className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About BiasLens</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to help people uncover bias in news media and get a complete picture 
            of important stories through the power of artificial intelligence.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <Card className="bg-gradient-hero text-white border-0 shadow-soft">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto mb-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl mb-4">Our Mission</CardTitle>
              <CardDescription className="text-white/90 text-lg max-w-2xl mx-auto">
                In an era of information overload and polarized media, we believe everyone deserves 
                access to unbiased news analysis. BiasLens empowers readers to see beyond the spin 
                and understand the full spectrum of perspectives on important issues.
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our advanced AI system combines cutting-edge NLP technology with GPT models 
              to provide comprehensive bias analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <Card key={index} className="text-center bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                  <Badge variant="outline" className="w-fit mx-auto mb-2 text-sm font-bold">
                    Step {step.step}
                  </Badge>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <Card className="bg-muted/30 border-0 shadow-soft">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Powered by Advanced AI</CardTitle>
              <CardDescription className="text-lg max-w-3xl mx-auto">
                We leverage state-of-the-art technology to provide accurate, reliable bias detection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Brain className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">GPT Models</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced language models for nuanced text analysis
                  </p>
                </div>
                <div>
                  <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">NLP Pipeline</h3>
                  <p className="text-sm text-muted-foreground">
                    Custom natural language processing for bias detection
                  </p>
                </div>
                <div>
                  <Globe className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Global Sources</h3>
                  <p className="text-sm text-muted-foreground">
                    Multilingual analysis across international news outlets
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Three students passionate about AI, ethics, and journalism
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section>
          <Card className="bg-accent border-0 shadow-soft">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Transparency</h3>
                  <p className="text-muted-foreground">
                    We explain how our AI makes decisions and provide clear reasoning for bias classifications
                  </p>
                </div>
                <div>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Fairness</h3>
                  <p className="text-muted-foreground">
                    Our goal is to present all perspectives equally, helping users form their own informed opinions
                  </p>
                </div>
                <div>
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Global Awareness</h3>
                  <p className="text-muted-foreground">
                    We analyze news from diverse international sources to provide comprehensive coverage
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;