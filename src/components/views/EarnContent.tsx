import { Box } from "@mui/material";
import CardList from "@/components/ui/CardList";
import { CardProps } from "@/components/ui/Card";

type EarnContentOption = {
  title: string;
  logo: string;
  options: CardProps[];
};

type EarnContentProps = {
  partners: EarnContentOption[];
};

const EarnContent = ({ partners }: EarnContentProps) => {
  return (
    <Box sx={{ px: 3 }}>
      {partners?.map((partner) => (
        <CardList
          key={partner.title}
          {...partner}
          isScrollable
          noBorder
          hoverBlur
        />
      ))}
    </Box>
  );
};

export default EarnContent;
