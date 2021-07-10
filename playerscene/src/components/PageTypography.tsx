import { TypographyVariant } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { textContent } from "./../pageData.json";

interface PageTypographyProps {
  variant: TypographyVariant;
  dataPath: "title" | "info";
}

export default function PageTitle({ variant, dataPath }: PageTypographyProps) {
  return (
    <Typography variant={variant} align="center">
      {textContent[dataPath]}
    </Typography>
  );
}
