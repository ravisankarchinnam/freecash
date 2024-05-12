import Image from "next/image";
import { CircularProgress, Container, Grid } from "@mui/material";

const Spinner = () => {
  return (
    <Container maxWidth="lg" sx={{ height: "100vh", display: "flex" }}>
      <Grid
        container
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Grid>
            <Image src="/freecashLogo.svg" alt="spinner-logo" height={65} />
          </Grid>
        </Grid>
        <Grid item>
          <Grid>
            <CircularProgress color="secondary" />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Spinner;
