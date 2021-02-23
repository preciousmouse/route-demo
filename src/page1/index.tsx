import React from 'react';
import { routeConfig, routePathEnum } from "../types/types";
import Page1 from "./Page1";

export const route: routeConfig = {
    path: routePathEnum.Page1,
    exact: false,
    component: props => <Page1 {...props} />,
};
export default route;