import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import ProjectsDetails from '../components/ProjectDetails/ProjectsDetails'
import Footer from '../components/Footer/Footer'

class ProjectDetailPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Project Details"></TopNavigation>
        <PageTop pagetitle="Project Details"></PageTop>
        <ProjectsDetails></ProjectsDetails>
        <Footer></Footer>
        
      </Fragment>
    )
  }
}

export default ProjectDetailPage
