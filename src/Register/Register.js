import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className="loginform m-5">
            <div className="mt-5">
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email">
                    </input>
                    <br />

                    <input type="password" naem="" id="" placeholder="Your Password"></input>
                    <br />
                    <input type="password" naem="" id="" placeholder="Re-Enter Password"></input>
                    <br />
                    <input type="submit" Value="Submit" className="m-2"></input>
                </form>
                <p>Already have an account?<Link to="/login">Login</Link> </p>
                <div>--------------or-------------</div>
                <button className="btn-regular me-1">Google Sign Up</button>
                <button className="btn-regular ms-1">Github Sign Up</button>
            </div>

        </div>
    );
};

export default Register;