import type * as T from "./button.type";
import buttonStyle from "./style/button.css";
import type { LinksFunction } from "@remix-run/node";

const buttonLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: buttonStyle,
  },
];

const Button = ({ children, kind, underline }: T.Button) => {
  return (
    <button data-kind={kind} data-underline={underline}>
      {children}
    </button>
  );
};

export { Button, buttonLink };
