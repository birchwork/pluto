'use client';

import React from 'react';

type Context = {
    trailingPath: string;
    setTrailingPath: (path: string) => void;
};

export const BreadCrumbsContext = React.createContext<Context>({
    trailingPath: '',
    setTrailingPath: () => {
        //
    },
});

export const useBreadCrumbs = (trailingPath?: string) => {
    const context = React.useContext(BreadCrumbsContext);

    React.useEffect(() => {
        context.setTrailingPath(trailingPath ? trailingPath : 'loading');
        return () => context.setTrailingPath('');
    }, [trailingPath, context]);
}
