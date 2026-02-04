/* CSS */
import "./index.css";

/* React Router */
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

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

export default function App() {
  return <Outlet />;
}
