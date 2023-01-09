import buttonStyle from "./style/button.css";

import type { LinksFunction } from "@remix-run/node";
import type { buttonType } from "./button.type";

const buttonLink: LinksFunction = () => [
  // mobile
  {
    rel: "stylesheet",
    href: buttonStyle,
  },
  // tablet
  {
    rel: "stylesheet",
    href: buttonStyle,
    media: "min-width: 768px",
  },
  // desktop
  {
    rel: "stylesheet",
    href: buttonStyle,
    media: "min-width: 1280px",
  },
  // dark
  {
    rel: "stylesheet",
    href: buttonStyle,
    media: "prefers-color-scheme: dark",
  },
];

const Button = ({ children, light }: buttonType) => {
  return (
    <button data-button data-light={light}>
      {children}
    </button>
  );
};

export { Button, buttonLink };
