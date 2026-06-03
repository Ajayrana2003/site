import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import { faClone} from '@fortawesome/free-solid-svg-icons'
import { faTags } from '@fortawesome/free-solid-svg-icons'
 import 'video-react/dist/video-react.css'
 import {Player,  BigPlayButton } from 'video-react'

 class CourseDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col lg={8} md={6} sm={12}>
                <h1 className='courseDetailsText'>Python course and group discussion </h1>
                <img className='courseDetaisImg' src="https://st.focusedcollection.com/18590116/i/650/focused_292044078-stock-photo-close-front-view-middle-aged.jpg"/><br></br><br></br>
                <p className='CoursealDescription'>Python is one of the most popular and versatile programming languages in the world.<br></br><br></br> It is widely used for web development, data analysis, artificial intelligence, machine learning, automation, and scientific computing. Python is known for its simple syntax, which makes it easy for beginners to learn while still being powerful enough for professional developers.<br></br><br></br> The language supports multiple programming paradigms, including object-oriented, procedural, and functional programming. Because of its large collection of libraries and frameworks, developers can build complex applications with less code and in less time. Popular frameworks such as Django and Flask are commonly used for web development, while libraries like NumPy, Pandas, and TensorFlow are essential tools for data science and machine learning projects.</p>
                </Col>

                <Col lg={4} md={6} sm={12}>
                <div className='widget_feature'>
                  <h4 class="widget-title text-center">Course Features</h4>
                  <hr></hr>

                <ul>

                  <li><FontAwesomeIcon  className='iconBullent' icon={faUser}/><span> Enrolled :</span> 1200 students</li>
                  <li><FontAwesomeIcon  className='iconBullent' icon={faClock}/><span> Duration :</span> 2 hours</li>
                  <li><FontAwesomeIcon  className='iconBullent' icon={faClipboard}/><span> Lectures :</span> 8</li>
                  <li><FontAwesomeIcon  className='iconBullent' icon={faClone}/><span> Categories :</span> Technology</li>
                  <li><FontAwesomeIcon  className='iconBullent' icon={faTags}/><span> Tags :</span> Android, JavaScript</li>
                  <li><FontAwesomeIcon  className='iconBullent' icon={faCheckSquare}/><span> Instructor :</span> Radhe Radhe</li>

                </ul>
                <div class="price-wrap text-center"> 
                  <h5>Price:<span>$54.00</span></h5>
                  <Button variant="warning">ENROLL COURSE</Button>

                </div>
                

                </div>

                </Col>

            </Row>
        </Container>

<br></br><br></br>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
            <div className='widget_feature'>
            <h1 className='courseDetailsText'>Skill You Need </h1>
                <hr></hr>
                <ul>
                  <li ><FontAwesomeIcon  className='iconBullent' icon={faCheckSquare}/>  Metus interdum metus</li>
                  <li ><FontAwesomeIcon  className='iconBullent' icon={faCheckSquare}/> system is good </li>
                  <li ><FontAwesomeIcon  className='iconBullent' icon={faCheckSquare}/> Laptop is needed</li>
                  <li ><FontAwesomeIcon  className='iconBullent' icon={faCheckSquare}/> Computer knowledge you needed</li>
                </ul>
                </div>
 
            
            </Col>

           <Col lg={6} md={6} sm={12}>

            <Player
             src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
           
             <BigPlayButton position="center"></BigPlayButton>
           </Player>



            </Col>





          </Row>
        </Container>











      </Fragment>
    )
  }
}

export default CourseDetails
