import {v4 as uuid} from "uuid";

let initialState = {
  users: [
    {name:"Frimp Fos", email: "frimp@gmail.com", gen: 15, id: uuid(),},
    {name:"Enoch Jon", email: "enoch@gmail.com", gen: 18, id: uuid(),},
    {name:"Sun Confi", email: "sunny@gmail.com", gen: 22, id: uuid(),},
  ],
};



let usersReducer =(state=initialState, action)=>{
	switch (action.type) {
    case "ADD_USER":
      return {...state, users: [...state.users, action.payload] };

    case "DELETE_USER":
      const unDeletedUsers = state.users.filter ((user)=>user.id!==action.payload)
      return {...state, users:unDeletedUsers}

    case "EDIT_USER":
      const updatedUserInfo = state.users.map ((user)=>{
        if (user.id===action.payload.updatedInfo.id){
          return action.payload.updatedInfo;
        }
        else{return user}
      })

      return {...state, users:updatedUserInfo}

      default:
        return state;
      }     
};



export default usersReducer;