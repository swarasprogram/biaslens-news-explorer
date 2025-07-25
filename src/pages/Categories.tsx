import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("politics");
  const [countryFilter, setCountryFilter] = useState("all");
  const [biasFilter, setBiasFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "politics", name: "Politics", count: 124 },
    { id: "economy", name: "Economy", count: 89 },
    { id: "technology", name: "Technology", count: 156 },
    { id: "environment", name: "Environment", count: 67 },
    { id: "health", name: "Health", count: 43 },
    { id: "international", name: "International", count: 201 },
  ];

  const articles = [
    {
      id: "1",
      title: "Congressional Budget Office Projects Economic Growth Despite Political Uncertainty",
      summary: "New analysis suggests the economy will continue to expand through 2024, even as political tensions remain high heading into election season.",
      source: "Washington Post",
      country: "United States",
      bias: "Left" as const,
      date: "2024-01-15",
    },
    {
      id: "2",
      title: "Federal Reserve Maintains Interest Rates Amid Inflation Concerns",
      summary: "Central bank officials cite need for continued vigilance on price stability while supporting economic recovery efforts.",
      source: "Wall Street Journal",
      country: "United States", 
      bias: "Right" as const,
      date: "2024-01-14",
    },
    {
      id: "3",
      title: "Bipartisan Infrastructure Bill Shows Early Success in Job Creation",
      summary: "Government data reveals significant employment gains in construction and manufacturing sectors following infrastructure investments.",
      source: "Associated Press",
      country: "United States",
      bias: "Centre" as const,
      date: "2024-01-13",
    },
    {
      id: "4",
      title: "Supreme Court Decision on Voting Rights Sparks National Debate",
      summary: "Latest ruling on electoral procedures draws sharp responses from both parties, highlighting ongoing tensions over election security.",
      source: "CNN",
      country: "United States",
      bias: "Left" as const,
      date: "2024-01-12",
    },
    {
      id: "5",
      title: "State Governors Push Back Against Federal Climate Regulations",
      summary: "Coalition of state leaders challenges new environmental rules, citing economic concerns and jurisdictional disputes.",
      source: "Fox News",
      country: "United States",
      bias: "Right" as const,
      date: "2024-01-11",
    },
    {
      id: "6",
      title: "Tech Industry Leaders Testify on Social Media Regulation",
      summary: "Congressional hearing examines proposals for increased oversight of digital platforms and content moderation practices.",
      source: "Reuters",
      country: "United States",
      bias: "Centre" as const,
      date: "2024-01-10",
    },
  ];

  const countries = ["United States", "United Kingdom", "Germany", "France", "Canada", "Australia", "Japan", "India"];
  const biasTypes = ["Left", "Right", "Centre"];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">News Categories</h1>
          <p className="text-lg text-muted-foreground">
            Explore news articles with AI-powered bias analysis
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="h-auto py-3 px-4"
            >
              <div className="text-center">
                <div className="font-medium">{category.name}</div>
                <div className="text-xs opacity-70">{category.count} articles</div>
              </div>
            </Button>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-card rounded-lg border p-6 mb-8 shadow-soft">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold">Filters</h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Country Filter */}
            <Select value={countryFilter} onValueChange={setCountryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Countries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                {countries.map((country) => (
                  <SelectItem key={country} value={country.toLowerCase()}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Bias Filter */}
            <Select value={biasFilter} onValueChange={setBiasFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Bias Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Bias Levels</SelectItem>
                {biasTypes.map((bias) => (
                  <SelectItem key={bias} value={bias.toLowerCase()}>
                    {bias}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Clear Filters */}
            <Button variant="outline" onClick={() => {
              setCountryFilter("all");
              setBiasFilter("all");
              setSearchQuery("");
            }}>
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Active Filters */}
        {(countryFilter !== "all" || biasFilter !== "all" || searchQuery) && (
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {countryFilter !== "all" && (
              <Badge variant="secondary" className="gap-1">
                Country: {countryFilter}
                <button onClick={() => setCountryFilter("all")} className="ml-1 hover:text-destructive">×</button>
              </Badge>
            )}
            {biasFilter !== "all" && (
              <Badge variant="secondary" className="gap-1">
                Bias: {biasFilter}
                <button onClick={() => setBiasFilter("all")} className="ml-1 hover:text-destructive">×</button>
              </Badge>
            )}
            {searchQuery && (
              <Badge variant="secondary" className="gap-1">
                Search: "{searchQuery}"
                <button onClick={() => setSearchQuery("")} className="ml-1 hover:text-destructive">×</button>
              </Badge>
            )}
          </div>
        )}

        {/* Category Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold capitalize">
            {categories.find(c => c.id === selectedCategory)?.name} News
          </h2>
          <span className="text-muted-foreground">
            {articles.length} articles found
          </span>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;