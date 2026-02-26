"use client";

import React, { createContext, useContext, useState } from "react";

export type UserRole = "pharmacist" | "employee" | "admin" | null;

export type Screen =
  | "home"
  | "login"
  | "profile-select"
  | "dashboard-pharma"
  | "manage-medicines"
  | "new-medicine"
  | "edit-medicine"
  | "manage-stock"
  | "register-doctor"
  | "register-ubs"
  | "prescriptions"
  | "view-prescription"
  | "pos"
  | "pos-success"
  | "dashboard-employee"
  | "dashboard-manager"
  | "reports";

interface AuthContextType {
  currentScreen: Screen;
  navigate: (screen: Screen) => void;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const [userRole, setUserRole] = useState<UserRole>(null);

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  return (
    <AuthContext.Provider
      value={{
        currentScreen,
        navigate,
        userRole,
        setUserRole,
        isAuthenticated: userRole !== null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
