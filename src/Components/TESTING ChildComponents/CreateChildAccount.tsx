import React, { useState } from 'react';
import { CreateChildAccount } from "../../Services/DataService";

export default function AdultCreateAccount(){
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async () => {
        let childUserData = {
            id: 0,
            parentId: 1,
            username,
            password,
            currentStarCount: 0,
            totalStarCount: 0,
            avatarLook: "Boy"
        }
        console.log(childUserData);
        CreateChildAccount(childUserData);
    }

    return (
        <div>
            <h1>Create Child Account</h1>
            <input type='text' placeholder='Enter Username' onChange={({target: { value }}) => setUsername(value)}/>
            <input type='password' placeholder='Enter Password' onChange={({target: { value }}) => setPassword(value)}/>
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}