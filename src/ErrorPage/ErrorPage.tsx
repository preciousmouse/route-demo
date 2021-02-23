import React from 'react';
import { RouteChildrenProps } from 'react-router-dom';

export interface ErrorPageProps extends RouteChildrenProps { }
export const ErrorPage = (props: ErrorPageProps) => {

    return (
        <>ErrorPage</>
    )
}
export default ErrorPage;