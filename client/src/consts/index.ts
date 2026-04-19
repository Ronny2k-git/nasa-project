import type { InfoCardProps } from "../components";
import type { Mission } from "../types";

export type LaunchData = {
  planets: number;
  nextWindow: string;
  activeMissions: number;
  status: string;
};

export type UpcomingData = {
  launchedMissions: number;
  nextWindow: string;
  rocketsReady: number;
  status: string;
};

export type HistoryData = {
  totalLaunches: number;
  successfull: number;
  firstLaunch: string;
  status: string;
};

export type CardConfig<T> = {
  title: string;
  key: keyof T;
  textColor: InfoCardProps["textColor"];
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

export const missions: Mission[] = [
  {
    id: 1,
    date: "May 16, 2026",
    mission: "FalconSat",
    rocket: "Falcon 1",
    target: "Kepler-442 b",
    status: "success",
  },
  {
    id: 2,
    date: "Jun 02, 2026",
    mission: "Dragon Demo",
    rocket: "Falcon 9",
    target: "Kepler-186 f",
    status: "aborted",
  },
  {
    id: 3,
    date: "Jun 18, 2026",
    mission: "Starlink Batch 12",
    rocket: "Falcon 9",
    target: "Low Earth Orbit",
    status: "success",
  },
  {
    id: 4,
    date: "Jul 01, 2026",
    mission: "Explorer IS1",
    rocket: "Explorer Heavy",
    target: "Kepler-452 b",
    status: "success",
  },
  {
    id: 5,
    date: "Jul 14, 2026",
    mission: "Cargo Resupply CRS-3",
    rocket: "Falcon 9",
    target: "ISS",
    status: "aborted",
  },
  {
    id: 6,
    date: "Aug 03, 2026",
    mission: "Voyager X",
    rocket: "Starship",
    target: "Kepler-22 b",
    status: "success",
  },
  {
    id: 7,
    date: "Aug 19, 2026",
    mission: "Lunar Surveyor",
    rocket: "SLS",
    target: "Moon",
    status: "success",
  },
  {
    id: 8,
    date: "Sep 05, 2026",
    mission: "Mars Cargo 1",
    rocket: "Starship",
    target: "Mars",
    status: "aborted",
  },
  {
    id: 9,
    date: "Sep 21, 2026",
    mission: "Deep Space Probe",
    rocket: "Falcon Heavy",
    target: "Kepler-62 e",
    status: "success",
  },
  {
    id: 10,
    date: "Oct 10, 2026",
    mission: "Habitat Deployment",
    rocket: "Starship",
    target: "Kepler-1649 c",
    status: "success",
  },
];
