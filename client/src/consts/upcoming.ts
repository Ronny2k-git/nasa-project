import type { CardConfig } from "../types";

export type UpcomingData = {
  launchedMissions: number;
  nextWindow: string;
  rocketsReady: number;
  status: string;
};

export const upcomingInfoCards: CardConfig<UpcomingData>[] = [
  {
    title: "Launched Missions",
    key: "launchedMissions",
    textColor: "text-cyber-cyan-text",
  },
  {
    title: "Next Launch Window",
    key: "nextWindow",
    textColor: "text-white/85",
  },
  {
    title: "Rockets Ready",
    key: "rocketsReady",
    textColor: "text-orange-300",
  },
  { title: "Status", key: "status", textColor: "text-orange-300" },
];
