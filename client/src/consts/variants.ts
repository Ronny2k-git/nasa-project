export const energyVariants = {
  cyan: {
    text: "text-cyber-cyan-text",
    badge: "bg-secondary-card border-cyber-cyan-text",
  },
  orange: {
    text: "text-orange-300",
    badge: "bg-orange-300/10 border-orange-300",
  },
} as const;

export type EnergyVariant = keyof typeof energyVariants;
