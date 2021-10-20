import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.initialize";
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();




    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log(error.message);
                // console.log(result.user);
            })

    }
    // const handleGithubSignIn = () => {

    //     signInWithPopup(auth, githubProvider)
    //         .then(result => {
    //             const { displayName, email, photoURL } = result.user;
    //             const loggedInUser = {
    //                 name: displayName,
    //                 email: email,
    //                 photo: photoURL
    //             };
    //             setUser(loggedInUser);
    //         })
    //         .catch(error => {
    //             console.log(error.message);
    //             // console.log(result.user);
    //         })

    // }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])
    return {
        user, handleGoogleSignIn,
        //  handleGithubSignIn,
        handleSignOut
    }

}
export default useFirebase;