import { Box } from "@mui/material";
import Typography from "@/components/ui/Typography";
import CardList from "@/components/ui/CardList";

type CashoutOption = {
  title: string;
  logo?: string;
  options: {
    title: string;
    imageUrl: string;
    backgroundColor: string;
  }[];
};

type CashoutContentProps = {
  title: string;
  description: string;
  options: CashoutOption[];
};

const CashoutContent = ({
  title,
  description,
  options,
}: CashoutContentProps) => {
  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ py: 4 }}>
        <Typography isBold variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography color="textSecondary">{description}</Typography>
      </Box>
      <Box>
        {options?.map((option) => (
          <CardList key={option?.title} {...option} scale />
        ))}
      </Box>
    </Box>
  );
};

export default CashoutContent;
