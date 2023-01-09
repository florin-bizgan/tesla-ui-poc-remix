import type { LinksFunction } from "@remix-run/node";
import type { textType } from "./text.type";
import textStyle from "./style/text.css";

const textLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: textStyle,
  },
];

const Text = ({ children, title, underline }: textType) => {
  return (
    <span data-text data-title={title} data-underline={underline}>
      {children}
    </span>
  );
};

export { Text, textLink };
