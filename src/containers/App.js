import React, { Component }from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import { LinkContainer } from 'react-router-bootstrap'; // It wraps the nav.link tags to keep the styling and keeping the funcionality of the Links from react-router-dom
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Show from '../components/show/Show.jsx';
import Insert from '../components/insert/Insert';
import Edit from '../components/edit/Edit';
import Del from '../components/delete/Del';

class App extends Component {
  constructor(){
    super();
    this.state = {
      jokes: [],
    }
  }

  render(){
    return (
      <Router>
        <div className="bg-dark container-fluid">
          <div className="App">
            <h1 className="title">Welcome to simple crud</h1>
          </div>
          <Navbar bg="dark" variant="dark">
            <Container>  
              <LinkContainer to="/">
                <Nav.Link>
                  <Navbar.Brand>Simple Crud</Navbar.Brand>
                </Nav.Link>
              </LinkContainer>
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
            </Container>
          </Navbar>
        </div>
        <div>
          <Container>
            <Switch>
              <Route path="/insert" component={Insert}></Route>
              <Route path="/edit">
                <Edit />
              </Route>
              <Route path="/show" component={Show}></Route>
              <Route path="/delete">
                <Del />
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;