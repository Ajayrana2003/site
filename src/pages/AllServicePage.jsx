import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Services from '../components/Services/Services'
import ContectSec from '../components/ContectSec/ContectSec'
import Footer from '../components/Footer/Footer'

class AllServicepage extends Component {
  
  componentDidMount(){
    window.scroll(0,0)
  }


  render() {
    return (
      <Fragment>
        <TopNavigation title="Our Services"/>
        <PageTop pagetitle="Our Services"></PageTop>
        <Services></Services>
        <ContectSec></ContectSec>
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default AllServicepage
