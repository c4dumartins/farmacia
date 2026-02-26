"use client";

import React, { useState } from "react";
import { useAuth, UserRole } from "@/app/context/auth-context";

const USERS: Record<string, { role: UserRole; dashboard: string }> = {
  "farmaceutico@farmacia.com": { role: "pharmacist", dashboard: "dashboard-pharma" },
  "funcionario@farmacia.com": { role: "employee", dashboard: "dashboard-employee" },
  "gerente@farmacia.com": { role: "admin", dashboard: "dashboard-manager" },
};

const PASSWORD = "123456";

export function Login() {
  const { navigate, setUserRole } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      const user = USERS[email.toLowerCase()];
      if (!user || password !== PASSWORD) {
        setError("E-mail ou senha inválidos.");
        setLoading(false);
        return;
      }
      setUserRole(user.role);
      navigate(user.dashboard as any);
    }, 600);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Left panel */}
      <div
        style={{
          width: "40%",
          background: "linear-gradient(160deg, #1a56db 0%, #2563eb 60%, #1e40af 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div style={{
          position: "absolute", width: 300, height: 300, borderRadius: "50%",
          background: "rgba(255,255,255,0.05)", top: -80, left: -80,
        }} />
        <div style={{
          position: "absolute", width: 200, height: 200, borderRadius: "50%",
          background: "rgba(255,255,255,0.05)", bottom: 40, right: -60,
        }} />

        {/* Icon */}
        <div style={{
          width: 80, height: 80, borderRadius: 20,
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 28,
          border: "1px solid rgba(255,255,255,0.25)",
        }}>
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
            {/* Cápsula rotacionada 45°, centrada no canvas */}
            <g transform="rotate(-45 21 21)">
              {/* Corpo completo da cápsula */}
              <rect x="7" y="14" width="28" height="14" rx="7" fill="white" opacity="0.15"/>
              {/* Metade esquerda (branca) */}
              <path d="M14 14h7v14h-7a7 7 0 0 1 0-14z" fill="white" opacity="0.95"/>
              {/* Metade direita (semi-transparente) */}
              <path d="M21 14h7a7 7 0 0 1 0 14h-7V14z" fill="white" opacity="0.45"/>
              {/* Linha divisória */}
              <line x1="21" y1="14" x2="21" y2="28" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"/>
            </g>
          </svg>
        </div>

        <h2 style={{ color: "white", fontSize: 26, fontWeight: 700, marginBottom: 14, textAlign: "center", position: "relative" }}>
          Bem-vindo ao sistema da farmácia!
        </h2>
        
      </div>

      {/* Right panel */}
      <div style={{
        flex: 1,
        background: "#f5f7fb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px",
      }}>
        <div style={{
          background: "white",
          borderRadius: 16,
          padding: "48px 44px",
          width: "100%",
          maxWidth: 420,
          boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
        }}>
          <h1 style={{ fontSize: 26, fontWeight: 700, color: "#111827", textAlign: "center", marginBottom: 6 }}>
            Login
          </h1>
          <p style={{ color: "#6b7280", fontSize: 14, textAlign: "center", marginBottom: 32 }}>
            Entre com suas credenciais para continuar
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#374151", marginBottom: 6 }}>
                Email ou CPF
              </label>
              <input
                type="text"
                placeholder="exemplo@farmacia.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%", padding: "11px 14px", fontSize: 14,
                  border: "1.5px solid #e5e7eb", borderRadius: 8, outline: "none",
                  background: "white", color: "#111827", boxSizing: "border-box",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#2563eb")}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
            </div>

            <div style={{ marginBottom: 8 }}>
              <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#374151", marginBottom: 6 }}>
                Senha
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: "100%", padding: "11px 14px", fontSize: 14,
                  border: "1.5px solid #e5e7eb", borderRadius: 8, outline: "none",
                  background: "white", color: "#111827", boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#2563eb")}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
            </div>

            <div style={{ textAlign: "right", marginBottom: 20 }}>
              <span style={{ fontSize: 13, color: "#2563eb", cursor: "pointer", fontWeight: 500 }}>
                Esqueci minha senha
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
              <input
                type="checkbox"
                id="remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                style={{ width: 16, height: 16, accentColor: "#2563eb", cursor: "pointer" }}
              />
              <label htmlFor="remember" style={{ fontSize: 14, color: "#374151", cursor: "pointer" }}>
                Lembrar-me
              </label>
            </div>

            {error && (
              <p style={{ fontSize: 13, color: "#ef4444", textAlign: "center", marginBottom: 16 }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%", padding: "13px", fontSize: 15, fontWeight: 600,
                background: loading ? "#93c5fd" : "#2563eb",
                color: "white", border: "none", borderRadius: 8,
                cursor: loading ? "not-allowed" : "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { if (!loading) (e.target as HTMLButtonElement).style.background = "#1d4ed8"; }}
              onMouseLeave={(e) => { if (!loading) (e.target as HTMLButtonElement).style.background = "#2563eb"; }}
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>

          <div style={{ borderTop: "1px solid #f3f4f6", marginTop: 28, paddingTop: 20 }}>
            <p style={{ fontSize: 12, color: "#9ca3af", textAlign: "center", fontWeight: 500, marginBottom: 6 }}>
              Usuários de teste
            </p>
            <p style={{ fontSize: 12, color: "#9ca3af", textAlign: "center", lineHeight: 1.8 }}>
              farmaceutico@farmacia.com<br />
              funcionario@farmacia.com<br />
              gerente@farmacia.com<br />
              Senha: <span style={{ fontWeight: 600 }}>123456</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}