import { Box, Grid } from "@mui/material";
import { useAuth } from "@/contexts/AuthContext";
import Dialog from "@/components/ui/Dialog";
import Tabs from "@/components/ui/Tabs";
import SignInForm from "@/components/global/form/SignInForm";
import SignUpForm from "@/components/global/form/SignUpForm";

const AuthDialog = () => {
  const { open, toggleAuthDialog, activeTab } = useAuth();

  return (
    <Dialog open={open} onClose={toggleAuthDialog()}>
      <Grid container justifyContent="center">
        <Grid
          item
          sx={{ display: { xs: "none", md: "inline-flex", height: "100%" } }}
          md={5}
        >
          <Box>
            <img src="/images/side_image.svg" alt="auth-info" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={10} md={7} sx={{ height: "100%" }}>
          <Grid sx={{ px: 3, py: 5, mt: 5 }}>
            <Tabs
              variant="fullWidth"
              centered
              activeTab={activeTab}
              tabs={[
                { label: "Anmelden", content: <SignInForm /> },
                { label: "Konto erstellen", content: <SignUpForm /> },
              ]}
            />
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default AuthDialog;
