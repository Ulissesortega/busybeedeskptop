let adultUserData: object = {};
let childUserserData: object = {};

// Adult Account Fetches
async function CreateAdultAccount(createdAdultUser: object){
    const result = await fetch('https://busybeeapi.azurewebsites.net/AdultUser/AddAdultUser',{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(createdAdultUser)
    });
    if(!result.ok){
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    }else{
    }
    let data = await result.json();
    console.log(data);
    return data;
}

async function AdultLogin (loginUser: object){
    const result = await fetch('https://busybeeapi.azurewebsites.net/AdultUser/AdultLogin',{
        method: "POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(loginUser)
    });
    if(!result.ok){
        alert('Could Not Log In')
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    }
    let data = await result.json();
    console.log(data);
    return data;
}

function LoggedInAdultUserData(){
    return adultUserData;
}

// Child Account Fetches
async function CreateChildAccount(createdChildUser: object){
    const result = await fetch('https://busybeeapi.azurewebsites.net/ChildUser/AddChildUser',{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(createdChildUser)
    });
    if(!result.ok){
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    }
    let data = await result.json();
    console.log(data);
}

async function ChildLogin (loginUser: object){
    const result = await fetch('https://busybeeapi.azurewebsites.net/ChildUser/ChildLogin',{
        method: "POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(loginUser)
    });
    if(!result.ok){
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    }
    let data = await result.json();
    console.log(data);
    return data;
}

// Task Fetches
async function CreateTask(task: object){
    const result = await fetch('https://busybeeapi.azurewebsites.net/Task/CreateTask',{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(task)
    });
    if(!result.ok){
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    }
    let data = await result.json();
    console.log(data);
    return data;
}

// Reward Fetches
async function CreateReward(reward: object){
    const result = await fetch('https://busybeeapi.azurewebsites.net/Reward/CreateReward',{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(reward)
    });
    if(!result.ok){
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    }
    let data = await result.json();
    console.log(data);
    return data;
}

export { CreateAdultAccount, AdultLogin, LoggedInAdultUserData, CreateChildAccount, ChildLogin, CreateTask, CreateReward }