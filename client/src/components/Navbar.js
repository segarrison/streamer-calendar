import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './Signup';
import LoginForm from './Login';
import '../components/navbar.css';
import '../fonts/Audiowide/Audiowide-Regular.ttf';


import Auth from '../utils/auth';
<link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet"></link>;

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/' style={{color: "#6441a5", fontFamily: "'Audiowide', cursive"}}>
            Stream.line
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              {/* <Nav.Link as={Link} to='/'>
                
              </Nav.Link> */}
              {/* if user is logged in show events and logout */}
              {Auth.loggedIn() ? (
                <>
                  {/* <Nav.Link as={Link} to='/somewhere else'> */}
                    {/* something cool!  */}
                  {/* </Nav.Link> */}
                  <Nav.Link onClick={Auth.logout} style={{color: "#6441a5"}}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)} style={{color: "#6441a5"}}>Login/Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  ); 
};

export default AppNavbar;