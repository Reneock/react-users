export const addUser =(newUser)=>{
  return{
    type:"ADD_USER",
    payload:newUser
  }
}

export const reduxDeleteUser = (id) =>{
  return{
    type:"DELETE_USER",
    payload:id
  }
}

export const reduxEditUser = (updatedInfo) =>{
  return{
    type:"EDIT_USER",
    payload:{updatedInfo}
  }
}