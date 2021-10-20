import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { getAuth } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.initialize';


// import useFirebase from '../hooks/useFirebase';
import useAuth from '../hooks/useAuth';
initializeAuthentication();



const Register = () => {


    // const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { registerUser } = useAuth();
    const handleEmailSignIn = e => {
        e.preventDefault();
        console.log(email, password)
        registerUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);


            })
            .catch(error => {
                console.log(error.message);
                // console.log(result.user);
            })

    }

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
                    <input type="email" onChange={handleEmail} name="" id="email" placeholder="Your Email" required>
                    </input>
                    <br />

                    <input type="password" onChange={handlePassword} name="" id="password" placeholder="Your Password" required></input>
                    <br />
                    {/* <input type="password" name="" id="pass2" placeholder="Re-Enter Password" required></input> */}
                    <br />
                    {/* <input type="submit" value="Submit" className="m-2"></input> */}
                    <button type="submit">Submit</button>
                </form>
                <p>Already have an account?<Link to="/login">Login</Link> </p>

            </div>

        </div>
    );
};

export default Register;