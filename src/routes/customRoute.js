import React, { useState } from 'react'
import { Route } from 'react-router-dom';
import Layout from '../modules/layout/layout';

import { AppProvider } from "../lib/context"

const CustomRoute = props => {
    const { component, fileName, ...rest } = props;
    const [theme, setTheme] = useState("dracula");

    // const head = document.getElementsByTagName('head')[0];
    // const elementToCreate = document.createElement('link');
    // elementToCreate.rel = 'stylesheet';
    // elementToCreate.id = `highlightjs-${theme}`;
    // elementToCreate.href = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/${theme}.min.css`;
    // head.appendChild(elementToCreate);

    return (
        <Route
            {...rest}
            render={routeProps => {
                return (
                    <AppProvider value={{
                        ...routeProps,
                        fileName,
                        setTheme
                    }}>
                        <Layout>
                            {component}
                        </Layout>
                    </AppProvider>
                )
            }}
        />
    )
}

export default CustomRoute;
