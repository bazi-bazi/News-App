export const createComments = (comments) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection("comments").add({
      ...comments,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: "CREATE_COMMRNTS", comments });
    }).catch((err) => {
      dispatch({ type: "CREATE_COMMENTS_ERROR", err});
    })
    
    
  };
};