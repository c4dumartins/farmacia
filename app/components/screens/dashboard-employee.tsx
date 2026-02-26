"use client";

import React from "react";
import { Card } from "@/app/components/ui/card";

export function DashboardEmployee() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard Funcionário</h1>
        <p className="text-muted-foreground">Bem-vindo ao seu painel de controle.</p>
      </div>

      <Card className="p-6">
        <p className="text-muted-foreground">Conteúdo será desenvolvido em breve</p>
      </Card>
    </div>
  );
}
