let initialState = {
  logInUsers : null

}

const authReducer = (state = initialState, action)=>{
  switch(action.type) {
    case "ADD_LOGINUSER":
    return {...state, logInUsers: action.payload}

    default : return state
  }

}

export default authReducer;