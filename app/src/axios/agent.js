
import axios from "axios";

/*
NEWS

*/
let u1 = 'localhost'
let u2 = '192.168.3.146'
let u3 = 'unizik-lodge.vercel.app'
let u4 = 'lodge-server.onrender.com'

let protocol1 = 'http'
let protocol2 = 'https'



let p = protocol2

let url = `${u4}`

export let UPLOAD_AGENT_SIGNUP_FORM = (fname,lname,sname,email,phone,uname,gender,address1,address2,pwd,photo)  => {
    
    return new Promise((resolve, reject) => {

        axios.post(`${p}://${url}/agent/signup`, {
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
        fetch(`${p}://${url}/agent/login`, {
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

        axios.get(`${p}://${url}/agent/authentication`, {
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

export let CHECK_USER = ()  => {
    return new Promise((resolve, reject) => {
        axios.get(`${p}://${url}/agent/check-agent`, {
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

        axios.post(`${p}://${url}/agent/lodge`, {
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

        axios.get(`${p}://${url}/agent/lodge-bank`, {
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
