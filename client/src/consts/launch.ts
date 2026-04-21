import type { CardConfig } from "../types";

export type LaunchData = {
  planets: number;
  nextWindow: string;
  activeMissions: number;
  status: string;
};

export const launchInfoCards: CardConfig<LaunchData>[] = [
  {
    title: "Eligible Planets",
    key: "planets",
    textColor: "text-cyber-cyan-text",
  },
  {
    title: "Next Launch Window",
    key: "nextWindow",
    textColor: "text-white/85",
  },
  {
    title: "Active Missions",
    key: "activeMissions",
    textColor: "text-orange-300",
  },
  { title: "Fleet Status", key: "status", textColor: "text-green-400" },
];

export const eligibilityPlanets = [
  {
    id: 1,
    description:
      "Planetary radius < 1.6× Earth's radius — ensures terrestrial-class surface conditions.",
  },
  {
    id: 2,
    description:
      "Effective stellar flux in range 0.36 – 1.11× Earth's value — conservative habitable zone boundary.",
  },
];
