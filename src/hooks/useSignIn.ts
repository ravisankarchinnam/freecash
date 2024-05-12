import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInInput } from "@/types";
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

const useSignIn = () => {
  const { signIn } = useAuth();
  const {
    handleSubmit,
    control,
    formState: { isLoading, errors },
  } = useForm<SignInInput>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  return {
    control,
    handleSubmit: handleSubmit(signIn),
    errors,
    isLoading,
  };
};

export default useSignIn;
