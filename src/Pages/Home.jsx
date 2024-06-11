import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';

const Home = () => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <div>
            <h1>Welcome to CelebGPT!</h1>
            {isAuthenticated ? (
                <div>
                    <h2>You are logged in!</h2>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <Link to="/signup">
                        <button>Sign Up</button>
                    </Link>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Home;
