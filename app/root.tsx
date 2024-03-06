import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import ProductPage from "./hooks/useCallback/example1/ProductPage";
// import ChatRoom from "./hooks/useCallback/example2/ChatRoom";
// import ChatRoom from "./hooks/useCallback/example2/ChatRoom-optimization-1";
import ChatRoom from "./hooks/useCallback/example2/ChatRoom-optimization-2";
import ComWithContext from "./hooks/useContext/example1/ComWithContext";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <ProductPage />
        <ChatRoom />
        <ComWithContext />
      </body>
    </html>
  );
}
