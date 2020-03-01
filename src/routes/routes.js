import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import CustomRoute from "./customRoute";
import Home from "../modules/home/home";
import About from "../modules/about/about";
import Work from "../modules/work/work";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <CustomRoute exact path="/" component={<Home />}></CustomRoute>
                <CustomRoute exact path="/home" component={<Home />}></CustomRoute>
                <CustomRoute exact path="/about" component={<About />}></CustomRoute>
                <CustomRoute exact path="/work" component={<Work />}></CustomRoute>
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;