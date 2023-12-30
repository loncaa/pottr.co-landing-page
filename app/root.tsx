import type { LinksFunction } from "@remix-run/cloudflare";
import stylesheet from "./tailwind.css";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pottr.co" />
        <meta property="og:title" content="Pottr.co - Digital agency" />
        <meta
          property="og:description"
          content="A small digital agency for Shopify integrations and custom app development"
        />
        <meta property="og:image" content="https://pottr.co/preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://pottr.co" />
        <meta name="twitter:title" content="Pottr.co - Digital agency" />
        <meta
          name="twitter:description"
          content="A small digital agency for Shopify integrations and custom app development"
        />
        <meta name="twitter:image" content="https://pottr.co/preview.png" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
