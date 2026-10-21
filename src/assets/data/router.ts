import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import type { HomeSearch } from "../types";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";
import HomePage from "../pages/HomePage";
import CountryPage from "../pages/CountryPage";

const rootRoute = createRootRoute({
  component: Layout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
  validateSearch: (search: Record<string, unknown>): HomeSearch => ({
    q: typeof search.q === "string" && search.q !== "" ? search.q : undefined,
    region: typeof search.region === "string" && search.region !== "" ? search.region : undefined,
  }),
});

const countryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/country/$code",
  component: CountryPage,
});

const routeTree = rootRoute.addChildren([homeRoute, countryRoute]);

export const router = createRouter({
  routeTree,
  basepath: import.meta.env.BASE_URL,
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultNotFoundComponent: NotFound,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
