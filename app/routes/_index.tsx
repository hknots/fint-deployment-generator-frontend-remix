import * as React from 'react';
import type {MetaFunction} from '@remix-run/node';
import Header from "~/src/Header";
import AsideFunctions from "~/src/AsideFunctions";
import EditWindow from "~/src/EditWindow";

export const meta: MetaFunction = () => [
    {title: 'Remix Starter'},
    {name: 'description', content: 'Welcome to remix!'},
];

export default function Index() {
    return (
        <React.Fragment>
            <Header/>
            <div className="flex w-full h-full">
                <AsideFunctions/>
                <EditWindow/>
            </div>
        </React.Fragment>
    );
}
