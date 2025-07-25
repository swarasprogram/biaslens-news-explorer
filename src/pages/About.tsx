import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Globe, Shield, Users, Target, Search, BarChart3, Languages, Eye } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Sarah Chen",
      role: "AI Research Lead",
      description: "PhD in Computational Linguistics, specializing in cross-cultural bias detection and multilingual NLP systems.",
      avatar: "🧑‍💻"
    },
    {
      name: "Marcus Rodriguez",
      role: "Data Engineering",
      description: "Expert in real-time news aggregation, sentiment analysis, and building scalable AI processing pipelines.",
      avatar: "👨‍🔬"
    },
    {
      name: "Aisha Patel",
      role: "Product & Ethics",
      description: "Focuses on responsible AI development, ensuring our bias detection tools are fair and transparent.",
      avatar: "👩‍💻"
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Topic Input",
      description: "Users enter any news topic or headline they want to analyze for global perspectives.",
      icon: <Search className="h-8 w-8 text-primary" />
    },
    {
      step: "02", 
      title: "Multi-Source Aggregation",
      description: "Our system fetches articles from trusted news sources across different countries and languages.",
      icon: <Globe className="h-8 w-8 text-primary" />
    },
    {
      step: "03",
      title: "AI Analysis",
      description: "Advanced NLP models analyze each article for political bias, sentiment, and emotional patterns.",
      icon: <Brain className="h-8 w-8 text-primary" />
    },
    {
      step: "04",
      title: "Visual Comparison",
      description: "Side-by-side presentation shows how different countries report the same story.",
      icon: <BarChart3 className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About BiasLens</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showing how the world sees the same news differently. We help users understand 
            global perspectives through AI-powered analysis and transparent media technology.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <Card className="bg-gradient-hero text-white border-0 shadow-soft">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto mb-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl mb-4">What We Do</CardTitle>
              <CardDescription className="text-white/90 text-lg max-w-2xl mx-auto">
                BiasLens is an AI-powered platform that analyzes how different countries report 
                the same news stories. Simply enter any topic, and we'll show you side-by-side 
                perspectives from around the world, complete with bias detection and sentiment analysis.
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From topic input to global perspective analysis - see how we transform 
              any news query into comprehensive cross-cultural insights
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
              <CardTitle className="text-3xl mb-4">Advanced NLP & Multilingual Processing</CardTitle>
              <CardDescription className="text-lg max-w-3xl mx-auto">
                Our platform combines multiple AI technologies to deliver real-time news analysis 
                across languages and cultures
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Brain className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">NLP & Sentiment Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced models detect bias patterns, sentiment, and emotional language
                  </p>
                </div>
                <div>
                  <Languages className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Multilingual Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Process and analyze news content in 15+ languages with cultural context
                  </p>
                </div>
                <div>
                  <Globe className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Real-Time Aggregation</h3>
                  <p className="text-sm text-muted-foreground">
                    Fetch and analyze articles from 50+ countries within seconds
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