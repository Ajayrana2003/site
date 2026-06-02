import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";
import HomePage from '../pages/HomePage';
import AllServicepage from '../pages/AllServicePage';
import AllCoursePage from '../pages/AllCoursePage';
import PortfolioPage from '../pages/PortfolioPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import Refundpage from '../pages/Refundpage';
import TremsPage from '../pages/TremsPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import PrivacyPage from '../pages/PrivacyPage';

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
            <Route exact path="/refund" component={Refundpage} />
            <Route exact path="/trems" component={TremsPage} />
            <Route exact path="/privacy" component={PrivacyPage} />
            <Route exact path="/projectdetails" component={ProjectDetailPage} />

            





        </Switch>





      </Fragment>
    )
  }
}

export default AppRouter
