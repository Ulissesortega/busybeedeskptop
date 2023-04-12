import React, { useState } from 'react';
import { AdultLogin } from "../../Services/DataService";

export default function AdultUserLogin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        let userData = {
            email,
            password
        }
        console.log(userData);
        let token = await AdultLogin(userData);
        if(token.token != null){
            localStorage.setItem("Token", token.token);
            console.log('Success');
        }
    }

    return (
        <div>
            <h1>Adult Login</h1>
            <input type='text' placeholder='Enter Email' onChange={({target: { value }}) => setEmail(value)}/>
            <input type='password' placeholder='Enter Password' onChange={({target: { value }}) => setPassword(value)}/>
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}