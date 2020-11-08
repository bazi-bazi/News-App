const initialState = {
  authError: null,
  logedIn: true
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
      case "LOGIN_ERROR":

          return {
              ...state,
              authError: "Login error"
          }
      case "LOGIN_SUCCESS":
          return {
              ...state,
              authError: null,
              logedIn: false
          }
      case "SIGNOUT_SUCCESS":

          return state; 
      case "SIGNUP_SUCCESS":

          return {
              ...state,
              authError: null,
              logedIn: false
          }   
      case "SIGNUP_ERROR": 
      return {
          ...state,
          authError: action.err.message
      } 
      default:
          return state;    
  }
  
}

export default authReducer;