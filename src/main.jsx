import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext.jsx";
import UserContextProvider from "./context/UserContext.jsx";
import ClerkWithTheme from "./clerk/ClerkWithTheme.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <ClerkWithTheme>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </ClerkWithTheme>
    </AppContextProvider>
  </BrowserRouter>
);
