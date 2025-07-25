import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, TrendingUp, Globe, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import ArticleCard from "@/components/ArticleCard";
import heroImage from "@/assets/hero-news.jpg";

const Home = () => {
  const featuredArticles = [
    {
      id: "1",
      title: "Global Climate Summit Reaches Historic Agreement on Carbon Emissions",
      summary: "World leaders agree on ambitious targets for reducing greenhouse gas emissions by 2030, marking a significant step forward in international climate cooperation.",
      source: "Reuters",
      country: "United States",
      bias: "Centre" as const,
      date: "2024-01-15",
    },
    {
      id: "2", 
      title: "Tech Giants Face New Regulatory Challenges in European Markets",
      summary: "EU lawmakers propose stricter data protection rules that could reshape how major technology companies operate across European markets.",
      source: "BBC News",
      country: "United Kingdom",
      bias: "Left" as const,
      date: "2024-01-14",
    },
    {
      id: "3",
      title: "Economic Growth Indicators Show Mixed Signals Across Global Markets",
      summary: "Latest economic data reveals varied performance across different regions, with some markets showing strong growth while others face headwinds.",
      source: "Financial Times",
      country: "Germany",
      bias: "Right" as const,
      date: "2024-01-13",
    },
    {
      id: "4",
      title: "Breakthrough in Renewable Energy Storage Technology Announced",
      summary: "Scientists unveil new battery technology that could revolutionize renewable energy storage, making green power more reliable and cost-effective.",
      source: "Nature Journal",
      country: "Japan",
      bias: "Centre" as const,
      date: "2024-01-12",
    },
  ];

  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Bias Detection",
      description: "Advanced AI analyzes political leaning and emotional sentiment in every article"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Coverage",
      description: "News from trusted sources worldwide in multiple languages"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Real-time Analysis",
      description: "Instant bias detection and explanation powered by cutting-edge NLP"
    }
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
              Discover political bias in global news with AI-powered analysis. 
              Get the complete picture, not just one perspective.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search news topics..."
                  className="pl-12 h-12 text-lg bg-white/95 backdrop-blur border-0"
                />
              </div>
            </div>
            
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3">
              <Link to="/categories">Start Exploring</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How BiasLens Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI technology helps you understand the full story behind every news article
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

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Articles</h2>
              <p className="text-muted-foreground">Latest news with AI bias analysis</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/categories">
                <TrendingUp className="mr-2 h-4 w-4" />
                View All Categories
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;