import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import projectDetails from '../../asset/image/pdetails.png';

 class ProjectsDetails extends Component {
  render() {
    return (
        <Fragment>
            <Container className='mt-5'>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                    <div className='about-thumb-wrap after-shape'>
                    <img src={projectDetails} />
                    </div>
                    
                    </Col>

                    <Col lg={6} md={6} sm={12} className='mt-5'>
                    <div className='project-details'>

                        <h1 className="projectDetailsText">Education in continuing a proud tradition.</h1>
                        <p className='detailName'>The quick, brown fox jumps over a lazy dog. Djs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox wheps. Bawds jog, flick quartz, vex nymphs. waltz, bad nymph,</p>
                    </div>
                    
                    
                    </Col>
                </Row>
            </Container>
        </Fragment>
      
    )
  }
}

export default ProjectsDetails
