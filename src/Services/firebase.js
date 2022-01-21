import {initializeApp} from 'firebase/app';
import {getAuth , GoogleAuthProvider , signInWithPopup , signOut , createUserWithEmailAndPassword , signInWithEmailAndPassword} from 'firebase/auth';


const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  projectId:process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGINF_SENDER_ID,
  appId:process.env.REACT_APP_APP_ID,
  measurementId:process.env.REACT_APP_MEASUREMENT_ID,
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();



export {app , auth , provider , signInWithPopup , signOut , createUserWithEmailAndPassword , signInWithEmailAndPassword}
