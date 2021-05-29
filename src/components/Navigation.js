import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import { LinkContainer } from 'react-router-bootstrap'; // It wraps the nav.link tags to keep the styling and keeping the funcionality of the Links from react-router-dom
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Show from './show/Show';

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand>Simple Crud</Navbar.Brand>
                        <BrowserRouter>
                            <Nav className="me-auto">
                                <LinkContainer to="/insert">
                                    <Nav.Link>Insert data</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/edit">
                                    <Nav.Link>Edit data</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/show">
                                    <Nav.Link>Show data</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/delete">
                                    <Nav.Link>Delete data</Nav.Link>
                                </LinkContainer>
                            </Nav>
                                <Switch>
                                    <Route path="/insert">
                                            
                                    </Route>
                                    <Route path="/edit">
                                        
                                    </Route>
                                    <Route path="/show" component={Show}>
                                    </Route>
                                    <Route path="/delete">
                                        
                                    </Route>
                                </Switch>
                        </BrowserRouter>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;