import { App } from "../src/components/App";
import "../public/css/styles.css";
import { StyleProvider, ThemePicker } from "vcc-ui";
import React from "react";
import { router } from "next/client";

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <App />
        </ThemePicker>
      </StyleProvider>
      ,
    </React.StrictMode>
  );
}

export default HomePage;
