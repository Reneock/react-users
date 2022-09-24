export const addUser =(newUser)=>{
  return{
    type:"ADD_USER",
    payload:newUser
  }
}

export const editUser = (updatedUser) =>{
  return{
    type:"EDIT_USER",
    payload:{updatedUser}
  }
}

export const deleteUser = (id) =>{
  return{
    type:"DELETE_USER",
    payload:id
  }
}

