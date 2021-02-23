import React from 'react';
import { routeConfig, routePathEnum } from "../types/types";
import ErrorPage from "./ErrorPage";

export const route: routeConfig = {
    path: routePathEnum.ERROR,
    exact: false,
    component: props => <ErrorPage {...props} />,
};
export default route;