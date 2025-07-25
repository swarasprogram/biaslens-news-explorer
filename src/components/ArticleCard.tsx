import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Flag } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  id: string;
  title: string;
  summary: string;
  source: string;
  country: string;
  bias: "Left" | "Right" | "Centre";
  date?: string;
  showAnalysis?: boolean;
}

const ArticleCard = ({
  id,
  title,
  summary,
  source,
  country,
  bias,
  date,
  showAnalysis = true,
}: ArticleCardProps) => {
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

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-card hover:-translate-y-1 bg-gradient-card">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg font-semibold leading-tight line-clamp-2">
            {title}
          </CardTitle>
          <Badge className={`shrink-0 ${getBiasColor(bias)}`}>
            {bias}
          </Badge>
        </div>
        <CardDescription className="text-sm text-muted-foreground line-clamp-3">
          {summary}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-lg">{getCountryFlag(country)}</span>
            <span className="font-medium">{source}</span>
          </div>
          {date && (
            <span className="text-xs text-muted-foreground">{date}</span>
          )}
        </div>

        {showAnalysis && (
          <div className="flex gap-2">
            <Button asChild variant="default" size="sm" className="flex-1">
              <Link to={`/article/${id}`}>
                View Full Analysis
              </Link>
            </Button>
            <Button variant="outline" size="sm">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ArticleCard;