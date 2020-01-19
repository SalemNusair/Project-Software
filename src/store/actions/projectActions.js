export const createProject = (project) => {
  //dipatch will dispatch action to recducer
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //get the data from firebase to firestore obj
    const firestore = getFirestore();
    //we used getState to get the values from database/state
    const profile = getState().firebase.profile;
    const auth = getState().firebase.auth;
    //add the data to firestore collection project
    firestore
      .collection("projects")
      .add({
        ...project,
        autherFirstName: profile.firstName,
        autherLastName: profile.lastName,
        autherId: auth.uid,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR" }, err);
      });
    //make async call to database
  };
};

//you should install: npm install react-redux-firebase redux-firebase
//this is to link firebase with our store and react with firebase
