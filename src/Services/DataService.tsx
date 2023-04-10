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
    }
    let data = await result.json();
    console.log(data);
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
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    }
    let data = await result.json();
    console.log(data);
    return data;
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

export { CreateAdultAccount, AdultLogin, CreateChildAccount, ChildLogin }