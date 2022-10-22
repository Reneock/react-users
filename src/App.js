import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Users from "./components/Users";
import UsersForm from "./components/UsersForm";
import "./App.css";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "./firebase/Config";
import {addUser} from "./actions/usersActions";
import {useDispatch} from "react-redux";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    
    const readData = async () => {
      //orderBy helps with arrangement of data eg timestamp, name in an asc or desc manner
      const q = query(collection(db, "users"), orderBy("name", "asc"));
      onSnapshot(q, (querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
          users.push(doc.data());
        });
        dispatch(addUser(users));
        console.log(users);
      });
    };
    readData();
  }, [dispatch]);

  return (
    <>
      <Container fluid style={{ marginTop: "2rem" }}>
        <Row>
          <Col md="4">
            <UsersForm />
          </Col>
          <Col>
            <Users />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
