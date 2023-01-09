import type { LinksFunction } from "@remix-run/node";
import boxStyle from "./style/box.css";
import type { boxType } from "./box.type";

const boxLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: boxStyle,
  },
];

const Box = ({
  children,
  display,
  gap,
  vertical,
  fullHeight,
  align,
  justify,
  section,
}: boxType) => {
  return (
    <div
      data-vertical={vertical}
      data-gap={gap}
      id={section}
      data-box={display}
      data-full-height={fullHeight}
      data-align={align}
      data-justify={justify}
      data-section={section}
    >
      {children}
    </div>
  );
};

export { boxLink, Box };
