import * as React from 'react';
import type {MetaFunction} from '@remix-run/node';
import Header from "~/src/Header";
import Body from "~/src/Body";

export const meta: MetaFunction = () => [
    {title: 'Remix Starter'},
    {name: 'description', content: 'Welcome to remix!'},
];

export default function Index() {
    return (
        <React.Fragment>
            <Header/>
            <Body/>
        </React.Fragment>
    );
}
