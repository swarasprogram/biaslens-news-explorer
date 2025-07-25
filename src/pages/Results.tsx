import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Filter, Globe, BarChart3, TrendingUp, TrendingDown, Minus } from "lucide-react";
import SimpleBiasIndicator from "@/components/SimpleBiasIndicator";

const Results = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [countryFilter, setCountryFilter] = useState("all");
  const [biasFilter, setBiasFilter] = useState("all");
  const [languageFilter, setLanguageFilter] = useState("all");

  // Mock data - in real app, this would come from API
  const mockArticles = [
    {
      id: "1",
      country: "United States",
      countryCode: "US",
      title: `US Senate Debates New ${query} Legislation`,
      summary: "Congressional leaders express divided opinions on proposed measures, with Republicans emphasizing economic concerns and Democrats focusing on social impact.",
      source: "CNN",
      bias: "Left" as const,
      sentiment: { positive: 30, neutral: 40, negative: 30 },
      biasExplanation: "Article uses emotionally charged language favoring progressive policies and quotes more Democratic sources than Republican ones.",
      language: "English"
    },
    {
      id: "2",
      country: "United Kingdom", 
      countryCode: "GB",
      title: `UK Parliament Reviews ${query} Policy Impact`,
      summary: "British officials take measured approach to new developments, emphasizing need for evidence-based policy and international cooperation.",
      source: "BBC News",
      bias: "Centre" as const,
      sentiment: { positive: 50, neutral: 35, negative: 15 },
      biasExplanation: "Balanced reporting with equal representation of different viewpoints and factual presentation of policy implications.",
      language: "English"
    },
    {
      id: "3",
      country: "Russia",
      countryCode: "RU", 
      title: `Russian Analysis: Western ${query} Policies`,
      summary: "Moscow criticizes Western approach as misguided, arguing that current policies lack practical consideration of global economic realities.",
      source: "RT",
      bias: "Right" as const,
      sentiment: { positive: 15, neutral: 25, negative: 60 },
      biasExplanation: "Strong anti-Western bias with selective use of statistics and quotes from officials supporting the government narrative.",
      language: "Russian"
    },
    {
      id: "4",
      country: "Germany",
      countryCode: "DE",
      title: `German Technical Assessment of ${query}`,
      summary: "Federal ministry releases comprehensive study examining technical feasibility, economic impact, and environmental considerations.",
      source: "Deutsche Welle",
      bias: "Centre" as const,
      sentiment: { positive: 40, neutral: 50, negative: 10 },
      biasExplanation: "Highly technical and neutral reporting focused on data and expert analysis rather than political positioning.",
      language: "German"
    },
    {
      id: "5",
      country: "China",
      countryCode: "CN",
      title: `Beijing's Perspective on Global ${query} Trends`, 
      summary: "Chinese officials emphasize importance of multilateral cooperation while maintaining that each nation should determine its own approach.",
      source: "Xinhua",
      bias: "Centre" as const,
      sentiment: { positive: 45, neutral: 45, negative: 10 },
      biasExplanation: "State media maintains neutral tone while subtly promoting Chinese diplomatic positions and multilateral approaches.",
      language: "Chinese"
    },
    {
      id: "6",
      country: "Brazil",
      countryCode: "BR",
      title: `Brazilian Civil Society Responds to ${query}`,
      summary: "Grassroots organizations and local communities express concerns about implementation while supporting overall objectives.",
      source: "Folha de S.Paulo",
      bias: "Left" as const,
      sentiment: { positive: 35, neutral: 30, negative: 35 },
      biasExplanation: "Strong focus on social justice angles and community impact, with frequent quotes from activist organizations.",
      language: "Portuguese"
    }
  ];

  const filteredArticles = mockArticles.filter(article => {
    if (countryFilter !== "all" && article.countryCode !== countryFilter) return false;
    if (biasFilter !== "all" && article.bias.toLowerCase() !== biasFilter) return false;
    if (languageFilter !== "all" && article.language.toLowerCase() !== languageFilter) return false;
    return true;
  });

  const getSentimentIcon = (sentiment: any) => {
    const { positive, negative } = sentiment;
    if (positive > negative + 10) return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (negative > positive + 10) return <TrendingDown className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-gray-500" />;
  };

  const countries = [
    { code: "all", name: "All Countries" },
    { code: "US", name: "United States" },
    { code: "GB", name: "United Kingdom" },
    { code: "DE", name: "Germany" },
    { code: "RU", name: "Russia" },
    { code: "CN", name: "China" },
    { code: "BR", name: "Brazil" }
  ];

  const languages = [
    { code: "all", name: "All Languages" },
    { code: "english", name: "English" },
    { code: "german", name: "German" },
    { code: "russian", name: "Russian" },
    { code: "chinese", name: "Chinese" },
    { code: "portuguese", name: "Portuguese" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Search
            </Link>
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Viewpoints on: "{query}"
          </h1>
          <p className="text-muted-foreground text-lg">
            Analyzing {filteredArticles.length} articles from {new Set(filteredArticles.map(a => a.country)).size} countries
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span className="font-medium">Filters:</span>
            </div>
            
            <Select value={countryFilter} onValueChange={setCountryFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={biasFilter} onValueChange={setBiasFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Bias Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Bias</SelectItem>
                <SelectItem value="left">Left</SelectItem>
                <SelectItem value="centre">Centre</SelectItem>
                <SelectItem value="right">Right</SelectItem>
              </SelectContent>
            </Select>

            <Select value={languageFilter} onValueChange={setLanguageFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((language) => (
                  <SelectItem key={language.code} value={language.code}>
                    {language.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <img 
                        src={`https://flagcdn.com/24x18/${article.countryCode.toLowerCase()}.png`}
                        alt={`${article.country} flag`}
                        className="w-6 h-4"
                      />
                      <span className="font-medium text-sm">{article.country}</span>
                    </div>
                    <SimpleBiasIndicator bias={article.bias} />
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {article.summary}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{article.source}</span>
                    <span>{article.language}</span>
                  </div>

                  {/* Sentiment Analysis */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {getSentimentIcon(article.sentiment)}
                      <span className="text-sm font-medium">Sentiment</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Positive</span>
                        <span>{article.sentiment.positive}%</span>
                      </div>
                      <Progress value={article.sentiment.positive} className="h-1" />
                      
                      <div className="flex justify-between text-xs">
                        <span>Negative</span>
                        <span>{article.sentiment.negative}%</span>
                      </div>
                      <Progress value={article.sentiment.negative} className="h-1" />
                    </div>
                  </div>

                  {/* Bias Explanation */}
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="text-xs font-medium mb-1">AI Bias Analysis:</h4>
                    <p className="text-xs text-muted-foreground">
                      {article.biasExplanation}
                    </p>
                  </div>

                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/article/${article.id}`}>
                      View Full Analysis
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <Globe className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search for a different topic.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Results;