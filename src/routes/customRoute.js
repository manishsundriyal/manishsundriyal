import React from 'react'
import { Route } from 'react-router-dom';
import Layout from '../modules/layout/layout';

import { AppProvider } from "../lib/context"

const CustomRoute = props => {
    const { component, fileName, ...rest } = props;
    return (
        <Route
            {...rest}
            render={routeProps => {
                return (
                    <AppProvider value={{
                        ...routeProps,
                        fileName,
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
