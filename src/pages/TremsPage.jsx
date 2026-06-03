import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import TremsDescription from '../components/TremsDescription/TremsDescription'
import Footer from '../components/Footer/Footer'

 class TremsPage extends Component {
  
  componentDidMount(){
    window.scroll(0,0)
  }


  render() {
    return (
      <Fragment>
        <TopNavigation title="Trems and Condition"></TopNavigation>
        <PageTop pagetitle="Trems and Condition"></PageTop>
        <TremsDescription></TremsDescription>
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default TremsPage
