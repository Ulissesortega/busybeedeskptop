import React, { useState } from 'react';
import { CreateReward } from '../../Services/DataService';

export default function CreatingRewards(){
    const [reward, setReward] = useState('');
    const [rewardCost, setRewardCost] = useState(0);

    const handleSubmit = async () => {
        let rewardObject = {
            id: 0,
            parentId: 1,
            reward,
            rewardCost,
            isCompleted: false,
            isDeleted: false
        }
        console.log(rewardObject);
        CreateReward(rewardObject);
    }

    return <>
            <input type="text" placeholder='Enter Reward' onChange={({target: { value }}) => setReward(value)} />
            <input type="number" placeholder='Set Reward Cost' onChange={({target: { value }}) => setRewardCost(Number(value))} />
            <button onClick={handleSubmit}>Create Reward</button>
        </>
}