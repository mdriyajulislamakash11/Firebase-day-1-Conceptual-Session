import { onAuthStateChanged, signInWithPopup, TwitterAuthProvider } from 'firebase/auth';
import { GoogleAuthProvider, GithubAuthProvider} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';
export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const TwitterProvider = new TwitterAuthProvider()
    const[users, setUsers] = useState(null)

    //google login
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUsers(result.user)
        })
    }

    // Github login
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            setUsers(result.user)
        })
    }

    // Twitter login
    const handleTwitterLogin = () => {
        signInWithPopup(auth, TwitterProvider)
        .then((result) => {
            setUsers(result.user)
        })
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            
        })

        return () => {
            unSubscribe()
        }
    }, [])
    

    const authInfo = {
        handleGoogleLogin,
        handleGithubLogin,
        handleTwitterLogin,
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