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
        alert('Could Not Log In')
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

export { CreateAdultAccount, AdultLogin, GetAdultUserData, CreateChildAccount, ChildLogin, GetChildUserData, CreateTask, GetTasksByParentAndChildId, CreateReward, GetRewardsByParentAndChildId }