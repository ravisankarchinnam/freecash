import Image from "next/image";
import { Container, Box, CircularProgress } from "@mui/material";

const Spinner = () => {
  return (
    <Container maxWidth="lg" sx={{ height: "100vh", display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          gap: 3,
          p: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxHeight: 65,
            maxWidth: 500,
            width: "100%",
            height: "100%",
          }}
        >
          <Image src="/images/freecashLogo.svg" alt="spinner-logo" fill />
        </Box>
        <CircularProgress color="secondary" />
      </Box>
    </Container>
  );
};

export default Spinner;
