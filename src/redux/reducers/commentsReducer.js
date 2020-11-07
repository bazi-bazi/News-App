const initState = {
  comments: [
   
  ],
};

const commentsReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_COMMENT":
      console.log("create project", action.project);
      return state;
      case "CREATE_COMMENT_ERROR":
        console.log("create comment error", action.err);
        return state;
        default:
          return state; 
  }
};

export default commentsReducer;