import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
//import firebase from 'firebase/app';
//import 'firebase/auth';
//import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCKiuaEusVY40H1XTdwdsRHlJDA5IPk_f0",
  authDomain: "kride-b2e47.firebaseapp.com",
  projectId: "kride-b2e47",
  storageBucket: "kride-b2e47.appspot.com",
  messagingSenderId: "5147946173",
  appId: "1:5147946173:web:e07a69cf3a7ce7feb71bd4",
  measurementId: "G-N43FYNGZVP",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();

{
  /*export const createUserDocument = async (user, additionalData) => {
    if (!user) return;

    const userRef = firestore.doc(`UserProfile/${user.uid}`);

    const snapshot = await userRef.get();
    console.log(snapshot.exists);
    if (!snapshot.exists) {
        const { email } = user;
        const { fname, lname, phonenumber, license, car } = additionalData;

        try {
            userRef.set({
                fname,
                lname,
                email,
                phonenumber,
                license,
                car,
                createdAt: new Date()
            });

        } catch (error) {
            console.log('Error in creating user', error);
        }
    }
}
*/
}

//export default fire2;
