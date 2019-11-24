export const createProject = (project) => {
  return (dispatch,  getState, {getFirebase, getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();

    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date(),
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project});
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT', err });
    })
  }
};


export const deleteProject = (project, projectID) => {
  return (dispatch,  getState, {getFirebase, getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();

    console.log(projectID);
    firestore.collection('projects').doc(projectID).delete().then(() => {
      dispatch({ type: 'DELETE_PROJECT', project});
    }).catch((err) => {
      dispatch({ type: 'DELETE_PROJECT', err });
    })
  }
};
