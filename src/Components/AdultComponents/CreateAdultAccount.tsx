import React, { useState } from 'react';
import { CreateAdultAccount } from "../../Services/DataService";

export default function AdultCreateAccount(){
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [avatarLook, setAvatarLook] = useState('');

    const handleSubmit = async () => {
        let adultUserData = {
            id: 0,
            firstName,
            lastName,
            email,
            password,
            avatarLook: "Boy"
        }
        console.log(adultUserData);
        CreateAdultAccount(adultUserData);
    }

    return (
        <div>
            <h1>Create Adult Account</h1>
            <input type='text' placeholder='Enter First Name' onChange={({target: { value }}) => setFirstName(value)}/>
            <input type='text' placeholder='Enter Last Name' onChange={({target: { value }}) => setLastName(value)}/>
            <input type='text' placeholder='Enter Email' onChange={({target: { value }}) => setEmail(value)}/>
            <input type='password' placeholder='Enter Password' onChange={({target: { value }}) => setPassword(value)}/>
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}