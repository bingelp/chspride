import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyA7X1TYLLAajijpEIsiE8FMN2PnBqeqSdE",
    authDomain: "charleston-pride.firebaseapp.com",
    databaseURL: "https://charleston-pride.firebaseio.com",
    projectId: "charleston-pride",
    storageBucket: "charleston-pride.appspot.com",
    messagingSenderId: "749707095230"
};
firebase.initializeApp(config);
export default firebase;
