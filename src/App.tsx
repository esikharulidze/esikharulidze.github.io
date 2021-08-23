import React from "react";
import MyRouter from "routers/index";
import firebase from 'firebase'

// const firebaseConfig = {
//     apiKey: "AIzaSyDtN78JlDIkn2btREkrB7iVplCtEexL6mA",
//     authDomain: "animus-92a15.firebaseapp.com",
//     projectId: "animus-92a15",
//     storageBucket: "animus-92a15.appspot.com",
//     messagingSenderId: "553192900117",
//     appId: "1:553192900117:web:e8cade826dbd047e4af01c",
//     measurementId: "G-LWN2M1PJF9"
// }

// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

function App() {
  return (
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <MyRouter />
    </div>
  );
}

export default App;
