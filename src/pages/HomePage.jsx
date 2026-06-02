import React, { Component, Fragment } from 'react'
import TopBanner from "../components/TopBanner/TopBanner";
import Services from "../components/Services/Services";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import RecentProject from "../components/RecentProject/RecentProject";
import Courses from "../components/Courses/Courses";
import Video from "../components/Video/Video";
import ClientReview from "../components/ClientReview/ClientReview";
import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";
import Welcome from '../components/Welcome/Welcome';



 class HomePage extends Component {
  render() {
    return (
      <Fragment>
         <TopNavigation title="Easy Learning Page"/>
      <TopBanner></TopBanner>
      <Welcome></Welcome>
      <Services></Services>
      <Analysis></Analysis>
      <Summary></Summary>
      <RecentProject></RecentProject>
      <Courses></Courses>
      <Video></Video>
      <ClientReview></ClientReview>
      <AboutMe></AboutMe>
      <Footer></Footer>

      </Fragment>
    )
  }
}

export default HomePage
