import { Button } from "@mui/material";
import useSignUp from "@/hooks/useSignUp";
import Typography from "@/components/ui/Typography";
import { FormTextField } from "@/components/ui/Form";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const SignUpForm = () => {
  const { control, isLoading, handleSubmit } = useSignUp();

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
        Konto erstellen
      </Button>
      <Typography
        sx={{ mt: 4 }}
        component="p"
        variant="caption"
        color="textSecondary"
      >
        Benutzern ist es untersagt, mehrere Konten zu verwenden, Aufträge über
        das Konto eines anderen Benutzers zu vervollständigen oder irgendeine
        Art von VPN-, VPS- oder Emulator-Software zu verwenden.
      </Typography>
    </form>
  );
};

export default SignUpForm;
