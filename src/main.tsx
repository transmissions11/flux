import { ChakraProvider } from "@chakra-ui/react";
import mixpanel from "mixpanel-browser";
import React from "react";
import ReactDOM from "react-dom/client";
import { ReactFlowProvider } from "reactflow";

import App from "./components/App";
import theme from "./config";
import "./index.css";

export const MIXPANEL_TOKEN = import.meta.env.VITE_MIXPANEL_TOKEN;

if (MIXPANEL_TOKEN) mixpanel.init(MIXPANEL_TOKEN);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReactFlowProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </ReactFlowProvider>
  </React.StrictMode>
);
