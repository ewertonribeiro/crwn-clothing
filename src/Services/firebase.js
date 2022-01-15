import {initializeApp} from 'firebase/app';
import {getAuth , GoogleAuthProvider , signInWithPopup , signOut} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAiL0lneFk9ck7bDjn0TKlJPFLD72vaPNQ",
  authDomain: "crwn-clothing-c80be.firebaseapp.com",
  projectId: "crwn-clothing-c80be",
  storageBucket: "crwn-clothing-c80be.appspot.com",
  messagingSenderId: "763231334239",
  appId: "1:763231334239:web:97510b94b1b88a6b8290ea",
  measurementId: "G-FX5BTQBT74"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();



export {app , auth , provider , signInWithPopup , signOut}
