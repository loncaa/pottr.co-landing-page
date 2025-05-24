import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import "./tailwind.css";
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
import { url, root } from "./locales/en/meta.json";

// Load the GA tracking id from the .env
export const loader = async (args: LoaderFunctionArgs) => {
  const { context } = args;
  console.log('args', args, context?.cloudflare?.env);

  return json({
    ENV: {
      gaTrackingId: context.cloudflare.env.GA_TRACKING_ID,
      isDevelopment: context.cloudflare.env.NODE_ENV === "development",
    },
  });
};

export default function App() {
  const { ENV } = useLoaderData<typeof loader>();
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
        <meta property="og:url" content={url} />
        <meta property="og:title" content={root.title} />
        <meta property="og:description" content={root.description} />
        <meta property="og:image" content={`${url}/preview.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={root.title} />
        <meta name="twitter:description" content={root.description} />
        <meta name="twitter:image" content={`${url}/preview.png`} />
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
