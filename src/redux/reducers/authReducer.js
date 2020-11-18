const initialState = {
  authError: null,
  logedIn: false,
  resetError: null
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
      case "RESET_PASSWORD_SUCCESS": 
      return {
          ...state,
          resetError: "Check your inbox for further instructions"
      } 
      case "RESET_PASSWORD_ERROR": 
      return {
          ...state,
          resetError: "Password reset error"
      } 
      default:
          return state;    
  }
  
}

export default authReducer;