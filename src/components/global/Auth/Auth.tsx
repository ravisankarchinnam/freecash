import { Fragment } from "react";
import { Button } from "@mui/material";
import { useAuth } from "@/contexts/AuthContext";
import { ProfileMenu } from "./ProfileMenu";

export default function Auth() {
  const { isAuthenticated, toggleAuthDialog } = useAuth();

  return isAuthenticated ? (
    <ProfileMenu />
  ) : (
    <Fragment>
      <Button
        color="primary"
        variant="contained"
        sx={{ mr: 2 }}
        onClick={toggleAuthDialog(0)}
      >
        Sign In
      </Button>
      <Button
        color="secondary"
        variant="contained"
        onClick={toggleAuthDialog(1)}
      >
        Sign Up
      </Button>
    </Fragment>
  );
}
