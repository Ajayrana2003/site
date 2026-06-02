import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import AllProjects from '../components/AllProjects/AllProjects'
import Footer from '../components/Footer/Footer'

 class PortfolioPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Our Portfolio"/>
        <PageTop pagetitle="Our Portfolio">  </PageTop>
        <AllProjects></AllProjects>
        <Footer></Footer>

      </Fragment>
    )
  }
}

export default PortfolioPage
