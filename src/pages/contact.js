import React from 'react';
// import { Container, Row , Col  } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { contactConfig } from '../pages/content_option';
import { Container, Row, Col } from "reactstrap";
const Contact = () => {
return (
	<div className='Contact'
	style={{
		// display: 'flex',
		// flexDirection: 'column',
		// justifyContent: 'center',
		// alignItems: 'center',
		height: '100vh',
        
	}}
	>

	<Container> 
        <Row className='mb-5 mt-3'>
            <Col lg='8'>
                <h1 className='display-4 mb-4'>
                    Contact Me
                </h1>
            </Col>
        </Row>

        <Row className='sec_sp'>
            <Col lg='5' className='mb-5'>
                <h3 className='color_sec py-4'> Get in Touch </h3>
                <address> 
                    <strong> Email: Codechefadgitmchapter@gmail.com </strong>
                    <br />
                    <br />
                    <p>
                        <strong> Phone No. 91(11) 49905900-99 </strong>
                    </p>
                </address>
                <p> {contactConfig.description} </p>
            </Col>
            <Col lg='7' className='d-flex align-items-center'>
                <form className='contact__form w-100'>
                    <Row>
                        <Col lg='6' className='form-group'>
                            <input
                            className='form-control'
                            id='name'
                            name='name' 
                            placeholder='Name'
                            type="text"
                            
                            />
                        </Col>

                        <Col lg='6' className='form-group'>
                            <input
                            className='form-control rounded-0'
                            id='email'
                            name='email' 
                            placeholder='Email'
                            type="email"
                            
                            />
                        </Col>
                    </Row>
                    <textarea 
                             className='form-control rounded-0' 
                             id='message' 
                             name='message' 
                             placeholder='Message' 
                             rows='5'> 
                    </textarea>
                    <br />
                    <Row>
                        <Col lg='12' className='form-group'>
                            <button className='btn ac_btn' type='submit'>
                                Send 
                            </button>
                        </Col>
                    </Row>
                    </form>     
            </Col> 
        </Row>
    </Container>


    </div> 
);
};

export default Contact;
