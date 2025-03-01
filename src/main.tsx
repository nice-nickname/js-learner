import { Theme } from "@radix-ui/themes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import { UserContextProvider } from "./Context/UserContext.tsx";

import "@radix-ui/themes/styles.css";
import "./index.css";
import { GameContextProvider } from "./Context/GameContext.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter basename="/js-learner">
            <Theme appearance="dark" radius="large">
                <GameContextProvider>
                    <UserContextProvider>
                        <App />
                    </UserContextProvider>
                </GameContextProvider>
            </Theme>
        </BrowserRouter>
    </StrictMode>
);
