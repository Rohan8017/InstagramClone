
import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import './component/Firebase';
// import Leftsidebar from './component/Leftsidebar';
import PrivateRoute from './component/PrivateRoute';
import Main from './component/Main';
// import { useNavigate } from 'react-router-dom';
const auth = getAuth();
// const storage = getStorage();
const provider = new GoogleAuthProvider();
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }
  signUp = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        // window.location.href=('/');
        updateProfile(user, {
          displayName: name, photoURL: 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg'
        }).then(() => {
          // Profile updated!
          // ...
          localStorage.setItem('user', JSON.stringify(user));
          // console.log(user);
        }).catch((error) => {
          // An error occurred
          // ...
          console.log(error);
        });
      })
  }
  logIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        // window.location.href = ('/');
      })
      .catch((err) => {
        const errorCode = err.code;
        console.log(errorCode);
      })
  }
  logOut = () => {
    signOut(auth).then(() => {
      window.location.href = "/login";
      localStorage.removeItem('user');
    })
  }
  loginwithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = ('/');
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login logIn={this.logIn} loginwithGoogle={this.loginwithGoogle} />}></Route>
            <Route path='/signup' element={<Signup signup={this.signUp} />}></Route>
            {/* <Route path='/leftsidebar' element={<Leftsidebar logOut={this.logOut} />}></Route> */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Main logOut={this.logOut} />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

