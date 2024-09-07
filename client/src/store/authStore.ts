import { User } from "../types/types";
import { create } from "zustand";

interface AuthStore {
  user: User | null;
  updateUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : null,
  updateUser: (user) => {
    set({ user });
    void (user
      ? localStorage.setItem("user", JSON.stringify(user))
      : localStorage.removeItem("user"));
  },
}));
