import type { CardConfig } from "../types";

export type HistoryData = {
  totalLaunches: number;
  successfull: number;
  firstLaunch: string;
  status: string;
};

export const historyInfoCards: CardConfig<HistoryData>[] = [
  {
    title: "Total Launches",
    key: "totalLaunches",
    textColor: "text-cyber-cyan-text",
  },
  {
    title: "Successful Launches",
    key: "successfull",
    textColor: "text-green-400",
  },
  {
    title: "First Launch",
    key: "firstLaunch",
    textColor: "text-white/85",
  },
  { title: "Archive Status", key: "status", textColor: "text-green-400" },
];
