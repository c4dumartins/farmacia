"use client";

import React from "react";
import { useAuth, UserRole } from "@/app/context/auth-context";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Stethoscope, Users, BarChart3 } from "lucide-react";

export function ProfileSelect() {
  const { navigate, setUserRole } = useAuth();

  const roles = [
    {
      id: "pharmacist",
      title: "Farmacêutico",
      description: "Acesso completo à gestão de medicamentos e estoque",
      icon: Stethoscope,
      nextScreen: "dashboard-pharma",
    },
    {
      id: "employee",
      title: "Funcionário",
      description: "Acesso à frente de caixa e atendimento",
      icon: Users,
      nextScreen: "dashboard-employee",
    },
    {
      id: "admin",
      title: "Gerente",
      description: "Acesso à visão geral e relatórios",
      icon: BarChart3,
      nextScreen: "dashboard-manager",
    },
  ];

  const handleSelectRole = (role: UserRole, nextScreen: any) => {
    setUserRole(role);
    navigate(nextScreen);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-2">Selecione seu Perfil</h1>
          <p className="text-muted-foreground">Escolha qual tipo de acesso você deseja</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Card
                key={role.id}
                className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() =>
                  handleSelectRole(role.id as UserRole, role.nextScreen)
                }
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {role.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {role.description}
                </p>
                <Button className="w-full">Selecionar</Button>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
