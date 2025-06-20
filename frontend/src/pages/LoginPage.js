import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // We will use axios to make the API request

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Send login request to the backend
            const response = await axios.post('http://localhost:5000/login', {
                username,
                password
            });

            // If login is successful, store user data (e.g., role and username)
            const { id, username: loggedInUser, role } = response.data.user;
            localStorage.setItem('userId', id);
            localStorage.setItem('username', loggedInUser);
            localStorage.setItem('role', role);

            // Redirect based on user role
            if (role === 'admin') {
                navigate('/admin'); // Redirect to admin page
            } else {
                navigate('/employee'); // Redirect to employee page
            }
        } catch (err) {
            // If login fails, show error message
            setError('Invalid username or password');
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
};

export default LoginPage;

