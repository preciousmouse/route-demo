import { routeConfig, routePathEnum } from "./types/types";
import Page1Route from './page1';
import Page2Route from './page2';
import ErrorRoute from './ErrorPage';

export const rootRouteConfig: routeConfig = {
    path: routePathEnum.ROOT,
    exact: false,
    childRoutes: [Page1Route, Page2Route, ErrorRoute],
    indexRoutePath: routePathEnum.Page1,
}