import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";
import HomePage from '../pages/HomePage';
import AllServicepage from '../pages/AllServicePage';
import AllCoursePage from '../pages/AllCoursePage';
import PortfolioPage from '../pages/PortfolioPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';

 class AppRouter extends Component {
  render() {
    return (
      <Fragment>

        <Switch>


            <Route exact path="/" component={HomePage} />
            <Route exact path="/service" component={AllServicepage} />
            <Route exact path="/course" component={AllCoursePage} />
            <Route exact path="/portfolio" component={PortfolioPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
            





        </Switch>





      </Fragment>
    )
  }
}

export default AppRouter
