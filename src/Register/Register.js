import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.initialize';


import useFirebase from '../hooks/useFirebase';
initializeAuthentication();



const Register = () => {


    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user } = useFirebase();
    const handleEmailSignIn = () => {

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;


            })
            .catch(error => {
                console.log(error.message);
                // console.log(result.user);
            })

    }
    // const handleEmailSignIn = () => {{

    //     createUserWithEmailAndPassword(auth, email, password)

    //             // const { displayName, email, photoURL } = result.user;
    //             // const loggedInUser = {
    //             //     name: displayName,
    //             //     email: email,
    //             //     photo: photoURL

    //             // };
    //             // setUser(loggedInUser);
    //         })
    //         .catch(error => {
    //             console.log(error.message);
    //             // console.log(result.user);
    //         })

    // }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    return (
        <div className="loginform m-5">
            <div className="mt-5">
                <h2>Create Account</h2>
                <form onSubmit={handleEmailSignIn} >
                    <input type="email" onBlur={handleEmail} name="" id="email" placeholder="Your Email" required>
                    </input>
                    <br />

                    <input type="password" onBlur={handlePassword} name="" id="password" placeholder="Your Password" required></input>
                    <br />
                    <input type="password" name="" id="pass2" placeholder="Re-Enter Password" required></input>
                    <br />
                    <input type="submit" value="Submit" className="m-2"></input>
                </form>
                <p>Already have an account?<Link to="/login">Login</Link> </p>

            </div>

        </div>
    );
};

export default Register;