import type { CardConfig } from "../types";

export type UpcomingData = {
  launchedMissions: number;
  nextMission: string;
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
    title: "Rockets Ready",
    key: "rocketsReady",
    textColor: "text-orange-300",
  },
  {
    title: "Next Mission in",
    key: "nextMission",
    textColor: "text-white",
  },
  { title: "Status", key: "status", textColor: "text-orange-300" },
];
