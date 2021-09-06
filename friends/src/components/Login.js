import e from 'cors';
import React, {useState} from 'react';
import { axiosWithAuth } from '../axiosWithAuth';

const Login = props => {
    const [credentials, setCredentials] = useState({});

    const handleSubmit = () => {
        axiosWithAuth().post('http://localhost:5000/api/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/dashboard');
            });
    }

    return (
        <div>
            <label> Username </label>
            <input type='text' name='username' value={credentials.username} onChange={(e) => props.handleChange(e, setCredentials, credentials)}/>

            <label> Password </label>
           <input type='password' name='password' value={credentials.password} onChange={(e) => props.handleChange(e, setCredentials, credentials)}></input>

            <button onClick={handleSubmit}> Login </button>
        </div>
    )
}

export default Login;
