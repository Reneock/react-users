import React from 'react';
import { Container, Row } from 'react-bootstrap';
import User from './User';

const Users = (props) => {
  return (
      <Container>
        <Row>
          {props.usersData.map((user, index) =>
           { return <User userInfo={user} key={index}/>}
           )
          }
        </Row>
      </Container>
  );
}

export default Users;