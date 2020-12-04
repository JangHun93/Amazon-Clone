// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAkP6rAd9vi3fVxVHSlpD-_9nYoBby8Uhw',
	authDomain: 'challenge-e9967.firebaseapp.com',
	databaseURL: 'https://challenge-e9967.firebaseio.com',
	projectId: 'challenge-e9967',
	storageBucket: 'challenge-e9967.appspot.com',
	messagingSenderId: '1053373124004',
	appId: '1:1053373124004:web:c8b2af3172ae1697db8531',
	measurementId: 'G-FG0CSQ5ESG'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
