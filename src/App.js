import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import Users from './components/Users';
import UsersForm from './components/UsersForm';
import './App.css';

class App extends Component {

 render(){ 
    return (
      <>
        <Container fluid style={{marginTop: "2rem"}}>
          <Row>
            <Col md="4">
             <UsersForm />
            </Col>
            <Col>
             <Users/>
            </Col>
          </Row>
        </Container>
      </>
    );
  } 
}


export default App;
