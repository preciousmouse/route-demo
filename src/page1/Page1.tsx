import React from 'react';
import { RouteChildrenProps } from 'react-router-dom';

export interface Page1Props extends RouteChildrenProps { }
export const Page1 = (props: Page1Props) => {

    return (
        <>Page1</>
    )
}
export default Page1;