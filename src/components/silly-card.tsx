import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";
import { FaPoop } from "react-icons/fa";

interface SillyCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function SillyCard({ title, children, className }: SillyCardProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-all hover:scale-105",
        className
      )}
    >
      <div className="absolute -right-16 -top-16 z-10 size-32 rotate-12 transform bg-accent opacity-10 transition-transform group-hover:rotate-45" />
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FaPoop className="size-6 animate-bounce text-accent" />
          <Typography.H3>{title}</Typography.H3>
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}