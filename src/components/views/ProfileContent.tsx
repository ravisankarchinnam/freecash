import { Avatar, Container, Grid, Paper } from "@mui/material";
import Typography from "@/components/ui/Typography";
import colors from "@/theme/colors";
import { stringAvatar } from "@/utils";

const username = "Username";

const ProfileContent = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 3 }}>
      <Typography variant="h5" isBold>
        Mein Profil
      </Typography>
      <Paper sx={{ my: 2, p: 8, backgroundColor: colors.scrollBar.track }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item>
            <Avatar {...stringAvatar(username, 100)} />
          </Grid>
          <Grid item>{username}</Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProfileContent;
