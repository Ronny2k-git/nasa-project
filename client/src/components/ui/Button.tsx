import type { ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { CornerBorders, type BorderColor } from "./CornerBorders";

const variantStyles = {
  primary: "border text-green-400 bg-green-400/5 text-base",
  ghost:
    "border border-cyber-cyan-text/50 text-cyan-muted hover:text-cyber-cyan hover:bg-cyan-500/10",
  all: "border bg-cyan-500/10 border-cyber-cyan-text hover:bg-cyan-500/15",
  success:
    "border bg-green-500/5 border-green-500/80 text-green-400/85 hover:bg-green-500/10",
  aborted:
    "border bg-red-500/5 border-red-500/80 text-red-400/85 hover:bg-red-500/10",
  waiting: "border bg-orange-300/20 border-orange-300 text-orange-300",
} as const;

type Variant = keyof typeof variantStyles;

export type ButtonProps = ComponentPropsWithRef<"button"> & {
  className?: string;
  variant?: Variant;
  borderColor?: BorderColor;
  iconLeft?: ReactNode;
  children: ReactNode;
};

export function Button({
  className,
  variant = "primary",
  borderColor,
  iconLeft,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        `flex relative px-4 items-center justify-center font-semibold`,
        variantStyles[variant],
        iconLeft && "gap-4",
        className,
      )}
      type="button"
      {...props}
    >
      {borderColor && <CornerBorders color={borderColor} size="xs" />}

      {iconLeft}

      {children}
    </button>
  );
}
