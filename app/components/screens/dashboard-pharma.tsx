"use client";

import React from "react";
import { useAuth } from "@/app/context/auth-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { mockData } from "@/app/lib/mock-data";
import {
  Pill,
  AlertTriangle,
  XCircle,
  Activity,
  MoreVertical,
} from "lucide-react";

export function DashboardPharma() {
  const StatCard = ({
    title,
    value,
    icon: Icon,
    colorClass,
    bgClass,
  }: any) => (
    <Card className="p-6 flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-foreground">{value}</h3>
      </div>
      <div className={`p-3 rounded-lg ${bgClass}`}>
        <Icon className={`w-6 h-6 ${colorClass}`} />
      </div>
    </Card>
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Visão geral da farmácia hoje.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Medicamentos"
          value={mockData.stats.totalMedicines}
          icon={Pill}
          colorClass="text-blue-600"
          bgClass="bg-blue-50"
        />
        <StatCard
          title="Baixo Estoque"
          value={mockData.stats.lowStock}
          icon={AlertTriangle}
          colorClass="text-yellow-600"
          bgClass="bg-yellow-50"
        />
        <StatCard
          title="Indisponíveis"
          value={mockData.stats.unavailable}
          icon={XCircle}
          colorClass="text-red-600"
          bgClass="bg-red-50"
        />
        <StatCard
          title="Atendimentos Hoje"
          value={mockData.stats.todayAttendances}
          icon={Activity}
          colorClass="text-green-600"
          bgClass="bg-green-50"
        />
      </div>

      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Últimos Atendimentos</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-secondary text-foreground font-medium">
                <tr>
                  <th className="px-6 py-4">Nome Paciente</th>
                  <th className="px-6 py-4">Data</th>
                  <th className="px-6 py-4">Valor</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {mockData.sales.map((sale) => (
                  <tr key={sale.id} className="hover:bg-secondary/50">
                    <td className="px-6 py-4 font-medium text-foreground">
                      {sale.patient}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {sale.date.toLocaleDateString("pt-BR")}
                    </td>
                    <td className="px-6 py-4 text-foreground">
                      R$ {sale.value.toFixed(2)}
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="success">Concluído</Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-muted-foreground hover:text-foreground">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
