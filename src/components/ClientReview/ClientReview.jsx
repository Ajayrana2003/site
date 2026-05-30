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
                <img className='circleImg' src="data:image/jpeg;base64,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" />
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
