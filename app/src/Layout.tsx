import * as React from 'react';

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col w-screen h-screen bg-slate-400">
            {children}
        </div>
    );
}
