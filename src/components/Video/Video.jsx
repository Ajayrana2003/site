import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from 'react-player'

export class Video extends Component {


    constructor(){
        super();
        this.state={
            show:false
        }
    }

    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})




  render() {
    return (
      <Fragment>

        <Container className='text-center'>
            <h1 className='serviceMainTitle'>OUR VIDEO</h1>
            <div className='bottom'></div>
            <Row>
                <Col lg={6} md={6} sm={12} className='videoText'>
                 <p className="text-justify ServiceDescription">Technology has changed the way people live, work, and communicate in modern society. From smartphones and laptops to artificial intelligence and cloud computing, technology is now a major part of daily life.<br></br><br></br> 
                    
                    
                    Many companies use advanced software systems to manage data, improve customer service, and increase productivity. Students also benefit from technology through online learning platforms, virtual classrooms, and digital study materials. In the healthcare industry, modern machines and applications help doctors diagnose diseases more accurately and quickly. Social media platforms and messaging apps allow people to stay connected with friends and family from anywhere in the world.
                    
                    <br></br><br></br> As technology continues to grow, new innovations are making life easier, faster, and more efficient for everyone.</p>
                    
                
                </Col>
                <Col lg={6} md={6} sm={12} className='videoCard'>
                 <FontAwesomeIcon onClick={this.modalOpen} className='iconProject' icon={faVideoSlash}/>
                

                </Col>
            </Row>
        </Container>



        <Modal size='lg' show={this.state.show} onHide={this.modalClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
            <ReactPlayer
  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
  controls
  width="100%"
  height="400px"
/>

        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="secondary" onClick={this.modalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

















      </Fragment>
    )
  }
}

export default Video
