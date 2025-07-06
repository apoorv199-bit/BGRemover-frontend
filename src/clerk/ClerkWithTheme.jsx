import { ClerkProvider } from "@clerk/clerk-react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { dark } from "@clerk/themes";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export default function ClerkWithTheme({ children }) {
  const { theme } = useContext(AppContext);

  const appearance = {
    baseTheme: theme === "dark" ? dark : undefined,
  };

  return (
    <ClerkProvider appearance={appearance} publishableKey={PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>
  );
}
