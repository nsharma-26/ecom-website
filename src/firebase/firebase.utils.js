import firebase from 'firebase/app';
import 'firebase/firestore';//database
import 'firebase/auth';//auth

const config = {
    apiKey: "AIzaSyCMZRCWMqOWWpMnt9xGsO1LMqUDCjng2Jc",
    authDomain: "ecom-web-24e19.firebaseapp.com",
    projectId: "ecom-web-24e19",
    storageBucket: "ecom-web-24e19.appspot.com",
    messagingSenderId: "650468623294",
    appId: "1:650468623294:web:87b6e7de83e704b80b2fef",
    measurementId: "G-X5DNRMM0TG"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();
      console.log(snapShot);
      //console.log(firestore.doc('users/nehapgi019'));
      if(!snapShot.exists){
          const  { displayName, email} = userAuth;
          const createAt = new Date();

          try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
          } catch(error){
            console.log('error creating user', error.message);
          }
      }
      return userRef;
  }
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore  = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
