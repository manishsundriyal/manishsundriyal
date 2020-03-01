import React from 'react'
import { Route } from 'react-router-dom';
import Layout from '../modules/layout/layout';

const CustomRoute = props => {
    const { component, ...rest } = props;
    return (
        <Route
            {...rest}
            render={routeProps => {
                return (
                    <Layout>
                        {component}
                    </Layout>
                )
            }}
        />
    )
}

export default CustomRoute;
