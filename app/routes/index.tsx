import type { LinksFunction } from "@remix-run/node";
import { Button, buttonLink } from "~/component";
import { globalStyleLink } from "~/component/global/global-style";

export const links: LinksFunction = () => [
  ...buttonLink(),
  ...globalStyleLink(),
];

const TeslaUI = () => {
  return (
    <div>
      <Button>CUSTOM ORDER</Button>
      <Button>EXISTING INVENTORY</Button>
    </div>
  );
};

export default TeslaUI;
