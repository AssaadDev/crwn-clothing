import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const conf = {
  apiKey: "AIzaSyDkiJrLpgBHeQAPXa3DxIyIa5auaXk1KB8",
  authDomain: "crwn-db-ffd66.firebaseapp.com",
  projectId: "crwn-db-ffd66",
  storageBucket: "crwn-db-ffd66.appspot.com",
  messagingSenderId: "475219254355",
  appId: "1:475219254355:web:17ff29a1e8c0f4b01d3aa6",
  measurementId: "G-7NL8EHH39V",
};

export const creatUserProfDoc = async (userAuth, otherData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const checkUser = await userRef.get();

  if (!checkUser.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherData,
      });
    } catch (error) {
      console.log("error making user, ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(conf); // ???

export const auth = firebase.auth(); // autorizacija potrebna
export const firestore = firebase.firestore(); //mjesto u 'bazi'

const provider = new firebase.auth.GoogleAuthProvider(); // odabir provajdera
//pomocu kojeg cemo raditi autorizaciju korisnika i login
// tj. pomocu kojeg provajdera cemo se loginovati
provider.setCustomParameters({ prompt: "select_account" }); // dati  mogucnost korisniku da
// odabere accout odabranog provajdera
export const signInWithGoogle = () => auth.signInWithPopup(provider); // autoririzacija i
// otvoriti novi prozor  za odabri profila datog provajdera

export default firebase;
