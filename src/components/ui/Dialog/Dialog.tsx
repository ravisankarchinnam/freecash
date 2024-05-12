import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export type DialogProps = MuiDialogProps & {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

const Dialog = ({ open, onClose, children, ...rest }: DialogProps) => (
  <MuiDialog
    fullWidth
    open={open}
    onClose={onClose}
    scroll={"body"}
    maxWidth="md"
    PaperProps={{ sx: { maxWidth: "800px", borderRadius: 3 } }}
    {...rest}
  >
    <IconButton
      aria-label="close"
      onClick={onClose}
      sx={{
        position: "absolute",
        right: 8,
        top: 8,
        color: (theme) => theme.palette.grey[500],
      }}
    >
      <CloseIcon />
    </IconButton>
    {children}
  </MuiDialog>
);

export default Dialog;
