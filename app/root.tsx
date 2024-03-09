import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import stylesheet from "~/tailwind.css";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import { useEffect } from "react";
import * as gtag from "./utils/gtag.client";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: stylesheet },
];

// Load the GA tracking id from the .env
export const loader = async ({ context, params }: LoaderFunctionArgs) => {
  const lang = params.lang;

  return json({
    language: lang,
    ENV: {
      gaTrackingId: context.env?.GA_TRACKING_ID,
      isDevelopment: context.env?.NODE_ENV === "development",
    },
  });
};

export default function App() {
  const { ENV, language } = useLoaderData<typeof loader>();
  console.log("language", language);
  const { isDevelopment, gaTrackingId } = ENV;
  const location = useLocation();

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }
  }, [location, gaTrackingId]);

  useEffect(() => {
    if (isDevelopment) {
      console.log("DEV ENV");
    }
  }, [isDevelopment]);

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
          content="A small digital agency for Shopify integration and custom app development"
        />
        <meta property="og:image" content="https://pottr.co/preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://pottr.co" />
        <meta name="twitter:title" content="Pottr.co - Digital agency" />
        <meta
          name="twitter:description"
          content="A small digital agency for Shopify integration and custom app development"
        />
        <meta name="twitter:image" content="https://pottr.co/preview.png" />
        <Meta />
        <Links />
      </head>
      <body>
        {isDevelopment || !gaTrackingId ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            ></script>
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gaTrackingId}');
                `,
              }}
            />
          </>
        )}

        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
