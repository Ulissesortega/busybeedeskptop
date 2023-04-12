import React, { useState } from 'react';
import { CreateTask } from '../../Services/DataService';

export default function CreatingTasks(){
    const [taskIntructions, setTaskIntructions] = useState('');
    const [taskReward, setTaskReward] = useState(0);

    const handleSubmit = async () => {
        let task = {
            id: 0,
            parentId: 1,
            taskIntructions,
            taskReward,
            isCompleted: false,
            isDeleted: false
        }
        console.log(task);
        CreateTask(task);
    }

    return <>
            <input type="text" placeholder='Enter Task Intructions' onChange={({target: { value }}) => setTaskIntructions(value)} />
            <input type="number" placeholder='Task Reward' onChange={({target: { value }}) => setTaskReward(Number(value))} />
            <button onClick={handleSubmit}>Create Task</button>
        </>
}