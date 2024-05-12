import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpInput } from "@/types";
import { useAuth } from "@/contexts/AuthContext";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const defaultValues = {
  email: "",
  password: "",
};

const useSignUp = () => {
  const { signUp } = useAuth();
  const {
    handleSubmit,
    control,
    formState: { isLoading, errors },
  } = useForm<SignUpInput>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  return {
    control,
    handleSubmit: handleSubmit(signUp),
    errors,
    isLoading,
  };
};

export default useSignUp;
