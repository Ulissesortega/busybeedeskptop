import React, { useState } from 'react';
import { ChildLogin } from "../../Services/DataService";

export default function ChildUserLogin(){
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async () => {
        let userData = {
            username,
            password
        }
        console.log(userData);
        let token = await ChildLogin(userData);
        if(token.token != null){
            localStorage.setItem("Token", token.token);
            console.log('Success');
        }
    }

    return (
        <div>
            <h1>Child Login</h1>
            <input type='text' placeholder='Enter Username' onChange={({target: { value }}) => setUsername(value)}/>
            <input type='password' placeholder='Enter Password' onChange={({target: { value }}) => setPassword(value)}/>
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}