import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

class AllProjects extends Component {
  render() {
    return (
      <Fragment>

        <Container className='text-center'>
                            <h1 className='serviceMainTitle'>RECENT PROJECTS</h1>
                        <div className='bottom'></div>
            <Row>
                <Col lg={4} md={6} sm={12}>
                <Card className='projectCard'>
      <Card.Img variant="top" src="https://img.magnific.com/free-vector/online-tutorials-concept_52683-37480.jpg?semt=ais_hybrid&w=740&q=80" />
      <Card.Body>
        <Card.Title className='ServiceName' >Project Name One</Card.Title>
        <Card.Text className='ServiceDescription'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       <Button variant='primary'><Link className="link-style" to="/projectdetails">View More</Link></Button>
        
      </Card.Body>
    </Card>
                
                </Col>

                <Col lg={4} md={6} sm={12}>
                        <Card className='projectCard'>
      <Card.Img variant="top" src="https://blog.coursify.me/wp-content/uploads/2025/08/pratical-online-courses-coursifyme.jpg" />
      <Card.Body>
        <Card.Title className='ServiceName' >Project Name Two</Card.Title>
        <Card.Text className='ServiceDescription'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant='primary'><Link className="link-style" to="/projectdetails">View More</Link></Button>
        
      </Card.Body>
    </Card>
                
                </Col>

                <Col lg={4} md={6} sm={12}>
                       <Card className='projectCard'>
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/online-courses-tutorials_52683-37861.jpg?semt=ais_user_personalization&w=740&q=80" />
      <Card.Body className='ServiceDescription'>
        <Card.Title className='ServiceName' >Project Name Three</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant='primary'><Link className="link-style" to="/projectdetails">View More</Link></Button>
        
      </Card.Body>
    </Card>
                
                </Col>





                <Col lg={4} md={6} sm={12}>
                <Card className='projectCard'>
      <Card.Img variant="top" src="https://img.magnific.com/free-vector/online-tutorials-concept_52683-37480.jpg?semt=ais_hybrid&w=740&q=80" />
      <Card.Body>
        <Card.Title className='ServiceName' >Project Name One</Card.Title>
        <Card.Text className='ServiceDescription'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       <Button variant='primary'><Link className="link-style" to="/projectdetails">View More</Link></Button>
        
      </Card.Body>
    </Card>
                
                </Col>




                <Col lg={4} md={6} sm={12}>
                <Card className='projectCard'>
      <Card.Img variant="top" src="https://img.magnific.com/free-vector/online-tutorials-concept_52683-37480.jpg?semt=ais_hybrid&w=740&q=80" />
      <Card.Body>
        <Card.Title className='ServiceName' >Project Name One</Card.Title>
        <Card.Text className='ServiceDescription'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       <Button variant='primary'><Link className="link-style" to="/projectdetails">View More</Link></Button>
        
      </Card.Body>
    </Card>
                
                </Col>




                <Col lg={4} md={6} sm={12}>
                <Card className='projectCard'>
      <Card.Img variant="top" src="https://img.magnific.com/free-vector/online-tutorials-concept_52683-37480.jpg?semt=ais_hybrid&w=740&q=80" />
      <Card.Body>
        <Card.Title className='ServiceName' >Project Name One</Card.Title>
        <Card.Text className='ServiceDescription'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant='primary'><Link className="link-style" to="/projectdetails">View More</Link></Button>
        
      </Card.Body>
    </Card>
                
                </Col>


            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default AllProjects
