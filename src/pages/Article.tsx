import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, Calendar, Globe } from "lucide-react";
import BiasIndicator from "@/components/BiasIndicator";

const Article = () => {
  const { id } = useParams();

  // Mock article data - in real app this would be fetched based on ID
  const article = {
    id: "1",
    title: "Congressional Budget Office Projects Economic Growth Despite Political Uncertainty",
    summary: "New analysis suggests the economy will continue to expand through 2024, even as political tensions remain high heading into election season. The report outlines key factors driving growth and potential risks ahead.",
    source: "Washington Post",
    country: "United States",
    bias: "Left" as const,
    date: "January 15, 2024",
    author: "Sarah Martinez",
    readTime: "4 min read",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.

      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.

      Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
    `,
  };

  const biasAnalysis = {
    political: "Left" as const,
    sentiment: {
      positive: 35,
      neutral: 45,
      negative: 20,
    },
    explanation: "This article shows a left-leaning perspective through its framing of economic policy and emphasis on government intervention benefits. The language used suggests optimism about federal spending programs while downplaying market-based solutions."
  };

  const getCountryFlag = (country: string) => {
    const flags: { [key: string]: string } = {
      "United States": "🇺🇸",
      "United Kingdom": "🇬🇧",
      "Germany": "🇩🇪",
      "France": "🇫🇷",
      "Canada": "🇨🇦",
      "Australia": "🇦🇺",
      "Japan": "🇯🇵",
      "India": "🇮🇳",
    };
    return flags[country] || "🌍";
  };

  const getBiasColor = (bias: string) => {
    switch (bias) {
      case "Left":
        return "bg-bias-left text-white";
      case "Right":
        return "bg-bias-right text-white";
      case "Centre":
        return "bg-bias-center text-white";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button asChild variant="outline" className="mb-6">
          <Link to="/categories">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Categories
          </Link>
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Article Content */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h1 className="text-3xl font-bold leading-tight">
                    {article.title}
                  </h1>
                  <Badge className={`shrink-0 ${getBiasColor(article.bias)}`}>
                    {article.bias}
                  </Badge>
                </div>

                <CardDescription className="text-lg leading-relaxed">
                  {article.summary}
                </CardDescription>

                <Separator className="my-4" />

                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{getCountryFlag(article.country)}</span>
                    <span className="font-medium">{article.source}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <span>By {article.author}</span>
                  <span>{article.readTime}</span>
                  <Button variant="ghost" size="sm" className="p-0 h-auto">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Original Source
                  </Button>
                </div>
              </CardHeader>

              <CardContent>
                <div className="prose prose-lg max-w-none">
                  {article.content.split('\n\n').map((paragraph, index) => (
                    paragraph.trim() && (
                      <p key={index} className="mb-4 leading-relaxed text-foreground">
                        {paragraph.trim()}
                      </p>
                    )
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Bias Analysis */}
            <BiasIndicator analysis={biasAnalysis} />

            {/* Article Summary */}
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Quick Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></span>
                    <span>Economic growth projected to continue through 2024</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></span>
                    <span>Political uncertainty remains a key factor to monitor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></span>
                    <span>Congressional Budget Office provides latest analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Related Articles */}
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Related Articles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Federal Reserve Policy Impact on Economic Forecasts",
                  "Political Tensions Rise Ahead of Election Season",
                  "Market Response to Congressional Budget Analysis"
                ].map((title, index) => (
                  <div key={index} className="p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors cursor-pointer">
                    <h4 className="font-medium text-sm leading-tight">{title}</h4>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;