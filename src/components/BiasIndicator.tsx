import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BiasAnalysis {
  political: "Left" | "Right" | "Centre";
  sentiment: {
    positive: number;
    neutral: number;
    negative: number;
  };
  explanation: string;
}

interface BiasIndicatorProps {
  analysis: BiasAnalysis;
}

const BiasIndicator = ({ analysis }: BiasIndicatorProps) => {
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
    <Card className="bg-gradient-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-lg">AI Bias Analysis</span>
          <Badge className={`${getBiasColor(analysis.political)}`}>
            {analysis.political}
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Sentiment Breakdown */}
        <div>
          <h4 className="font-semibold mb-3 text-sm">Emotional Sentiment</h4>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-green-600">Positive</span>
                <span>{analysis.sentiment.positive}%</span>
              </div>
              <Progress value={analysis.sentiment.positive} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-blue-600">Neutral</span>
                <span>{analysis.sentiment.neutral}%</span>
              </div>
              <Progress value={analysis.sentiment.neutral} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-red-600">Negative</span>
                <span>{analysis.sentiment.negative}%</span>
              </div>
              <Progress value={analysis.sentiment.negative} className="h-2" />
            </div>
          </div>
        </div>

        {/* Bias Explanation */}
        <div>
          <h4 className="font-semibold mb-2 text-sm">Bias Explanation</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {analysis.explanation}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BiasIndicator;