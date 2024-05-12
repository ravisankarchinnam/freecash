import { toast } from "react-toastify";

export const showInfoToast = (message: string) =>
  toast.info(message, { toastId: message });

export const showWarnToast = (message: string) =>
  toast.warning(message, { toastId: message });

export const showErrorToast = (message: string) =>
  toast.error(message, { toastId: message });
