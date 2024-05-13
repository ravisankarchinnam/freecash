import { Container } from "@mui/material";
import Typography from "@/components/ui/Typography";

const EarnDetailContent = ({ title }: { title: string }) => {
  return (
    <Container maxWidth="lg" sx={{ p: 4 }}>
      <Typography component="h1" variant="h3">
        {title}
      </Typography>
    </Container>
  );
};

export default EarnDetailContent;
