import { ReactNode } from "react";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  InputAdornment,
} from "@mui/material";

export type TextFieldProps = MuiTextFieldProps & {
  Icon?: ReactNode;
};

const TextField = ({ Icon, ...props }: TextFieldProps) => {
  return (
    <MuiTextField
      {...props}
      autoComplete="off"
      fullWidth
      variant="outlined"
      sx={{
        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        "& label.Mui-focused": {
          color: "inherit",
        },
      }}
      margin="normal"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{Icon}</InputAdornment>
        ),
      }}
    />
  );
};

export default TextField;
