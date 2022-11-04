import React, { useState } from "react";
import { Button,  Form } from "react-bootstrap";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/Config";
import IonIcon from "@reacticons/ionicons";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login", { replace: true });
      console.log(user);
    } catch (e) {
      console.log(e);
    }
    setEmail("");
    setPassword("");
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithPopup(auth, provider);
      console.log(user);
    } catch (e) {
      console.log(e);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{background:"#800000"}}>
      <Form
        style={{
          backgroundColor: "white",
          color: "#800000",
          border: "2px solid white",
          marginTop: "3rem",
          width: "450px",
          marginLeft: "440px",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ paddingLeft: "100px", paddingTop: "15px" }}>
          Come Onboard!
        </h2>
        <h5 style={{ paddingLeft: "60px" }}>Create your RENESERVES account</h5>
        <br />
        <Button
          variant="info"
          onClick={handleGoogle}
          style={{ marginLeft: "200px" }}
        >
          <IonIcon name="logo-google" />
        </Button>
        <br />
        <br />
        <p style={{ paddingLeft: "130px" }}>or use email registration</p>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ paddingLeft: "30px" }}>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginLeft: "30px", width: "390px" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ paddingLeft: "30px" }}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginLeft: "30px", width: "390px" }}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={handleRegister}
          style={{ marginLeft: "180px", marginBottom: "10px" }}
        >
          SIGN UP
        </Button>
        <br />
        <p style={{ paddingLeft: "110px" }}>
          Already have an Account? <Link to="/login">Sign In</Link>
        </p>
      </Form>
    </div>
  );
}

export default Register;
