import { RouteChildrenProps } from 'react-router-dom';


export enum routePathEnum {
    ROOT = "/",
    Page1 = "page1",
    Page2 = "page2",
    ERROR = "ERROR",
};

export interface routeConfig {
    path: routePathEnum,
    exact?: boolean,
    component?: React.FunctionComponent<RouteChildrenProps>,
    childRoutes?: routeConfig[],
    indexRoutePath?: routePathEnum,
};