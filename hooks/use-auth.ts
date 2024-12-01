import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  role: string | "admin" | "teacher" | "student";
  login: (role: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  role: "",
  login: (role: string) => set({ isLoggedIn: true, role: role }),
  logout: () => set({ isLoggedIn: false, role: "" }),
}));

export default useAuthStore;
