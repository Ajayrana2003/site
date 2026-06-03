import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export class Courses extends Component {
  render() {
    return (
      <Fragment >
        <Container className='text-center'>
            <h1 className='serviceMainTitle'>MY COURSES</h1>
            <div className='bottom'></div>
            <Row>

                <Col lg={6} md={12} sm={12}>
                
                <Row>

                    <Col lg={6} md={6} sm={12} className='p-2'>
                    <img className="courseImg" src="https://img.magnific.com/free-photo/group-diverse-pupils-engaging-online-course-discussion-via-video-call_482257-123125.jpg?semt=ais_hybrid&w=740&q=80" />
                    
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                    <h5 className=' text-justify serviceName'>Laravel 12 </h5>
                    <p className=' text-justify serviceDescription'>Laravel 12 - Build Advance Ecommerce Projects A-Z</p>
                    <Link className='courseViewMore float-start' to='/coursedetails' >View Details</Link>
                    </Col>




                     <Col lg={6} md={6} sm={12} className='p-2'>
                    <img className="courseImg" src="https://m.universalclass.com/i/course/projectmanagement/istock-1411195926.jpg" />
                    
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                    <h5 className=' text-justify serviceName'>Laravel 12 </h5>
                    <p className=' text-justify serviceDescription'>Laravel 12 - Build Advance Ecommerce Projects A-Z</p>
                      <Link className='courseViewMore float-start' to='/coursedetails' >View Details</Link>
                    </Col>

                </Row>
                
                </Col>


               <Col lg={6} md={12} sm={12}>
              <Row>

                    <Col lg={6} md={6} sm={12} className='p-2'>
                    <img className="courseImg" src="https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/3d44f5dab7dd.png" />
                    
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                    <h5 className=' text-justify serviceName'>Laravel 12 </h5>
                    <p className=' text-justify serviceDescription'>Laravel 12 - Build Advance Ecommerce Projects A-Z</p>
                        <Link className='courseViewMore float-start' to='/coursedetails' >View Details</Link>
                    </Col>






                     <Col lg={6} md={6} sm={12} className='p-2'>
                    <img className="courseImg" src="https://www.alphaacademy.org/wp-content/uploads/2021/09/Alpha-Course-Product-Images-2024-Update-35-1-460x276-1.webp" />
                    
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                    <h5 className=' text-justify serviceName'>Laravel 12 </h5>
                    <p className=' text-justify serviceDescription'>Laravel 12 - Build Advance Ecommerce Projects A-Z</p>
                        <Link className='courseViewMore float-start' to='/coursedetails' >View Details</Link>
                    </Col>

                </Row>
                
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Courses
