import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class Summary extends Component {
  render() {
    return (
      <Fragment>
        
        <Container fluid={true} className="topFixedBanner p-0" >
            <div className="topBannerOverlay">
                <Container className="topContent">
                    <Row>
                        <Col className="text-center">
                        <h1 className="topTitle">EASY LEARNING</h1>
                        <h4 className="topSubTitle">Learn Profesionally</h4>
                        
                    
                        </Col>

                    </Row>



                </Container>


            </div>

        </Container > 

      </Fragment>
    )
  }
}

export default Summary
