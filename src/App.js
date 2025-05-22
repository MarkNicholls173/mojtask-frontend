// Import React
import React from 'react';

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import './App.css';

// Import from react-router-dom
import {
  BrowserRouter as Router, Routes,
  Route, Link
} from "react-router-dom";

// Import React Components
import CreateMojTask from './Components/create-mojtask.component';
import EditMojTask from './Components/edit-mojtask.component';
import MojTaskList from './Components/mojtask-list.component';


// App Component
const App = () => {
  return (
      <Router>
          <div className="App">
              <header className="App-header">
                  <Navbar bg="dark" variant="dark">
                      <Container>
                          <Navbar.Brand>
                              <Link to={"/mojtask-list"}
                                  className="nav-link">
                                  Moj Tasks App
                              </Link>
                          </Navbar.Brand>

                          <Nav className="justify-content-end">
                              <Nav>
                                  <Link to={"/create-mojtask"}
                                      className="nav-link">
                                      Create Task
                                  </Link>
                              </Nav>

                              <Nav>
                                  <Link to={"/mojtask-list"}
                                      className="nav-link">
                                      Task List
                                  </Link>
                              </Nav>
                          </Nav>
                      </Container>
                  </Navbar>
              </header>

              <Container>
                  <Row>
                      <Col md={12}>
                          <div className="wrapper">
                              <Routes>
                                  <Route path="/" element={<MojTaskList />} />
                                  <Route path="/create-mojtask" element={<CreateMojTask />} />
                                  <Route path="/edit-mojtask/:id" element={<EditMojTask />} />
                                  <Route path="/mojtask-list" element={<MojTaskList />} />
                              </Routes>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </div>
      </Router>
  );
};

export default App;
