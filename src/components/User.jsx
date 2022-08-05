import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const User = (props) => {
  return (
    <Col md="4" style={{marginBottom: "1rem"}}>  
      <Card style={{backgroundColor:"purple", color:"white"}}>
        <Card.Body>
          <Card.Title>{props.userInfo.name}</Card.Title>
          <Card.Text>
            <p>Email: {props.userInfo.email}</p>
            <p>Gen: {props.userInfo.gen}</p>
          </Card.Text>
          <Button style={{width: "75px"}} href="#" variant="primary">Edit</Button>
          <Button style={{marginLeft:"10px"}}href="#" variant="danger">Delete</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default User;