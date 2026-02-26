"use client";

import React from "react";
import { useAuth } from "@/app/context/auth-context";
import { DashboardLayout } from "@/app/components/layout/dashboard-layout";
import { Home } from "@/app/components/screens/home";
import { Login } from "@/app/components/screens/login";
import { ProfileSelect } from "@/app/components/screens/profile-select";
import { DashboardPharma } from "@/app/components/screens/dashboard-pharma";
import { ManageMedicines } from "@/app/components/screens/manage-medicines";
import { DashboardEmployee } from "@/app/components/screens/dashboard-employee";
import { DashboardManager } from "@/app/components/screens/dashboard-manager";
import {
  POS,
  POSSuccess,
  ManageStock,
  Prescriptions,
  ViewPrescription,
  RegisterDoctor,
  RegisterUBS,
  MedicineForm,
  Reports,
} from "@/app/components/screens/index";

export function AppShell() {
  const { currentScreen } = useAuth();

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return <Home />;
      case "login":
        return <Login />;
      case "profile-select":
        return <ProfileSelect />;
      case "dashboard-pharma":
        return <DashboardPharma />;
      case "manage-medicines":
        return <ManageMedicines />;
      case "new-medicine":
        return <MedicineForm mode="create" />;
      case "edit-medicine":
        return <MedicineForm mode="edit" />;
      case "manage-stock":
        return <ManageStock />;
      case "register-doctor":
        return <RegisterDoctor />;
      case "register-ubs":
        return <RegisterUBS />;
      case "prescriptions":
        return <Prescriptions />;
      case "view-prescription":
        return <ViewPrescription />;
      case "pos":
        return <POS />;
      case "pos-success":
        return <POSSuccess />;
      case "dashboard-employee":
        return <DashboardEmployee />;
      case "dashboard-manager":
        return <DashboardManager />;
      case "reports":
        return <Reports />;
      default:
        return <Home />;
    }
  };

  const isPublic = ["home", "login", "profile-select"].includes(currentScreen);

  if (isPublic) {
    return renderScreen();
  }

  return <DashboardLayout>{renderScreen()}</DashboardLayout>;
}
