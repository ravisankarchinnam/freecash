import { Control, Controller } from "react-hook-form";
import TextField, { TextFieldProps } from "@/components/ui/TextField";

export type FormTextFieldProps = TextFieldProps & {
  name: string;
  control: Control<any>;
  label: string;
};

export const FormTextField = ({
  name,
  control,
  label,
  ...rest
}: FormTextFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          {...rest}
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
        />
      )}
    />
  );
};

export default FormTextField;
