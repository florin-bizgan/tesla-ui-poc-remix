import type { LinksFunction } from "@remix-run/node";
import {
  Button,
  buttonLink,
  Text,
  textLink,
  Chevron,
  chevronLink,
  Box,
  boxLink,
  sectionList,
} from "~/component";
import { globalStyleLink } from "~/component/global/global-style";

export const links: LinksFunction = () => [
  ...buttonLink(),
  ...globalStyleLink(),
  ...textLink(),
  ...chevronLink(),
  ...boxLink(),
];

const missingDataMap = {
  "model-3": {
    title: "Model 3",
    text: "Order Online for",
    link: "Touchless Delivery",
    buttonList: ["CUSTOM ORDER", "EXISTING INVENTORY"],
  },
  "model-y": {
    title: "Model Y",
    text: "Order Online for",
    link: "Touchless Delivery",
    buttonList: ["CUSTOM ORDER", "EXISTING INVENTORY"],
  },
  "model-s": {
    title: "Model S",
    text: "Order Online for",
    link: "Touchless Delivery",
    buttonList: ["CUSTOM ORDER", "EXISTING INVENTORY"],
  },
  "model-x": {
    title: "Model X",
    text: "Order Online for",
    link: "Touchless Delivery",
    buttonList: ["CUSTOM ORDER", "EXISTING INVENTORY"],
  },
  "solar-panels": {
    title: "Solar Panels",
    text: "Lowest Cost Solar Panels in America",
    buttonList: ["CUSTOM NOW", "LEARN MORE"],
  },
  "solar-roof": {
    title: "Solar Roof",
    text: "Produce Clean Energy From Your Roof",
    buttonList: ["CUSTOM NOW", "LEARN MORE"],
  },
  accessories: {
    title: "Accessories",
    buttonList: ["SHOP NOW"],
  },
};

const TeslaUI = () => {
  return (
    <div>
      {sectionList.map((section, k) => {
        return (
          <Box
            key={section}
            section={section}
            fullHeight
            display='flex'
            vertical
            gap
          >
            <Box display='grid'>
              <Text title>{missingDataMap[section].title}</Text>
              <Text>{missingDataMap[section]?.text}</Text>
              {missingDataMap[section]?.link && (
                <Text underline>{missingDataMap[section]?.link}</Text>
              )}
            </Box>
            <Box
              section={section}
              vertical
              display='flex'
              gap
              align='center'
              justify='center'
            >
              <Box display='flex' gap vertical>
                {missingDataMap[section].buttonList.map((buttonText, key) => {
                  return (
                    <Button light={!!key} key={buttonText}>
                      {buttonText}
                    </Button>
                  );
                })}
                {/* <Button>CUSTOM ORDER</Button>
                <Button>EXISTING INVENTORY</Button> */}
              </Box>

              <a
                href={`#${
                  sectionList[k + 1 === sectionList.length ? 0 : k + 1]
                }`}
              >
                <Chevron rotate={k + 1 === sectionList.length ? "180" : "0"} />
              </a>
            </Box>
          </Box>
        );
      })}
      {/* <Box section='model-3' fullHeight display='flex' vertical gap>
        <Box display='grid'>
          <Text title>Model 3</Text>
          <Text>Order Online for</Text>
          <Text underline>Touchless Delivery</Text>
        </Box>
        <Box
          section='model-s'
          vertical
          display='flex'
          gap
          align='center'
          justify='center'
        >
          <Box display='flex' gap vertical>
            <Button>CUSTOM ORDER</Button>
            <Button>EXISTING INVENTORY</Button>
          </Box>
          <Chevron />
        </Box>
      </Box>

      <Box section='model-y' fullHeight display='flex' vertical gap>
        <Box display='grid'>
          <Text title>Model Y</Text>
          <Text>Order Online for</Text>
          <Text underline>Touchless Delivery</Text>
        </Box>
        <Box
          section='model-y'
          vertical
          display='flex'
          gap
          align='center'
          justify='center'
        >
          <Box display='flex' gap vertical>
            <Button>CUSTOM ORDER</Button>
            <Button>EXISTING INVENTORY</Button>
          </Box>
          <Chevron />
        </Box>
      </Box>

      <Box section='model-s' fullHeight display='flex' vertical gap>
        <Box display='grid'>
          <Text title>Model S</Text>
          <Text>Order Online for</Text>
          <Text underline>Touchless Delivery</Text>
        </Box>
        <Box vertical display='flex' gap align='center' justify='center'>
          <Box display='flex' gap vertical>
            <Button>CUSTOM ORDER</Button>
            <Button>EXISTING INVENTORY</Button>
          </Box>
          <Chevron />
        </Box>
      </Box>

      <Box section='solar-panels' fullHeight display='flex' vertical gap>
        <Box display='grid'>
          <Text title>Solar Panels</Text>
          <Text>Order Online for</Text>
          <Text underline>Touchless Delivery</Text>
        </Box>
        <Box vertical display='flex' gap align='center' justify='center'>
          <Box display='flex' gap vertical>
            <Button>CUSTOM ORDER</Button>
            <Button>EXISTING INVENTORY</Button>
          </Box>
          <Chevron />
        </Box>
      </Box>
      <Box section='solar-roof' fullHeight display='flex' vertical gap>
        <Box display='grid'>
          <Text title>Solar Roof</Text>
          <Text>Order Online for</Text>
          <Text underline>Touchless Delivery</Text>
        </Box>
        <Box vertical display='flex' gap align='center' justify='center'>
          <Box display='flex' gap vertical>
            <Button>CUSTOM ORDER</Button>
            <Button>EXISTING INVENTORY</Button>
          </Box>
          <Chevron />
        </Box>
      </Box>

      <Box section='accessories' fullHeight display='flex' vertical gap>
        <Box display='grid'>
          <Text title>Accessories</Text>
          <Text>Order Online for</Text>
          <Text underline>Touchless Delivery</Text>
        </Box>
        <Box vertical display='flex' gap align='center' justify='center'>
          <Box display='flex' gap vertical>
            <Button>CUSTOM ORDER</Button>
            <Button>EXISTING INVENTORY</Button>
          </Box>
          <Chevron />
        </Box>
      </Box> */}
      <svg viewBox='0 0 342 35' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z'
          fill='currentColor'
        ></path>
      </svg>
    </div>
  );
};

export default TeslaUI;
