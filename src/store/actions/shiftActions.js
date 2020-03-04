export const updateShift = (shift) => {
    return (dispatch,  getState, {getFirebase, getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
  
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
  
      firestore.collection('shift').set({
        ...shift,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      }).then(() => {
        dispatch({ type: 'UPDATE_SHIFT', shift});
      }).catch((err) => {
        dispatch({ type: 'UPDATE_SHIFT', err });
      })
    }
  };

  
/*   export const createShift = (shift) => {
    return (dispatch,  getState, {getFirebase, getFirestore}) => {

      
      console.log(`try to create a shift ${shift}`)

      // make async call to database
      const firestore = getFirestore();
      const authorId = getState().firebase.auth.uid;
      const users = [ `users/${authorId}`]; 


      firestore.collection('shift').add({
        ...shift,
      users : users, 
      }).then(() => {
        dispatch({ type: 'CREATE_SHIFT', shift});
      }).catch((err) => {
        dispatch({ type: 'CREATE_SHIFT', err });
      })
    }
  }; */

  export const createShift = (shift) => {
    return (dispatch,  getState, {getFirebase, getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
  
      const authorId = getState().firebase.auth.uid;
      let userRef = firestore.collection("users").doc(authorId);
      console.log(userRef)
    //  const authorPath = firestore.collection("users").document(authorId);
      console.log(firestore)

      console.log(shift.date_start);
      const date_start = new Date(shift.date_start);
      const date_end = new Date(shift.date_end);

     // console.log(authorPath)
      var users = [];
      users.push(userRef)
  
      firestore.collection('shifts').add({
        ...shift,
        users: users,
        date_start: date_start,
        date_end: date_end,

      }).then(() => {
        dispatch({ type: 'CREATE_SHIFT', shift});
      }).catch((err) => {
        dispatch({ type: 'CREATE_SHIFT', err });
      })
    }
  };


  export const registerShift = (shift) => {
    return (dispatch,  getState, {getFirebase, getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
  
      const authorId = getState().firebase.auth.uid;
      let userRef = firestore.collection("users").doc(authorId);
      let shiftRef = firestore.collection("shifts").doc(shift);

     // console.log(authorPath)
      var users = shift.users;
      users.push(userRef)
  
      firestore.collection('shifts').add({
        ...shift,
        users: users,
      }).then(() => {
        dispatch({ type: 'CREATE_SHIFT', shift});
      }).catch((err) => {
        dispatch({ type: 'CREATE_SHIFT', err });
      })
    }
  };