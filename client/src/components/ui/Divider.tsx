import type { EnergyVariant } from "../../consts";

type DividerProps = {
  label?: string;
  variant?: EnergyVariant;
  type?: "label" | "thick" | "line";
};

const dividerStyles = {
  cyan: "bg-cyan-900/70",
  green: "bg-green-500/40",
  red: "bg-red-500/40",
  orange: "bg-orange-500/40",
};

export function Divider({
  label,
  variant = "cyan",
  type = "line",
}: DividerProps) {
  return (
    <div className={`flex items-center w-full ${type === "label" && "gap-4"}`}>
      {type === "label" && label && (
        <span className="text-[11px] text-cyber-cyan-text font-heading uppercase font-semibold tracking-widest whitespace-nowrap">
          ◊ {label}
        </span>
      )}

      {type === "thick" && (
        <div className={`w-20 h-[3px] ${dividerStyles[variant]}`} />
      )}

      <div className={`flex-1 h-px ${dividerStyles[variant]}`} />
    </div>
  );
}
