import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

export class ClientReview extends Component {
  render() {

    var settings = {
        autoPlaySpeed:3000,
        autoPlay:true,
    dots: true,
    infinite: true,
    speed: 30,
    arrows:false,
    vertical:true,
    verticalSwiping:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };




    return (
      <Fragment>
        <Container fluid={true} className='sideBar text-center'>
            <h1 className='reviewMainTitle p-3'>TESTIMOIAL</h1>
            <div className='reviewbottom'></div>

            <Slider {...settings}>
                


             <div>
            <Row className='text-center justify-content-center'>
                <Col lg={6} md={6} sm={12}>
                <img className='circleImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRU33o0SUq45iS58i0Z2AZcc_Quo1_edFSCQ&s" />
                <h1 className='reviewName' >Elias Voss</h1>
                    <p className='reviewDescription' >Elias Voss is a freelance backend developer and accidental sysadmin who types faster than he thinks — which is saying something, because his brain runs on caffeine and half-baked ideas.</p>
                
                </Col>
            </Row>
            </div>




            <div>
            <Row className='text-center justify-content-center'>
                <Col lg={6} md={6} sm={12}>
                <img className='circleImg' src="https://img.magnific.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?semt=ais_hybrid&w=740&q=80" />
                <h1 className='reviewName' >Jackma</h1>
                    <p className='reviewDescription' >Elias Voss is a freelance backend developer and accidental sysadmin who types faster than he thinks — which is saying something, because his brain runs on caffeine and half-baked ideas.</p>
                
                </Col>
            </Row>
            </div>



            <div>
            <Row className='text-center justify-content-center'>
                <Col lg={6} md={6} sm={12}>
                <img className='circleImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPnmScIbPMRr8-o2HrJmFhYH1qpEttHt0cg&s" />
                <h1 className='reviewName' >Elaveen</h1>
                    <p className='reviewDescription' >Elias Voss is a freelance backend developer and accidental sysadmin who types faster than he thinks — which is saying something, because his brain runs on caffeine and half-baked ideas.</p>
                
                </Col>
            </Row>
            </div>

            </Slider>
        </Container>

      </Fragment>
    )
  }
}

export default ClientReview
