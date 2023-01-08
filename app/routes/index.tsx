import type { LinksFunction } from "@remix-run/node";
import { Button, buttonLink } from "~/component";

export const links: LinksFunction = () => [...buttonLink()];

const TeslUI = () => {
  return (
    <div>
      <h1>Tesla bam bam</h1>
      <Button kind='danger'>Tesla Turbo</Button>
      <Button kind='info' data-underline>
        Tesla Turbo
      </Button>
      <Button kind='success'>Tesla Turbo</Button>
      <Button kind='wrong'>Tesla Turbo</Button>
    </div>
  );
};

export default TeslUI;
