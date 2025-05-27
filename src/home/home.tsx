import React from 'react';
import { auth } from '../firebaseConfig';
import {signOut} from 'firebase/auth';


const Home = () => {
    const handleLogout = () => {
        signOut(auth)
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Home; 