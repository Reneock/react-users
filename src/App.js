import React, { useEffect } from "react";
import "./App.css";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db, auth } from "./firebase/Config";
import {addUser} from "./actions/usersActions";
import {useDispatch} from "react-redux";
import Routing from "./Routing";
import {LogInUser} from "./actions/authAction";
import {onAuthStateChanged} from "firebase/auth";


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

  useEffect (()=>{
    onAuthStateChanged(auth, (user)=>{

      if (user)dispatch(LogInUser(user));
      else {dispatch(LogInUser(null));}

    })
  }, [dispatch]);

  return (
    <>
      <Routing/>
    </>
  );
}


export default App;
