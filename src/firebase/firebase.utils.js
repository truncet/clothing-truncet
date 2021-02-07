import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyAa-xHmeTVBkLh6Qq5vZFjbJQ4gIfIp0bs",
    authDomain: "crwn-clothing-35ae5.firebaseapp.com",
    projectId: "crwn-clothing-35ae5",
    storageBucket: "crwn-clothing-35ae5.appspot.com",
    messagingSenderId: "564503668518",
    appId: "1:564503668518:web:f928f4a104c883eeae03e7"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth){
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot =  await userRef.get();

    if (!snapshot.exists){
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error){
            console.log("error was seen here", error.message);
        }
    }
    return userRef;

}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => {
    return (
        auth.signInWithPopup(provider)
    );
};

export default firebase;
