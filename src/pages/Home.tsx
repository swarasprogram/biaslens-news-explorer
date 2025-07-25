import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Globe, Shield, Zap, Brain, BarChart3, Languages } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-news.jpg";

const Home = () => {
  const [newsQuery, setNewsQuery] = useState("");
  const navigate = useNavigate();

  const handleAnalyze = () => {
    if (newsQuery.trim()) {
      navigate(`/results?q=${encodeURIComponent(newsQuery.trim())}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAnalyze();
    }
  };

  const features = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Perspectives",
      description: "Compare how different countries report the same news story"
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "AI Bias Detection",
      description: "Advanced NLP identifies political leaning and emotional sentiment"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Visual Analysis",
      description: "Clear charts and explanations make bias patterns easy to understand"
    }
  ];

  const exampleQueries = [
    "Climate change policy",
    "Economic sanctions",
    "Immigration reform",
    "Technology regulation"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              See Every Side. <br />
              <span className="text-accent-foreground">Read Smarter.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Enter any news topic and see how different countries report it. 
              Discover bias patterns with AI-powered analysis.
            </p>
            
            {/* Central Input Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter a news topic or headline..."
                  value={newsQuery}
                  onChange={(e) => setNewsQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-14 h-14 text-lg bg-white/95 backdrop-blur border-0 rounded-lg"
                />
              </div>
            </div>
            
            {/* Example Queries */}
            <div className="mb-8">
              <p className="text-sm text-white/70 mb-3">Try these examples:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {exampleQueries.map((query, index) => (
                  <button
                    key={index}
                    onClick={() => setNewsQuery(query)}
                    className="px-3 py-1 text-sm bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                  >
                    {query}
                  </button>
                ))}
              </div>
            </div>
            
            <Button 
              onClick={handleAnalyze}
              disabled={!newsQuery.trim()}
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3 disabled:opacity-50"
            >
              Analyze News
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How BiasLens Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enter a topic and see how the world reports it differently
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Process</h2>
            <p className="text-muted-foreground">How we analyze news from around the world</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold mb-2">Enter Topic</h3>
              <p className="text-sm text-muted-foreground">Type any news headline or topic you want to analyze</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold mb-2">Fetch Articles</h3>
              <p className="text-sm text-muted-foreground">We gather articles from multiple countries and sources</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold mb-2">AI Analysis</h3>
              <p className="text-sm text-muted-foreground">Our NLP detects bias, sentiment, and key differences</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                4
              </div>
              <h3 className="font-semibold mb-2">Compare Views</h3>
              <p className="text-sm text-muted-foreground">See side-by-side perspectives from different countries</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;