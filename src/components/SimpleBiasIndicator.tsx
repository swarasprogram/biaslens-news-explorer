import { Badge } from "@/components/ui/badge";

interface SimpleBiasIndicatorProps {
  bias: "Left" | "Right" | "Centre";
  size?: "sm" | "md";
}

const SimpleBiasIndicator = ({ bias, size = "sm" }: SimpleBiasIndicatorProps) => {
  const getBiasColor = (bias: string) => {
    switch (bias) {
      case "Left":
        return "bg-bias-left text-white hover:bg-bias-left/80";
      case "Right":
        return "bg-bias-right text-white hover:bg-bias-right/80";
      case "Centre":
        return "bg-bias-center text-white hover:bg-bias-center/80";
      default:
        return "bg-muted hover:bg-muted/80";
    }
  };

  const sizeClass = size === "sm" ? "text-xs px-2 py-1" : "text-sm px-3 py-2";

  return (
    <Badge className={`${getBiasColor(bias)} ${sizeClass} font-medium`}>
      {bias}
    </Badge>
  );
};

export default SimpleBiasIndicator;