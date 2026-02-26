"use client";

import React from "react";
import { Card } from "@/app/components/ui/card";

export function DashboardManager() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard Gerente</h1>
        <p className="text-muted-foreground">Visão geral dos relatórios e métricas.</p>
      </div>

      <Card className="p-6">
        <p className="text-muted-foreground">Conteúdo será desenvolvido em breve</p>
      </Card>
    </div>
  );
}
