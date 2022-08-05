import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import Users from './components/Users';
import UsersForm from './components/UsersForm';
import './App.css';

class App extends Component {
 
 constructor(props) {
  super();
  this.state ={
    users: [
      {name:"Frimp Fos", email: "frimp@gmail.com", gen: 15},
      {name:"Enoch Jon", email: "enoch@gmail.com", gen: 18},
      {name:"Sun Confi", email: "sunny@gmail.com", gen: 22}
    ]
  }
}

 addNewUser=(user)=>{
  this.setState({
    users: [...this.state.users,user]
  })
  
 }

 render(){ 
    return (
      <>
        <Container fluid style={{marginTop: "2rem"}}>
          <Row>
            <Col md="4">
             <UsersForm addUser ={this.addNewUser}/>
            </Col>
            <Col>
             <Users usersData={this.state.users}/>
            </Col>
          </Row>
        </Container>
      </>
    );
  } 
}


export default App;
