import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { auth } from "../firebase/Config";
import IonIcon from "@reacticons/ionicons";
import {Link, useNavigate} from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      navigate("/", {replace:true})
      console.log(user);
    } catch (e) {
      console.log(e);
    }
    setEmail("");
    setPassword("");
  };

  const handleGoogle = async(e)=>{
    e.preventDefault();
    try{
      const user = await signInWithPopup(auth, provider);
      console.log(user);
    }
    catch(e)
    {
      console.log(e);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <Form style={{ backgroundColor: "#800000", color: "white", border: "2px solid #800000", marginTop: "3rem", width: "450px", marginLeft: "450px", borderRadius: "8px"}} >
      <h2 style={{paddingLeft: "100px", paddingTop: "15px"}}>Welcome Back!</h2>
      <h5 style={{paddingLeft: "50px"}}>Login to your RENESERVES account</h5>
      <br/>
      <Button variant="info" onClick={handleGoogle} style={{marginLeft: "200px"}}>
        <IonIcon name="logo-google"/>
      </Button>
      <br/><br/>
      <p style={{paddingLeft: "150px"}}>or use your account</p>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{paddingLeft: "30px"}}>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{marginLeft: "30px", width: "390px"}}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{paddingLeft: "30px"}}>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{marginLeft: "30px", width: "390px"}}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleLogin} style={{marginLeft: "180px", marginBottom: "10px"}}>
        SIGN IN
      </Button><br/>
      <p style={{paddingLeft: "70px"}}>Don't have an Account? <Link to="/register">Register Here</Link></p>
    </Form>
  )
}

export default Login;
