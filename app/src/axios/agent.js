
import axios from "axios";

/*
NEWS

*/
let u1 = 'localhost'
let u2 = '192.168.3.146'

let url = `${u1}`

export let UPLOAD_AGENT_SIGNUP_FORM = (fname,lname,sname,email,phone,uname,gender,address1,address2,pwd,photo)  => {
    
    return new Promise((resolve, reject) => {

        axios.post(`http://${url}:1234/agent/signup`, {
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
        fetch(`http://${url}:1234/agent/login`, {
            method: `POST`,
            credentials: `include`,
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

        axios.get(`http://${url}:1234/agent/authentication`, {
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
        axios.get(`http://${url}:1234/agent/check-agent`, {
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


export let UPLOAD_AGENT_LODGE_FORM = (name,price,address1,address2,coord,selectedfacilities,files)  => {
    console.log(name,price,address1,address2,coord,selectedfacilities,files)
    return new Promise((resolve, reject) => { 

        axios.post(`http://${url}:1234/agent/lodge`, {
            name,price,address1,address2,coord,selectedfacilities,files
        })
        .then((result) => {
            resolve(result.data); 
        })
        .catch((err) => {
            reject(err);
        })

    })
}
