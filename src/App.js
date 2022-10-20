import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Users from "./components/Users";
import UsersForm from "./components/UsersForm";
import "./App.css";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "./firebase/Config";
import {addUser} from "./actions/usersActions";
import {useDispatch} from "react-redux";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    //the readData function can be ignored in this instance
    const readData = async () => {
      const q = query(collection(db, "users"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
          users.push(doc.data());
        });
        dispatch(addUser(users));
        console.log(users);
      });
    };
    readData();
  }, []);

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
