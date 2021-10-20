
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useFirebase from '../hooks/useFirebase';
import "./loginform.css";



const Login = () => {
    const { handleGoogleSignIn, handleGithubSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/service';


    console.log('came from', location.state?.from);

    const handleRegistration = e => {
        e.preventDefault();
        history.push(redirect_uri);
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
                {/* <button className="btn-regular ms-1" onClick={handleGithubSignIn}>Github Sign In</button> */}
            </div>

        </div>
    );
};

export default Login;
