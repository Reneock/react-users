import React from 'react';
import { Container, Row } from 'react-bootstrap';
import User from './User';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
    return {
      usersData: state.users,
    };
};

export default connect(mapStateToProps) (Users);