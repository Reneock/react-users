import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import Users from './components/Users';
import UsersForm from './components/UsersForm';
import './App.css';

class App extends Component {
 
 constructor(props) {
  super();
  this.state = { users: [] }
}

 addNewUser=(user)=>{
  user.id = Math.random().toString()
  this.setState({
    users: [...this.state.users, user]
  })
 }

 deleteUser = (id) => {
  let undeletedUsers = this.state.users.filter ((user) => user.id !== id);
  this.setState({
    users: undeletedUsers
  })
 }

 editForm = (id, updatedUser) => {
  this.setState({
    users: this.state.users.map(user => user.id === id ? updatedUser : user)
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
             <Users usersData={this.state.users} deleteUser={this.deleteUser} editForm={this.editForm}/>
            </Col>
          </Row>
        </Container>
      </>
    );
  } 
}


export default App;
