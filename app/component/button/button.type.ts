import type { ReactNode } from "react";

export type Button = {
  children?: ReactNode;
  kind?: "danger" | "info" | "success" | "wrong";
  underline?: boolean;
};
