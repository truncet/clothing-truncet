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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd)=> {
    const collectionRef =   firestore.collection(collectionKey);
    const batch =  firestore.batch();

    objectsToAdd.forEach(element => {
       const newDocRef = collectionRef.doc();
       batch.set(newDocRef, element); 
    });
    return await batch.commit();
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => {
    return (
        auth.signInWithPopup(provider)
    );
};

export const converCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title, 
            items,
        }
    });
    console.log(transformedCollection);
    return transformedCollection.reduce((accumulator, collection)=> {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

export default firebase;
