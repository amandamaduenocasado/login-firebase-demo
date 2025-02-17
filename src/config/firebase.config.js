import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCPNuE0wxRG-wbKpHXSiF73ElUeMG7cRn4',
	authDomain: 'fir-demo-83a86.firebaseapp.com',
	projectId: 'fir-demo-83a86',
	storageBucket: 'fir-demo-83a86.firebasestorage.app',
	messagingSenderId: '518107157293',
	appId: '1:518107157293:web:747acd6ada5b4b7814f9a4'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);