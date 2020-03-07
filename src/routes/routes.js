import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import CustomRoute from "./customRoute";
import Home from "../modules/home/home";
import About from "../modules/about/about";
import Work from "../modules/work/work";
import Experience from "../modules/experience/experience";
import Blogs from "../modules/blogs/blogs";
import Contact from "../modules/contact/contact";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <CustomRoute exact path="/" component={<Home />} fileName="home.js"></CustomRoute>
                <CustomRoute exact path="/home" component={<Home />} fileName="home.js"></CustomRoute>
                <CustomRoute exact path="/about" component={<About />} fileName="about.js"></CustomRoute>
                <CustomRoute exact path="/experience" component={<Experience />} fileName="experience.js"></CustomRoute>
                <CustomRoute exact path="/work" component={<Work />} fileName="work.js"></CustomRoute>
                <CustomRoute exact path="/blogs" component={<Blogs />} fileName="blogs.js"></CustomRoute>
                <CustomRoute exact path="/contact" component={<Contact />} fileName="contact.js"></CustomRoute>
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;