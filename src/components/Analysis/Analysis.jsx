import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
 class Analysis extends Component {

    constructor(){
        super();
        this.state={
            data:[
                {Techonology:'PHP', Projects:100},
                {Techonology:'MySquil', Projects:90},
                {Techonology:'Laravel', Projects:95},
                {Techonology:'React', Projects:85},
                {Techonology:'Opencart', Projects:80},
                {Techonology:'Vue Js', Projects:70},
                {Techonology:'Django', Projects:60},
                {Techonology:'JavaScript', Projects:100}
            ]
        }
    }






  render() {
    var blue = "#051b35"
    return (
        <Fragment>
            <Container className='text-center'>
                <h1 className='serviceMainTitle'>TECHNOLOGY USED</h1>
            <div className='bottom'></div>
                <Row>
                    <Col  lg={6} md={12} sm={12} style={{ height:'400px'}}>
                    <ResponsiveContainer width="100%" height="100%" >
                    <BarChart width={100} height={300} data={this.state.data}>
                       <XAxis dataKey="Techonology" />
                       <Tooltip></Tooltip>

                        
                        <Bar dataKey="Projects" fill={blue}> </Bar>

                    </BarChart>
                    </ResponsiveContainer>
                    
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                    <p className="text-justify ServiceDescription">Technology has changed the way people live, work, and communicate in modern society. From smartphones and laptops to artificial intelligence and cloud computing, technology is now a major part of daily life.<br></br><br></br> 
                    
                    
                    Many companies use advanced software systems to manage data, improve customer service, and increase productivity. Students also benefit from technology through online learning platforms, virtual classrooms, and digital study materials. In the healthcare industry, modern machines and applications help doctors diagnose diseases more accurately and quickly. Social media platforms and messaging apps allow people to stay connected with friends and family from anywhere in the world.
                    
                    <br></br><br></br> As technology continues to grow, new innovations are making life easier, faster, and more efficient for everyone.</p>
                    
                    </Col>

                </Row>
            </Container>
        </Fragment>
      
    )
  }
}

export default Analysis
