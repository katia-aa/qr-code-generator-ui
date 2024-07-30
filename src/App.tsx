import React from "react";
import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Badge,
} from "@chakra-ui/react";
import QRCodeGenerator from "./QRCodeGenerator";
import DynamicQRCodeGenerator from "./DynamicQRCodeGenerator";

const App: React.FC = () => {
  return (
    <Container pt="5">
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Static QR Code</Tab>
          <Tab isDisabled>
            Dynamic QR Code{" "}
            <Badge ml="1" fontSize="0.8em" colorScheme="red">
              coming soon!
            </Badge>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <QRCodeGenerator />
          </TabPanel>
          <TabPanel>
            <DynamicQRCodeGenerator />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default App;
