  
const initState = {
  comments: [
   
  ],
};

const commentsReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_COMMENTS":   
      return state;
      case "CREATE_COMMENTS_ERROR":
        return state;
        default:
          return state; 
  }
};

export default commentsReducer;