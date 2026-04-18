import type { ComponentPropsWithRef } from "react";
import { Card } from "../ui/components";

export type textColor =
  | "text-cyber-cyan-text"
  | "text-green-600"
  | "text-orange-300";

export type InfoCardProps = ComponentPropsWithRef<"div"> & {
  title: string;
  text: string | number;
  textColor: textColor;
};

export function InfoCard({ title, text, textColor, ...props }: InfoCardProps) {
  return (
    <Card className="w-full p-3" cornerBorders={false} {...props}>
      <span className="text-xs text-cyan-muted font-mono uppercase whitespace-nowrap">
        {title}
      </span>
      <span className={`text-sm font-semibold ${textColor}`}>{text}</span>
    </Card>
  );
}
