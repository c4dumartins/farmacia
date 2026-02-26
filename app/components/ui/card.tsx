import React from "react";
import { cn } from "@/app/lib/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn("bg-card text-card-foreground rounded-lg border border-border shadow-sm", className)}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: CardProps) {
  return <div className={cn("p-6 border-b border-border", className)} {...props} />;
}

export function CardTitle({ className, ...props }: CardProps & { children: React.ReactNode }) {
  return <h3 className={cn("text-lg font-semibold", className)} {...props} />;
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={cn("p-6", className)} {...props} />;
}

export function CardFooter({ className, ...props }: CardProps) {
  return <div className={cn("px-6 py-4 border-t border-border", className)} {...props} />;
}
