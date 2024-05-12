import { Button } from "@mui/material";
import useSignIn from "@/hooks/useSignIn";
import Typography from "@/components/ui/Typography";
import { FormTextField } from "@/components/ui/Form";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const SignInForm = () => {
  const { control, handleSubmit, isLoading } = useSignIn();

  return (
    <form onSubmit={handleSubmit}>
      <FormTextField
        disabled={isLoading}
        control={control}
        name="email"
        label="Email"
        placeholder="Eingeben..."
        Icon={<EmailIcon />}
      />
      <FormTextField
        disabled={isLoading}
        control={control}
        name="password"
        label="Passwort"
        placeholder="Eingeben..."
        Icon={<LockIcon />}
        type="password"
      />
      <Button
        disabled={!!isLoading}
        sx={{ mt: 4 }}
        fullWidth
        color="secondary"
        variant="contained"
        type="submit"
      >
        Anmelden
      </Button>
      <Typography
        sx={{ mt: 4 }}
        component="p"
        variant="caption"
        color="textSecondary"
      >
        Mit dem anmelden stimmen Sie unseren Terms of Service und Privacy Policy
        zu. Allgemein ist es verboten mehrere Accounts zu benutzen, Aufträge auf
        anderen Accounts zu machen oder jegliche Benutzung von VPN, VPS oder
        Emulatoren.
      </Typography>
    </form>
  );
};

export default SignInForm;
