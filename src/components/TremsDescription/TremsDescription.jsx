import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

 class TremsDescription extends Component {
  render() {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                                    <h1 className='serviceName'>Trems and Condition</h1>
                                    <hr></hr>
                    
                                    <p className='serviceDescription'>
                    
                                        
                    
                    <b>
                                        1. Information We Collect<br></br>
                    We may collect personal information including but not limited to: your name, email address, phone number, mailing address, payment details, IP address, browser type, device information, and browsing behavior on our website.<br></br>
                    
                    2. How We Use Your Information
                    Your data is used to:
                    
                    Provide, operate, and maintain our services
                    
                    Process transactions and send confirmations
                    
                    Respond to your comments, questions, and support requests
                    
                    Send periodic emails, updates, and promotional materials (only with your consent)
                    
                    Improve our website functionality and user experience
                    
                    Analyze usage patterns and prevent fraud<br></br><br></br>
                    
                    3. Data Storage & Security
                    We implement industry-standard security measures including encryption, firewalls, and secure socket layer (SSL) technology to protect your personal information. However, no method of transmission over the internet is 100% secure.<br></br><br></br>
                    
                    4. Third-Party Sharing
                    We do not sell, trade, or rent your personal information to others. We may share data with trusted third-party service providers who assist in operating our website (such as hosting, payment processing, and analytics), provided they agree to keep your information confidential.<br></br><br></br>
                    
                    5. Cookies & Tracking Technologies
                    Our website uses cookies to enhance your browsing experience. You may disable cookies through your browser settings, though some website features may not function properly.<br></br><br></br>
                    
                    6. Your Legal Rights
                    Depending on your location, you may have the right to:
                    
                    Access, update, or delete your personal data
                    
                    Withdraw consent at any time
                    
                    Object to data processing
                    
                    Request data portability
                    
                    Lodge a complaint with a supervisory authority<br></br><br></br>
                    
                    7. Data Retention
                    We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, or as required by law.
                    </b>
                    
                    
                    
                    
                    
                    
                    
                    
                    
                                    </p>
                                    
                                    </Col>
                </Row>
            </Container>
        </Fragment>
     
    )
  }
}

export default TremsDescription
