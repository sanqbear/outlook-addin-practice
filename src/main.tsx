import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import App from "./App.tsx";


const bodyRoot = document.getElementById("root");
if (bodyRoot) {
  createRoot(bodyRoot).render(
    <StrictMode>
      <FluentProvider theme={teamsLightTheme}>
        <App />
      </FluentProvider>
    </StrictMode>
  );
}
