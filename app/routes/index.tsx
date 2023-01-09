import type { LinksFunction } from "@remix-run/node";
import { Button, buttonLink, Text, textLink } from "~/component";
import { globalStyleLink } from "~/component/global/global-style";

export const links: LinksFunction = () => [
  ...buttonLink(),
  ...globalStyleLink(),
  ...textLink(),
];

const TeslaUI = () => {
  return (
    <div>
      <Text title>Model S</Text>
      <Text>Order Online for</Text>
      <Text underline>Touchless Delivery</Text>
      <Button>CUSTOM ORDER</Button>
      <Button>EXISTING INVENTORY</Button>
    </div>
  );
};

export default TeslaUI;
