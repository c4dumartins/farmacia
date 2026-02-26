"use client";

import React from "react";
import { useAuth } from "@/app/context/auth-context";
import { Bell, Search, User } from "lucide-react";
import { Input } from "@/app/components/ui/input";

export function Header() {
  const { userRole } = useAuth();

  const userName =
    userRole === "pharmacist"
      ? "Dr. Ricardo"
      : userRole === "admin"
        ? "Gerente Silva"
        : "João Atendente";

  const userTitle =
    userRole === "admin"
      ? "Gerência"
      : userRole === "pharmacist"
        ? "Farmacêutico"
        : "Funcionário";

  return (
    <header className="h-20 bg-card border-b border-border fixed top-0 left-60 right-0 px-8 flex items-center justify-between z-10">
      <div className="w-96">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Buscar..." className="pl-10" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-muted-foreground hover:bg-secondary rounded-full transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <div className="text-right hidden md:block">
            <div className="text-sm font-semibold text-foreground">{userName}</div>
            <div className="text-xs text-muted-foreground capitalize">{userTitle}</div>
          </div>
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
