import {v4 as uuid} from "uuid";

let initialState = {
  users: [
  {name:"Frimp Fos", email: "frimp@gmail.com", gen: 15, id: uuid(),},
  {name:"Enoch Jon", email: "enoch@gmail.com", gen: 18, id: uuid(),},
],
};



let usersReducer =(state=initialState, action)=>{
	switch (action.type) {
    case "ADD_USER":
      return {...state, users: [...state.users, action.payload] };

      default:
        return state;
      }     
};



export default usersReducer;