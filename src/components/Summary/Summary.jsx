import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer';

// Wrapper component to use the hook with CountUp
const CountUpWrapper = ({ end, duration }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <span ref={ref}>
      {inView ? <CountUp start={0} end={end} duration={duration} /> : 0}
    </span>
  );
};

class Summary extends Component {
  render() {
    return (
      <Fragment>
        
        <Container fluid={true} className="summaryBanner p-0" >
            <div className="summaryBannerOverlay">
                <Container className='text-center'>
                    <Row>

         <Col lg={8} md={6} sm={12}>
             <Row className="countSection">
                <Col>
                <FontAwesomeIcon className='iconProject' icon={faGlobe}/>
                <h1 className='countNumber'>
    <CountUpWrapper end={3500} duration={3} />
</h1>

  <h4 className='countTitle'>Student Worldwide</h4>
                    <hr className="border-white w-25 mx-auto" style={{ borderWidth: '3px', opacity: '1' }} />

                
                </Col>

                <Col>
                <FontAwesomeIcon className='iconProject' icon={faLaptop}/>
                <h1 className='countNumber'>
    <CountUpWrapper end={22} duration={3} />
</h1>
                <h4 className='countTitle'>Courses Published</h4>
               <hr className="border-white w-25 mx-auto" style={{ borderWidth: '3px', opacity: '1' }} />

                </Col>

                <Col>
                <FontAwesomeIcon className='iconProject' icon={faStar}/>
              <h1 className='countNumber'>
    <CountUpWrapper end={3000} duration={3} />
</h1>
                <h4 className='countTitle'>Students Reviews</h4>
                <hr className="border-white w-25 mx-auto" style={{ borderWidth: '3px', opacity: '1' }} />

                </Col>

              </Row>
                        </Col>




          <Col lg={4} md={6} sm={12}>
          <Card className='workCard'>

            <Card.Body>

                <Card.Title className='cardTitle'>WHAT I HAVE ACHIEVED</Card.Title>
                <div>
                    <p className='cardSubTitle text-justify'><FontAwesomeIcon  className='iconBullent' icon={faCheckSquare}/> Requirement Gathering</p>
                    <p className='cardSubTitle text-justify'><FontAwesomeIcon className='iconBullent' icon={faCheckSquare}/> System Analysis</p>
                    <p className='cardSubTitle text-justify'><FontAwesomeIcon className='iconBullent' icon={faCheckSquare}/> Coding Testing</p>
                   <p className='cardSubTitle text-justify'><FontAwesomeIcon className='iconBullent' icon={faCheckSquare}/> Implementation</p>
                   
                </div>
            </Card.Body>


          </Card>
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
