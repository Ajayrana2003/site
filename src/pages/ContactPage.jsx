import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Footer from '../components/Footer/Footer'
import ContectSec from '../components/ContectSec/ContectSec'

class ContactPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation></TopNavigation>
        <PageTop pagetitle="Contact Us"></PageTop>
        <ContectSec></ContectSec>
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default ContactPage
