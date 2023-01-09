import type { LinksFunction } from "@remix-run/node";
import globalStyle from "./general-style.css";

export const globalStyleLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: globalStyle,
  },
];
