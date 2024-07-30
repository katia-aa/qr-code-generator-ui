import React from "react";
import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import QRCodeGenerator from "./QRCodeGenerator";
import DynamicQRCodeGenerator from "./DynamicQRCodeGenerator";

const App: React.FC = () => {
  return (
    <Container pt="5">
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Static QR Code</Tab>
          <Tab>Dynamic QR Code</Tab>
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
