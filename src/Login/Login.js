// import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";
// import initializeAuthentication from '../Firebase/firebase.initialize';
// import { useState } from 'react';

// initializeAuthentication();

// const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();


// function Login() {
//     const [user, setUser] = useState({})
//     const auth = getAuth();
//     const handleGoogleSignIn = () => {

//         signInWithPopup(auth, googleProvider)
//             .then(result => {
//                 const { displayName, email, photoURL } = result.user;
//                 const loggedInUser = {
//                     name: displayName,
//                     email: email,
//                     photo: photoURL
//                 };
//                 setUser(loggedInUser);
//             })
//             .catch(error => {
//                 console.log(error.message);
//             })
//     }
//     const handleGithubSignIn = () => {

//         signInWithPopup(auth, githubProvider)
//             .then(result => {
//                 const { displayName, email, photoURL } = result.user;
//                 const loggedInUser = {
//                     name: displayName,
//                     email: email,
//                     photo: photoURL
//                 };
//                 setUser(loggedInUser);
//             })
//             .catch(error => {
//                 console.log(error.message);
//             })
//     }
//     const handleSignOut = () => {
//         signOut(auth)
//             .then(() => {
//                 setUser({});
//             })
//     }
//     const handleRegistration = e => {
//         e.preventDefault();
//     }
//     return (
//         <div className="App">
//             <h3>Please Resiter</h3>
//             <form onSubmit={handleRegistration}>
//                 <label htmlFor="email">Email</label>
//                 <input type="text" name="email" /><br />
//                 <label htmlFor="password">Password</label>
//                 <input type="password" name="password" /><br />
//                 <input type="submit" value="Register" />
//             </form>
//             <div>---------------------------</div>
//             <br /><br /><br />
//             {!user.name ?
//                 <div>
//                     <button onClick={handleGoogleSignIn}>Google Sign In </button>
//                     <button onClick={handleGithubSignIn}>Github SignIn</button>
//                 </div> :
//                 <button onClick={handleSignOut}>SignOut</button>}
//             <br />
//             {
//                 user.email && <div>
//                     <h2>Welcome {user.name}</h2>
//                     <p>I know your email: {user.email}</p>
//                     <img src={user.photo} alt="" />
//                 </div>
//             }
//         </div>
//     );
// }

// export default Login;
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import "./loginform.css";



const Login = () => {
    const { user, handleGoogleSignIn, handleGithubSignIn } = useFirebase();

    const handleRegistration = e => {
        e.preventDefault();
    }
    return (
        <div className="loginform m-5">
            <div className="mt-5">
                <h2>Login</h2>
                <form onSubmit={handleRegistration}>
                    <input type="email" name="" id="email" placeholder="Your Email">
                    </input>
                    <br />

                    <input type="password" name="" id="password" placeholder="Your Password"></input>
                    <br />
                    <input type="submit" Value="Submit" className="m-2"></input>
                </form>
                <p>new to AsthaCare?<Link to="/register">Create Account</Link> </p>
                <div>--------------or-------------</div>
                <button className="btn-regular me-1" onClick={handleGoogleSignIn}>Google Sign In</button>
                <button className="btn-regular ms-1" onClick={handleGithubSignIn}>Github Sign In</button>
            </div>

        </div>
    );
};

export default Login;
