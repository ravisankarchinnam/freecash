"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/components/ui/Spinner";
import AuthDialog from "@/components/global/Auth/AuthDialog";
import authService from "@/services/authService";
import { AxiosError, SignInInput, SignUpInput, User } from "@/types";
import { showErrorToast } from "@/utils";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: ({ email, password }: SignInInput) => Promise<void>;
  signUp: ({ email, password }: SignUpInput) => Promise<void>;
  logout: () => void;
  open: boolean;
  activeTab: number;
  toggleAuthDialog: (activeTab?: number) => () => void;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const toggleAuthDialog =
    (active: number = 0) =>
    () => {
      setOpen(!open);
      setActiveTab(active);
    };

  useEffect(() => {
    const initializeAuth = async () => {
      const hasAuth = localStorage.getItem("hasAuth");

      if (!hasAuth) {
        setIsAuthenticated(false);
        setUser(null);
        setIsLoading(false);
        return;
      }

      try {
        const data = await authService.checkAuthStatus();
        setIsAuthenticated(true);
        setUser(data);
      } catch (err) {
        const error = err as AxiosError;
        console.log("Axios Error:", error.response?.status);

        if (error.response?.status === 401) {
          setIsAuthenticated(false);
          setUser(null);
        } else {
          showErrorToast("Error during auth initialization:");
        }
      }
      setIsLoading(false);
    };

    initializeAuth();
  }, []);

  const signIn = async ({ email, password }: SignInInput) => {
    try {
      const data = await authService.signIn({ email, password });
      setOpen(false);
      if (data.user) {
        setIsAuthenticated(true);
        setUser(data.user);

        localStorage.setItem("hasAuth", "true");

        router.push("/profile");
      } else {
        showErrorToast("Sign In failed");
      }
    } catch (error: any) {
      showErrorToast("Error during Sign In:");
      const serverErrorMessage = error.response?.data?.error;
      return serverErrorMessage || "An unexpected error occurred.";
    }
  };

  const signUp = async ({ email, password }: SignUpInput) => {
    try {
      const data = await authService.signUp({ email, password });
      setOpen(false);
      if (data.user) {
        setIsAuthenticated(true);
        setUser(data.user);

        localStorage.setItem("hasAuth", "true");

        router.push("/");
      } else {
        showErrorToast("Sign out Failed");
      }
    } catch (error: any) {
      showErrorToast("Error during Sign Up. Please try again.");
      const serverErrorMessage = error.response?.data?.error;
      return serverErrorMessage || "An unexpected error occurred.";
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      setIsAuthenticated(false);
      setUser(null);

      localStorage.removeItem("hasAuth");
    } catch (error: any) {
      showErrorToast("Error during logout. Please try again.");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        setUser,
        isLoading,
        signIn,
        signUp,
        logout,
        open,
        toggleAuthDialog,
        activeTab,
      }}
    >
      {children}
      <AuthDialog />
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
