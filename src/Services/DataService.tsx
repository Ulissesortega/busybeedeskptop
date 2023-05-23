// Adult Account Fetches
async function CreateAdultAccount(createdAdultUser: object) {
    const result = await fetch('https://busybeeapi.azurewebsites.net/AdultUser/AddAdultUser', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(createdAdultUser)
    });
    if (!result.ok) {
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    } else {
    }
    let data = await result.json();
    return data;
}

async function AdultLogin(loginUser: object) {
    const result = await fetch('https://busybeeapi.azurewebsites.net/AdultUser/AdultLogin', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(loginUser)
    });
    if (!result.ok) {
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    }
    let data = await result.json();
    return data;
}

async function GetAdultUserData(email: string) {
    const result = await fetch(`https://busybeeapi.azurewebsites.net/AdultUser/AdultUserByEmail/${email}`);
    let data = await result.json();
    return data;
}

// Child Account Fetches
async function CreateChildAccount(createdChildUser: object) {
    const result = await fetch('https://busybeeapi.azurewebsites.net/ChildUser/AddChildUser', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(createdChildUser)
    });
    if (!result.ok) {
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    }
    let data = await result.json();
    return data;
}

async function ChildLogin(loginUser: object) {
    const result = await fetch('https://busybeeapi.azurewebsites.net/ChildUser/ChildLogin', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(loginUser)
    });
    if (!result.ok) {
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    }
    let data = await result.json();
    return data;
}

async function GetChildUserData(username: string) {
    const result = await fetch(`https://busybeeapi.azurewebsites.net/ChildUser/ChildUserByUsername/${username}`);
    let data = await result.json();
    return data;
}

async function GetChildrenUsersByParentId(parentId: number) {
    const result = await fetch(`https://busybeeapi.azurewebsites.net/ChildUser/ChildUserByParentId/${parentId}`);
    let data = await result.json();
    return data;
}

async function UpdateChildUserStarCount(userId: number, task: boolean, stars: number) {
    const result = await fetch(`https://busybeeapi.azurewebsites.net/ChildUser/UpdateChildUserStarCount/${userId}/${task}/${stars}`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        // body: JSON.stringify(userData)
    });
    if (!result.ok) {
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    } else {
    }
    let data = await result.json();
    return data;
}

async function GetChildUserDataById(id: number) {
    const result = await fetch(`https://busybeeapi.azurewebsites.net/ChildUser/ChildUserById/${id}`);
    let data = await result.json();
    return data;
}

// Task Fetches
async function CreateTask(task: object) {
    const result = await fetch('https://busybeeapi.azurewebsites.net/Task/CreateTask', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(task)
    });
    if (!result.ok) {
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    }
    let data = await result.json();
    return data;
}

async function GetTasksByParentAndChildId(parentId?: number, childId?: number) {
    let res = await fetch(`https://busybeeapi.azurewebsites.net/Task/GetTasksByParentAndChildId/${parentId}/${childId}`)
    let data = await res.json();
    return data;
}

async function UpdateTask(task: object) {
    const result = await fetch('https://busybeeapi.azurewebsites.net/Task/UpdateTask', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(task)
    });
    if (!result.ok) {
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    }
    let data = await result.json();
    return data;
}

async function GetTaskById(taskId?: number) {
    let res = await fetch(`https://busybeeapi.azurewebsites.net/Task/GetTaskById/${taskId}`)
    let data = await res.json();
    return data;
}

async function DeleteTask(task: object) {
    const result = await fetch('https://busybeeapi.azurewebsites.net/Task/DeleteTask', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(task)
    });
    if (!result.ok) {
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    }
    let data = await result.json();
    return data;
}

async function GetTasksByParentId(parentId?: number) {
    let res = await fetch(`https://busybeeapi.azurewebsites.net/Task/GetTasksByParentId/${parentId}`)
    let data = await res.json();
    return data;
}

// Reward Fetches
async function CreateReward(reward: object) {
    const result = await fetch('https://busybeeapi.azurewebsites.net/Reward/CreateReward', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(reward)
    });
    if (!result.ok) {
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    }
    let data = await result.json();
    return data;
}

async function GetRewardsByParentAndChildId(parentId?: number, childId?: number) {
    let res = await fetch(`https://busybeeapi.azurewebsites.net/Reward/GetRewardsByParentAndChildId/${parentId}/${childId}`)
    let data = await res.json();
    return data;
}

async function UpdateReward(reward: object) {
    const result = await fetch('https://busybeeapi.azurewebsites.net/Reward/UpdateReward', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(reward)
    });
    if (!result.ok) {
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    }
    let data = await result.json();
    return data;
}

async function GetRewardById(rewardId?: number) {
    let res = await fetch(`https://busybeeapi.azurewebsites.net/Reward/GetRewardById/${rewardId}`)
    let data = await res.json();
    return data;
}

async function DeleteReward(reward: object) {
    const result = await fetch('https://busybeeapi.azurewebsites.net/Reward/DeleteReward', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(reward)
    });
    if (!result.ok) {
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    }
    let data = await result.json();
    return data;
}

async function GetRewardsByParentId(parentId?: number) {
    let res = await fetch(`https://busybeeapi.azurewebsites.net/Reward/GetRewardsByParentId/${parentId}`)
    let data = await res.json();
    return data;
}

export { CreateAdultAccount, AdultLogin, GetAdultUserData, CreateChildAccount, ChildLogin, GetChildUserData, GetChildrenUsersByParentId, UpdateChildUserStarCount, GetChildUserDataById, CreateTask, GetTasksByParentAndChildId, UpdateTask, GetTaskById, DeleteTask, GetTasksByParentId, CreateReward, GetRewardsByParentAndChildId, UpdateReward, GetRewardById, DeleteReward, GetRewardsByParentId }