import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCb9iT0r1KECJrgugc5UgWDrbtzjLBcXLM",
  authDomain: "money-drop-8b78e.firebaseapp.com",
  databaseURL: "https://money-drop-8b78e-default-rtdb.firebaseio.com",
  projectId: "money-drop-8b78e",
  storageBucket: "money-drop-8b78e.appspot.com",
  messagingSenderId: "407047283748",
  appId: "1:407047283748:web:062e2cbe42ab466cb024b1",
  measurementId: "G-VSSDGE6SCV"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app