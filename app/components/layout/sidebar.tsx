"use client";

import React from "react";
import { useAuth } from "@/app/context/auth-context";
import { cn } from "@/app/lib/cn";
import {
  LayoutDashboard,
  Pill,
  ShoppingCart,
  FileText,
  Building2,
  LogOut,
  BarChart3,
  Stethoscope,
  ClipboardList,
} from "lucide-react";

export function Sidebar() {
  const { currentScreen, navigate, userRole, setUserRole } = useAuth();

  const handleLogout = () => {
    setUserRole(null);
    navigate("home");
  };

  const NavItem = ({
    screen,
    icon: Icon,
    label,
  }: {
    screen: any;
    icon: any;
    label: string;
  }) => (
    <button
      onClick={() => navigate(screen)}
      className={cn(
        "flex items-center w-full px-4 py-3 text-sm font-medium transition-colors rounded-lg mb-1",
        currentScreen === screen
          ? "bg-blue-50 text-blue-700"
          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
      )}
    >
      <Icon className="w-5 h-5 mr-3" />
      {label}
    </button>
  );

  return (
    <aside className="w-60 h-screen bg-card border-r border-border fixed left-0 top-0 flex flex-col z-20">
      <div className="h-20 flex items-center px-6 border-b border-border">
        <div className="font-bold text-xl text-blue-600">Farmácia</div>
      </div>

      <nav className="flex-1 p-4 overflow-y-auto">
        {userRole === "pharmacist" && (
          <>
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-4 mt-2">
              Principal
            </div>
            <NavItem screen="dashboard-pharma" icon={LayoutDashboard} label="Dashboard" />
            <NavItem screen="pos" icon={ShoppingCart} label="Frente de Caixa" />

            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-4 mt-6">
              Gestão
            </div>
            <NavItem screen="manage-medicines" icon={Pill} label="Medicamentos" />
            <NavItem screen="manage-stock" icon={ClipboardList} label="Estoque" />
            <NavItem screen="prescriptions" icon={FileText} label="Receitas" />

            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-4 mt-6">
              Cadastros
            </div>
            <NavItem screen="register-doctor" icon={Stethoscope} label="Médicos" />
            <NavItem screen="register-ubs" icon={Building2} label="UBS" />
          </>
        )}

        {userRole === "employee" && (
          <>
            <NavItem screen="dashboard-employee" icon={LayoutDashboard} label="Dashboard" />
            <NavItem screen="pos" icon={ShoppingCart} label="Frente de Caixa" />
          </>
        )}

        {userRole === "admin" && (
          <>
            <NavItem screen="dashboard-manager" icon={BarChart3} label="Visão Geral" />
            <NavItem screen="reports" icon={FileText} label="Relatórios" />
          </>
        )}
      </nav>

      <div className="p-4 border-t border-border">
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Sair
        </button>
      </div>
    </aside>
  );
}