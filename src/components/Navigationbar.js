import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import user from '../icons/user.svg'
import logo_cig from '../icons/logo_cig.png'

function Navigationbar(){
    return(
        <div>
            <Navbar expand="lg" className="bg-warning" sticky='top'>
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo_cig}
                            width="45"
                            height="35"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"/>
                    </Navbar.Brand>

                    

                    <Navbar.Collapse className="icons" style={{justifyContent:'end'}}>
                        <Nav>
                            <a href="/login">
                                <img src={user} alt='user'></img>
                            </a>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    )
}

export default Navigationbar