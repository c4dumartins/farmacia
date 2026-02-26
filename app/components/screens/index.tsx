"use client";

import React from "react";
import { Card } from "@/app/components/ui/card";

export function POS() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Frente de Caixa</h1>
        <p className="text-muted-foreground">Sistema de ponto de venda</p>
      </div>
      <Card className="p-6">
        <p className="text-muted-foreground">Conteúdo será desenvolvido em breve</p>
      </Card>
    </div>
  );
}

export function POSSuccess() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Venda Realizada</h1>
        <p className="text-muted-foreground">Confirmação de venda</p>
      </div>
      <Card className="p-6">
        <p className="text-muted-foreground">Conteúdo será desenvolvido em breve</p>
      </Card>
    </div>
  );
}

export function ManageStock() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Gerenciar Estoque</h1>
        <p className="text-muted-foreground">Controle de inventário</p>
      </div>
      <Card className="p-6">
        <p className="text-muted-foreground">Conteúdo será desenvolvido em breve</p>
      </Card>
    </div>
  );
}

export function Prescriptions() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Receitas</h1>
        <p className="text-muted-foreground">Gestão de prescrições médicas</p>
      </div>
      <Card className="p-6">
        <p className="text-muted-foreground">Conteúdo será desenvolvido em breve</p>
      </Card>
    </div>
  );
}

export function ViewPrescription() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Visualizar Receita</h1>
        <p className="text-muted-foreground">Detalhes da prescrição</p>
      </div>
      <Card className="p-6">
        <p className="text-muted-foreground">Conteúdo será desenvolvido em breve</p>
      </Card>
    </div>
  );
}

export function RegisterDoctor() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Cadastrar Médico</h1>
        <p className="text-muted-foreground">Cadastro de profissionais</p>
      </div>
      <Card className="p-6">
        <p className="text-muted-foreground">Conteúdo será desenvolvido em breve</p>
      </Card>
    </div>
  );
}

export function RegisterUBS() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Cadastrar UBS</h1>
        <p className="text-muted-foreground">Cadastro de unidades de saúde</p>
      </div>
      <Card className="p-6">
        <p className="text-muted-foreground">Conteúdo será desenvolvido em breve</p>
      </Card>
    </div>
  );
}

export function MedicineForm({ mode }: { mode: "create" | "edit" }) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          {mode === "create" ? "Novo" : "Editar"} Medicamento
        </h1>
        <p className="text-muted-foreground">Preencha os dados do medicamento</p>
      </div>
      <Card className="p-6">
        <p className="text-muted-foreground">Conteúdo será desenvolvido em breve</p>
      </Card>
    </div>
  );
}

export function Reports() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Relatórios</h1>
        <p className="text-muted-foreground">Análise e relatórios do sistema</p>
      </div>
      <Card className="p-6">
        <p className="text-muted-foreground">Conteúdo será desenvolvido em breve</p>
      </Card>
    </div>
  );
}
