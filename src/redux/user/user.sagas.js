import {takeLatest, put, all,call} from 'redux-saga/effects';
import UserActionTypes from './user.types';
import {googleProvider, auth, createUserProfileDocument, getCurrentUser} from './../../firebase/firebase.utils';

import {signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpSuccess, signUpFailure} from './user.actions';


export function* getSnapshotFromUserRef(userRef, additionalData){
    try{
    const user = yield call(createUserProfileDocument, userRef, additionalData);
    const userSnapshot = yield user.get();
    yield put(
            signInSuccess({id: userSnapshot.id, ...userSnapshot.data()})
        );
    }catch(error){
        yield put(signInFailure(error));
    }
}

export function* signInWithGoogle() {
    try{
        const userRef = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserRef(userRef);
    }catch (error){
        yield put(signInFailure(error));
    }
}

export function* signInWithEmail({payload: {email, password}}){
    try{
        const userRef = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserRef(userRef);
    }catch (error){
        yield put(signInFailure(error));
    }
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return ;
        yield getSnapshotFromUserRef(userAuth); 

    }catch(error){
        yield put (signInFailure(error));
    }
}

export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    }catch(error){
        yield put(signOutFailure(error));
    }
}

export function* signUp({payload: {email, password, displayName}}){
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(
            email, password
        );
        yield put(signUpSuccess({user, additionalData:{displayName}}))
    }catch(error){
        yield put(signUpFailure(error))
    }
}

export function* signInAfterSignUp({payload: {user, additionalData}}){
    yield getSnapshotFromUserRef(user, additionalData);
}

export function* onCheckUserSession(){
    yield takeLatest (UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}
export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp );
}

export function* onSignUpSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signInWithEmail);
}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* userSagas(){
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUserSession), call(onSignOutStart), call(onSignUpStart), call(onSignUpSuccess)]);
}