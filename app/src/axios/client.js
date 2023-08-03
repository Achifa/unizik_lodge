import axios from "axios";

/*
NEWS

*/
let u1 = 'localhost'
let u2 = '192.168.3.146'
let u3 = 'unizik-lodge.vercel.app/'

let url = `${u3}`

export let GET_AGENT_LODGE = ()  => {
    console.log()
    return new Promise((resolve, reject) => { 

        axios.get(`http://${url}:1234/client/lodge-bank`, {})
        .then((result) => {
            resolve(result.data); 
        })
        .catch((err) => {
            reject(err);
        })

    })
}

export let UPLOAD_CLIENT_LODGE_FORM = (name,agentId,price,address1,address2,coord,selectedfacilities,files)  => {
    console.log(name,agentId,price,address1,address2,coord,selectedfacilities,files)
    return new Promise((resolve, reject) => { 

        axios.post(`http://${url}:1234/agent/lodge`, {
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

export let GET_NEWS_THUMBNAIL = (article_id)  => {
    
    return new Promise((resolve, reject) => {

        axios.get(`http://${url}:3030/client/article/thumbnail`, {
            params: {
                article_id
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

export let GET_NEWS_TITLE = (id)  => {
    
    return new Promise((resolve, reject) => {

        axios.get(`http://${url}:3030/client/news/title`, {
            params: {
                id
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

export let GET_NEWS_CONTENT = (id)  => {
     
    return new Promise((resolve, reject) => {

        axios.get(`http://${url}:3030/client/news/content`, {
            params: {
                id
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

export let GET_ARTICLE_DATA = (article_id)  => {
    
    return new Promise((resolve, reject) => {

        axios.get(`http://${url}:3030/client/article/info`, {
            params: {
                article_id
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

export let GET_SEARCH = (input)  => {
    
    return new Promise((resolve, reject) => {

        axios.get(`http://${url}:3030/client/news/search`, {
            params: {
                input
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



/*
ENGAGEMENTS
*/

export let UPLOAD_COMMENT = (article_id,user_id, name, mssg)  => {
    return new Promise((resolve, reject) => {
        axios.post(`http://${url}:3030/client/comment`, {
            article_id,user_id, name, mssg
        })
        .then((result) => {
            resolve(result.data);
        })
        .catch((err) => {
            reject(err);
        })
    })
}

export let GET_COMMENT = (article_id)  => {
    return new Promise((resolve, reject) => {
        axios.get(`http://${url}:3030/client/comment`, {
            params: {
                article_id
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

export let DELETE_COMMENT = (comment_id,article_id)  => {
    return new Promise((resolve, reject) => {
        axios.delete(`http://${url}:3030/client/comment`, {
            params: {
                comment_id,article_id
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

export let ADD_VIEW = (user_id,name,article_id)  => {
    
    return new Promise((resolve, reject) => {

        axios.post(`http://${url}:3030/client/news/view`, {
            user_id,name,article_id
        })
        .then((result) => {
            resolve(result.data);
        })
        .catch((err) => {
            reject(err);
        })

    })
}



/*
AUTHENTICATION
*/

export let AUTHENTICATE_USER = (id)  => {
    
    return new Promise((resolve, reject) => {

        axios.get(`http://${url}:3030/client/authentication`, {
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
        axios.get(`http://${url}:3030/client/check_user`, {
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

export let GET_USER_INFO = (user_id)  => {
    return new Promise((resolve, reject) => {
        axios.get(`http://${url}:3030/client/info`, {
          params: {
            user_id
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


/*
SIGNUP / SIGNIN
*/
export let SIGNIN = (email,pwd) => {
    return new Promise(async(resolve, reject) => {
        fetch(`http://${url}:3030/client/login`, {
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

export let SIGNUP = (fname,lname,email,pwd,photo) => {
    return new Promise((resolve, reject) => {
        axios.post(`http://${url}:3030/client/signup`, {
            fname,lname,email,pwd,photo 
        })
        .then((result) => { 
            resolve(result)
        })
        .catch((err) => {
            reject(err)
        })
    })
}


/*
EXTERNAL SITES
*/

export let GET_EXTERNAL_CONTENTS = (url)  => {
    
    return new Promise((resolve, reject) => {

        axios.get(`https://newsapi.org/v2/top-headlines?country=ng&apiKey=769c5e73016a4ebea92a1d67ffa53e53`, {})
        .then((result) => {
            resolve(result.data);
        })
        .catch((err) => {
            reject(err);
        })

    })
}
