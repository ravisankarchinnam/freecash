import { Container } from "@mui/material";
import Typography from "@/components/ui/Typography";

const EarnDetailContent = ({ title }: { title: string }) => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1">{title}</Typography>
    </Container>
  );
};

export default EarnDetailContent;
