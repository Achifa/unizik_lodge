
import axios from "axios";

/*
NEWS

*/


let url = `lodge-server.onrender.com`

export let UPLOAD_AGENT_SIGNUP_FORM = (fname,lname,sname,email,phone,uname,gender,address1,address2,pwd,photo)  => {
    
    return new Promise((resolve, reject) => {

        axios.post(`https://${url}/agent/signup`, {
            fname,lname,sname,email,phone,uname,gender,address1,address2,pwd,photo
        })
        .then((result) => {
            resolve(result.data); 
        })
        .catch((err) => {
            reject(err);
        })

    })
}

export let UPLOAD_AGENT_SIGNIN_FORM = (email,pwd) => {
    return new Promise(async(resolve, reject) => {
        fetch(`https://${url}/agent/login`, {
            method: `POST`,
            credentials: "include",
            withCredentials: true,
            body: JSON.stringify({
                email,pwd
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then((data) => {
            resolve(data.json())
        })
        .catch(err => {
            reject(err)
        })
        
       
    }) 
}

export let AUTHENTICATE_USER = (id)  => {
    
    return new Promise((resolve, reject) => {

        axios.get(`https://${url}/agent/authentication`, {
            params: {
                id
            },
            withCredentials: true
        })
        .then((result) => {
            resolve(result.data);
        })
        .catch((err) => {
            reject(err);
        })

    })
}

export let CHECK_USER = (id)  => {
    return new Promise((resolve, reject) => {
        axios.get(`https://${url}/agent/check-agent`, {
            params: {
                id
            },
            withCredentials: true 
        })
        .then((result) => {
            resolve(result.data);
        })
        .catch((err) => {
            reject(err);
        })
    })
}


export let UPLOAD_AGENT_LODGE_FORM = (name,agentId,price,address1,address2,coord,selectedfacilities,files)  => {
    console.log(name,agentId,price,address1,address2,coord,selectedfacilities,files)
    return new Promise((resolve, reject) => { 

        axios.post(`https://${url}/agent/lodge`, {
            name,agentId,price,address1,address2,coord,selectedfacilities,files
        })
        .then((result) => {
            resolve(result.data); 
        })
        .catch((err) => {
            reject(err);
        })

    })
}

export let GET_AGENT_LODGE_POST = (agentId)  => {
    console.log(agentId)
    return new Promise((resolve, reject) => { 

        axios.get(`https://${url}/agent/lodge-bank`, {
            params: {
                agentId
            }
        })
        .then((result) => {
            resolve(result.data); 
        })
        .catch((err) => {
            reject(err);
        })

    })
}
