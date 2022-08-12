import React from 'react';
import { Container, Row } from 'react-bootstrap';
import User from './User';

const Users = (props) => {
  return (
      <Container>
        <Row>
          {props.usersData.map((user) =>
           { return <User userInfo={user} key={user.id} deleteUser={props.deleteUser} editForm={props.editForm}/>}
           )
          }
        </Row>
      </Container>
  );
}

export default Users;