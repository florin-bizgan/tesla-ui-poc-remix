import type { ReactNode } from "react";

export const sectionList = [
  "model-3",
  "model-y",
  "model-s",
  "model-x",
  "solar-panels",
  "solar-roof",
  "accessories",
] as const;
type sectionType = typeof sectionList[number];

export type boxType = {
  children?: ReactNode;
  display?: "flex" | "grid";
  id?: string;
  gap?: boolean;
  vertical?: boolean;
  fullHeight?: boolean;
  align?: "center" | "start" | "end";
  justify?: "center" | "start" | "end";
  section?: sectionType;
};
