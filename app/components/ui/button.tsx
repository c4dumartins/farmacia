import React from "react";
import { cn } from "@/app/lib/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary",
        variant === "outline" && "border border-input bg-background hover:bg-secondary text-foreground focus:ring-primary",
        variant === "ghost" && "hover:bg-secondary text-foreground focus:ring-primary",
        variant === "destructive" && "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:ring-destructive",
        size === "sm" && "px-3 py-1.5 text-sm",
        size === "md" && "px-4 py-2 text-sm",
        size === "lg" && "px-6 py-3 text-base",
        className
      )}
      {...props}
    />
  );
}
