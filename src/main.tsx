import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProviderChakraUi } from "./providers/ProviderChakraUi.tsx";
import { ProviderReactRouter } from "./providers/ProviderReactRouter.tsx";
import { ProviderReown } from "./providers/ProviderReown.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProviderChakraUi>
      <ProviderReown>
        <ProviderReactRouter />
      </ProviderReown>
    </ProviderChakraUi>
  </StrictMode>
);
