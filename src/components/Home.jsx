import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Home = () => {
    const {handleGoogleLogin, handleGithubLogin} = useContext(AuthContext)


    return (
        <div>
            <h1>i am home</h1>
            <button className='btn btn-accent' onClick={handleGoogleLogin}>Google Login</button>
            <button className='btn btn-accent' onClick={handleGithubLogin}>Github Login</button>
        </div>
    );
};

export default Home;