import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

 class ContectSec extends Component {
  render() {
    return (
      <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col lg={6} md={6} sm={12}>
                <h1  className='ServiceName'>Quick Connect</h1>

            
                <Form>
      <Form.Group >
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Name" />
        
      </Form.Group>



       <Form.Group >
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>


      <Form.Group >
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
        
      </Form.Group>


     

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
                
                
                </Col>

                  <Col lg={6} md={6} sm={12}>
                  <h1>Discuss Now</h1>
                  <p className='ServiceDescription'>
                    6522 India , Haryana, Ambala Cantt,Barara <br></br>
                    <FontAwesomeIcon icon={faEnvelope}  /> Email: hello@easy.com <br></br>
                    <FontAwesomeIcon icon={faPhone}  /> Phone : 4398364883<br></br>


                 </p>
                
                
                </Col>
            </Row>


        </Container>


      </Fragment>
    )
  }
}

export default ContectSec
