import { SignInInput, SignUpInput } from "@/types";
import apiClient from "./apiClient";

const authService = {
  async signIn({ email, password }: SignInInput) {
    const response = await apiClient.post("/api/signIn", {
      identifier: email,
      password,
    });

    const data = response.data;

    if (data.user) {
      return data;
    } else {
      throw new Error("Sign In failed");
    }
  },

  async logout() {
    await apiClient.post("/api/logout");
  },

  async checkAuthStatus() {
    try {
      const response = await apiClient.get("/api/currentUser");
      if (response.status === 200) {
        return response.data;
      }
      throw new Error("Not authenticated");
    } catch (error) {
      console.error("Error checking auth status:", error);
      throw error;
    }
  },

  async signUp({ email, password }: SignUpInput) {
    const response = await apiClient.post("/api/signUp", {
      email,
      password,
    });
    return response.data;
  },
};

export default authService;
