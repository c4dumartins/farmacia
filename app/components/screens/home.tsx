"use client";

import React from "react";
import { useAuth } from "@/app/context/auth-context";
import { Button } from "@/app/components/ui/button";
import { Pill } from "lucide-react";

export function Home() {
  const { navigate } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
            <Pill className="w-10 h-10 text-white" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900">
            Sistema de Gestão Farmacêutica
          </h1>
          <p className="text-slate-600">
            Controle completo de medicamentos, estoque e atendimentos.
          </p>
        </div>

        <div className="pt-4">
          <Button
            size="lg"
            className="w-full text-lg h-14"
            onClick={() => navigate("login")}
          >
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
}
