import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import designIcon from '../../asset/image/design.png';
import ecommerceIcon from '../../asset/image/ecommerce.png';
import webIcon from '../../asset/image/web.png';


export class Services extends Component {
  render() {
    return (
      <Fragment>

        <Container className='text-center'>
            <h1 className='serviceMainTitle'>MY SERVICE</h1>
            <div className='bottom'></div>
            <Row>
                <Col lg={4} md={6} sm={12}>
                
                <div className='serviceCard text-centre'>
                    <img className="ecommerceIcon" src={ecommerceIcon}/>
                    <h1 className='ServiceName' >Ecommerce</h1>
                    <p className='ServiceDescription' >I will design and develop ecommerce online store website</p>
                </div>
                    
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                
               <div className='serviceCard text-centre'>
                 <img className="ecommerceIcon" src={designIcon}/>
                    <h1 className='ServiceName' >Web Design</h1>
                    <p className='ServiceDescription'>Qualified web design and attractive effecty which catches visitir eye.</p>
                </div>
                    
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                
               <div className='serviceCard text-centre'>
                    <img className="webIcon" src={webIcon}/>
                    <h1 className='ServiceName' >Web Development</h1>
                    <p className='ServiceDescription'>Clean and fresh air code to make your website dynamic perfectly</p>
                </div>
                    
                    </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Services
