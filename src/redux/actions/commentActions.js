export const createComments = (comment) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
    .collection("comments")
    .add({
      ...comment,
      authorName: profile.name,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: "CREATE_COMMENTS", comment });
    }).catch((err) => {
      dispatch({ type: "CREATE_COMMENTS_ERROR", err});
    })  
    
  };
};

export const removeComments = (comment) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    firestore
      .collection("comments")
      .doc(comment.id)
      .delete()
      .then(() => {
        dispatch({
          type: "REMOVE_COMMENT",
        });
      })
      .catch((err) => {
        dispatch({
          type: "REMOVE_COMMENT_ERR",
          err,
        });
      });
  };
};