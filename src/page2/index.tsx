import React from 'react';
import { routeConfig, routePathEnum } from "../types/types";
import Page2 from "./Page2";

export const route: routeConfig = {
    path: routePathEnum.Page2,
    exact: false,
    component: props => <Page2 {...props} />,
};
export default route;