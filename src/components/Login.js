import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [ errorMessage, setErrorMessage ] = useState(null);
    const username = useRef('');
    const password = useRef('');
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        console.log(username.current.value, password.current.value);
        if(username.current.value !== 'username' && password.current.value !== 'password'){
            setErrorMessage('Invalid username or password');
            return;
        }
        navigate('/booking-form');
    }

    return (
        <div>
            <div>Welcome to the login page</div>
            <div className='form-container' onSubmit={handleSubmit}>
                <form className='form'>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" name="username" ref={username}/><br/>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" ref={password}/><br/>
                    <button type="submit">Login</button>
                    {errorMessage && <div>
                            {errorMessage}
                        </div>}
                </form>
            </div>
        </div>
    )
}

export default Login