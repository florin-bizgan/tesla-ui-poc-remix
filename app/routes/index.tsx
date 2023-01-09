import type { LinksFunction } from "@remix-run/node";
import { Button, buttonLink } from "~/component";

export const links: LinksFunction = () => [...buttonLink()];

const TeslaUI = () => {
  return (
    <div>
      <Button>CUSTOM ORDER</Button>
      <Button>EXISTING INVENTORY</Button>
    </div>
  );
};

export default TeslaUI;
