import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBmyeGfL4bFsT4R4mTdCtk0L3n-tSbc52o",
  authDomain: "proyectom7-dbe26.firebaseapp.com",
  projectId: "proyectom7-dbe26",
  storageBucket: "proyectom7-dbe26.appspot.com",
  messagingSenderId: "268652718569",
  appId: "1:268652718569:web:0095f4366e712b20dbc378",
  measurementId: "G-6FQ2VRSFEE"
};

// Inicializar la aplicación de Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };
