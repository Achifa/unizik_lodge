const {connectToDatabase} = require('../db');
const { logger, loggerEndResult } = require('../loggers/agent');
const { express,path,fs,parser,cookieParser,mocha,morgan,io,cors,shortId,jwt} = require('../modules');
const maxAge = 90 * 24 * 60 * 60; 
const createToken = (id) => {
    return jwt.sign({ id }, 'agent_secret_token', {
        expiresIn: maxAge
    });
};


let email_validation = (req, res) => {
    let {email} = req.body;
    connectToDatabase.then((pool) => {
        pool.query(`
        select count(*) from "author_register" where "email" = '${email}'
        `)
        .then((result, err) => {
            if(result){
                result.rows[0].count === '0' 
                ? 
                res.send(true) 
                : 
                res.send(false)
            }else{
                console.log(err)
            }
        })
    })
    .catch((err) => {
        console.log(err)
    })
    
}

let uname_validation = (req, res) => {
    let {uname} = req.body;

    connectToDatabase.then((pool) => {
        pool.query(`
        select count(*) from "author_register" where "user_name" = '${uname}'
        `)
        .then((result, err) => {
            if(result){
                result.rows[0].count === '0' 
                ? 
                res.send(true) 
                : 
                res.send(false)
            }else{
                console.log(err)
            }
        })
    })
    .catch((err) => {
        console.log(err)
    })
}

let phone_validation = (req, res) => {
    let {phone} = req.body;

    connectToDatabase.then((pool) => {
        pool.query(`
        select count(*) from "author_register" where "phone" = '${phone}'
        `)
        .then((result, err) => {
            if(result){
                result.rows[0].count === '0' 
                ? 
                res.send(true) 
                : 
                res.send(false)
            }else{
                console.log(err)
            }
        })
    })
    .catch((err) => {
        console.log(err)
    })
}

let signup = async(req, res) => {
    const {fname,lname,sname,email,phone,uname,gender,address1,address2,pwd,photo} = req.body;
    
    const bcryptjs = require('bcryptjs');
    let h_pwd = await bcryptjs.hash(pwd, 10)

    let uid = shortId.generate();
    let date = Date().toString();

    new Promise((resolve, reject) => {
        connectToDatabase.then((pool) => {
            pool.query(`
                insert
                into
                "Agent"
                (agent_id,agent_name,fname,lname,email,phone,pwd,date,gender,sname,is_active,id,address1,address2)

                values
                ('${uid}','${uname}','${fname}','${lname}','${email}','${phone}','${h_pwd}','${date}','${gender}','${sname}','${false}',DEFAULT,'${address1}','${address2}')
            `)
            .then((result) => {
                if(result.rowCount === 1){
                    resolve(true)
                }else{
                    reject(false)
                }
            })
            .catch((err) => {
                reject(err)
            })
        })
        .catch((err) => {
            reject(err)
        })

    })
    .then((bool) => {
        if(bool){
            connectToDatabase.then((pool) => {
                pool.query(`
                    insert
                    into
                    "photos"
                    (id,user_id,file)

                    values
                    (DEFAULT,'${uid}','${photo}')
                `)
                .then((result) => {
                    if(result.rowCount === 1){
                        res.send(true)
                    }else{
                        res.send('upload incomplete')
                    }
                })
                .catch((err) => {
                    res.send(err)
                })
            })
            .catch((err) => {
                res.send(err)
            })
        }else{
            res.send(false);
        }
    })
    .catch((err) => {
        res.send(err);
        console.log(err)
    })

}

let lodge = (req,res) => {
    let {name,price,address1,address2,coord,selectedfacilities,files} = req.body;

    let uid = shortId.generate();
    let date = Date().toString();
    console.log(selectedfacilities)

    new Promise((resolve, reject) => {
        connectToDatabase.then((pool) => {
            pool.query(`
                insert
                into
                "Lodge"
                (id,lodge_id,name,price,address1,address2,coordinates,facilities,date)

                values
                (Default,'${uid}','${name}','${price}','${address1}','${address2}','${coord}','{"facilities": "${selectedfacilities}"}','${date}')
            `)
            .then((result) => {
                if(result.rowCount === 1){
                    resolve(true)
                }else{
                    reject(false)
                }
            })
            .catch((err) => {
                reject(err)
            })
        })
        .catch((err) => {
            reject(err)
        })

    })
    .then(async() => {
        let data = await fileUploader(files)
        console.log(data)
    })
    .catch((err) => {
        res.send(err);
        console.log(err)
    })

    let fileUploader = (items => 
        items.map(async(item) => {
            let database = await connectToDatabase
            .then(async(pool) =>  
                await pool.query(`
                    insert
                    into
                    "Lodge_files"
                    (id,file,lodge_id)
    
                    values
                    (DEFAULT,'${uid}','${item}')
                `)
                
                //db.rowCount === 1 ? true : false
            )
            .catch((err) => {
                //res.send(err)
            })

            //console.log(database.rowCount)

            let counts = [];
            counts.push(database.rowCount)
            if(counts.length === files.length){
                return counts
            } 

            
        })
    
    )
}




let login = (req, res) => {
    let {email,pwd} = req.body;
    console.log(email, pwd)
    let LogInAgent = logger(email);

    LogInAgent.then((user) => {
        loggerEndResult(user, pwd, res, createToken, maxAge)
    })
}





module.exports = {
    email_validation,
    uname_validation,
    phone_validation,
    lodge,
    signup,
    login,
}
