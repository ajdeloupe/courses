import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import About from './components/about/AboutPage';
import Home from './components/home/HomePage';
import Courses from './components/course/CoursePage';
import Header from './header';
import NotFound from './components/notfound/notfound';
import ManageCoursePage from './components/course/manageCoursePage';

export default (
    <BrowserRouter>
        <>
            <Route path="/" component={Header} />
            <Switch>
                <Route exact path="/" component={Home} />   
                <Route path="/about" component={About} />
                <Route path="/courses" component={Courses} />
                <Route path="/course/:id" component={ManageCoursePage} />
                <Route component={NotFound}/>
            </Switch>
        </>
    </BrowserRouter>
);