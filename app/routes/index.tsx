import type { LinksFunction } from "@remix-run/node";
import {
  Button,
  buttonLink,
  Text,
  textLink,
  Chevron,
  chevronLink,
} from "~/component";
import { globalStyleLink } from "~/component/global/global-style";

export const links: LinksFunction = () => [
  ...buttonLink(),
  ...globalStyleLink(),
  ...textLink(),
  ...chevronLink(),
];

const TeslaUI = () => {
  return (
    <div>
      <Text title>Model S</Text>
      <Text>Order Online for</Text>
      <Text underline>Touchless Delivery</Text>
      <Button>CUSTOM ORDER</Button>
      <Button>EXISTING INVENTORY</Button>
      <Chevron />
      <Chevron rotate='180' />
    </div>
  );
};

export default TeslaUI;
