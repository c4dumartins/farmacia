"use client";

import React, { useState } from "react";
import { useAuth } from "@/app/context/auth-context";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import { mockData } from "@/app/lib/mock-data";
import { Plus, Search, MoreVertical, Edit, Trash } from "lucide-react";

export function ManageMedicines() {
  const { navigate } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMedicines = mockData.medicines.filter(
    (med) =>
      med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.code.includes(searchTerm)
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return <Badge variant="success">Disponível</Badge>;
      case "low":
        return <Badge variant="warning">Baixo Estoque</Badge>;
      case "unavailable":
        return <Badge variant="error">Indisponível</Badge>;
      default:
        return <Badge>Desconhecido</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Gerenciar Medicamentos</h1>
          <p className="text-muted-foreground">Cadastre e atualize o inventário da farmácia.</p>
        </div>
        <Button onClick={() => navigate("new-medicine")}>
          <Plus className="w-4 h-4 mr-2" />
          Novo Medicamento
        </Button>
      </div>

      <Card className="overflow-hidden">
        <div className="p-4 border-b border-border bg-secondary/50 flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome, código ou lote..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-secondary text-foreground font-medium">
              <tr>
                <th className="px-6 py-4">Nome</th>
                <th className="px-6 py-4">Código</th>
                <th className="px-6 py-4">Lote</th>
                <th className="px-6 py-4">Validade</th>
                <th className="px-6 py-4">Qtd</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredMedicines.map((med) => (
                <tr key={med.id} className="hover:bg-secondary/50 group">
                  <td className="px-6 py-4 font-medium text-foreground">{med.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{med.code}</td>
                  <td className="px-6 py-4 text-muted-foreground">{med.batch}</td>
                  <td className="px-6 py-4 text-muted-foreground">{med.expiry}</td>
                  <td className="px-6 py-4 font-medium">{med.qty}</td>
                  <td className="px-6 py-4">{getStatusBadge(med.status)}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                        onClick={() => navigate("edit-medicine")}
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                        <Trash className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
