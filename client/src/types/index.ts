import type { InfoCardProps } from "../components";

export type Mission = {
  id: number;
  date: string;
  mission: string;
  rocket: string;
  target: string;
  status?: "success" | "aborted" | "upcoming";
};

export type CardConfig<T> = {
  title: string;
  key: keyof T;
  textColor: InfoCardProps["textColor"];
};

export type FilterType = "all" | "success" | "aborted";
