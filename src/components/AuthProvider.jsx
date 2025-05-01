import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider, GithubAuthProvider} from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../../firebase.init';
export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            console.log(result.user)
        })
    }


    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            console.log(result.user)
        })
    }



    

    const authInfo = {
        handleGoogleLogin,
        handleGithubLogin,

    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;