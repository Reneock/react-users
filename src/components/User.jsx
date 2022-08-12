import React, { useState } from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import EditForm from './EditForm';

const User = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userInfo.id);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <EditForm userInfo={props.userInfo} editForm={props.editForm} closeModal={handleClose}/> 
        </Modal.Body>
      </Modal>

      <Col md="4" style={{ marginBottom: "1rem" }}>
        <Card style={{ backgroundColor: "purple", color: "white" }}>
          <Card.Body>
            <Card.Title>{props.userInfo.name}</Card.Title>
            <Card.Text>
              <p>Email: {props.userInfo.email}</p>
              <p>Gen: {props.userInfo.gen}</p>
            </Card.Text>
            <Button style={{ width: "75px" }} href="#" variant="primary" onClick={handleShow} >Edit</Button>
            <Button style={{ marginLeft: "10px" }} href="#" variant="danger" onClick={handleDelete}>Delete</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default User;