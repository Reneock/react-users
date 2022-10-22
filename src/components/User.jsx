import React, { useState } from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import EditForm from './EditForm';
import { connect } from 'react-redux';
import { deleteUser } from '../actions/usersActions';
import {doc, deleteDoc} from 'firebase/firestore';
import { db } from '../firebase/Config';

const User = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async (e) => {
    e.preventDefault();
    
    try{
      await deleteDoc(doc(db, "users", props.userInfo.id));
    }
    catch(e){
      console.log(e)
    }
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
        <Card style={{ backgroundColor: "#ff5ccd", color: "white" }}>
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

const mapDispatchToProps = {deleteUser,}

export default connect (null, mapDispatchToProps) (User);
