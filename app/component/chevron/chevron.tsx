import type { LinksFunction } from "@remix-run/node";
import chevronStyle from "./style/chevron.css";
import { Fragment } from "react";
import type * as T from "./chevron.type";

const chevronLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: chevronStyle,
  },
];

const Chevron = ({ rotate }: T.Chevron) => {
  return (
    // <>
    <div data-chevron data-rotate={rotate}>
      <img src='/chevron.svg' alt='Arrow Down' width={24} />
    </div>
    // </>
  );
};

export { Chevron, chevronLink };
