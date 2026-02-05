/* React Router */
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

/* CSS */
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";

/* Theme */
import { theme } from "./theme";

export function links() {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap",
    },
    { rel: "stylesheet", href: "./index.css" },
  ];
}

/* Layout */
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ALMA Esport</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/* Hydrate Fallback */
export function HydrateFallback() {
  return (
    <div id="loading-splash">
      <div id="loading-splash-spinner">
        <p>Loading, please wait...</p>
      </div>
    </div>
  );
}

/* App */
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  );
}
