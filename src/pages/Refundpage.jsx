import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import RefundDescription from '../components/RefundDescription/RefundDescription'
import Footer from '../components/Footer/Footer'

 class Refundpage extends Component {
  render() {
    return (
      
        <Fragment>
            <TopNavigation title="Refund Policy"/>
                    <PageTop pagetitle='Refund Policy'></PageTop>
            <RefundDescription></RefundDescription>
           <Footer></Footer>
        </Fragment>
    )
  }
}

export default Refundpage
