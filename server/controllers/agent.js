const {connectToDatabase} = require('../db');
const { logger, loggerEndResult } = require('../loggers/agent');
const { express,path,fs,parser,cookieParser,mocha,morgan,cors,shortId,jwt} = require('../modules');
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
                (id,agentId,agentName,fname,lname,email,phone,pwd,date,gender,sname,is_active,address1,address2)

                values
                (DEFAULT,'${uid}','${uname}','${fname}','${lname}','${email}','${phone}','${h_pwd}','${date}','${gender}','${sname}','${false}','${address1}','${address2}')
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
                    (id,userId,file)

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
    let {name,agentId,price,address1,address2,coord,selectedfacilities,files} = req.body;
    console.log(name,agentId,price,address1,address2,coord,selectedfacilities,files)

    let uid = shortId.generate();
    let date = Date().toString();
    console.log(agentId);

    let book = []

    

    var uploadData = () => {
        connectToDatabase.then((pool) => {
            pool.query(`
                insert
                into
                "Lodge"
                ("id","lodgeid","name","price","address1","address2","coordinates","facilities","date","agentid")
                values
                (Default,'${uid}','${name}','${price}','${null}','${null}','${coord}','{"facilities": "${selectedfacilities}"}','${date}','${agentId}')
            `)
            .then((result) => {
                if(result.rowCount === 1){
                    res.status(200).send(true)
                }else{
                    res.status(401).send(false)
                }
            })
            .catch((err) => {
                console.log(err)
                res.status(501).send(false)
            })
        })
        .catch((err) => {
            console.log(err)

            res.status(501).send(false)
        })
    }

    var uploadFiles = (files, resolve, reject) => {
        files.map(async(file) => {
           connectToDatabase.then((pool) => {
                pool.query(
                    `insert into "LodgeFiles"("id", "file", "lodgeid", "agentid") values(DEFAULT, '${file}', '${uid}', '${agentId}')` 
                )
                .then(({rowCount}) => {
                    
                    book.push(rowCount);
                    let bool = () => book.length === files.length ? resolve() : true

                    book.map(item => item !== 1 ? reject({err: 'Files failed to upload. code: 002'}) : bool())
                })
                .catch((err) => {
                    console.log(err)
                })
           })
           
        })
    }

    new Promise((resolve, reject) => {
        uploadFiles(files, resolve, reject);
     })
     .then(async() => {
        console.log({success: 'Files was uploaded', book})
         uploadData();
     })
     .catch((err) => {
         res.send(err);
         console.log(err)
     })
 
}




let login = (req, res) => {
    let {email,pwd} = req.body;
    //console.log(email, pwd)
    let LogInAgent = logger(email);

    LogInAgent.then((user) => {
        loggerEndResult(user, pwd, res, createToken, maxAge)
    })
}

let lodgeBank = (req,res) => {
    let {agentId} = req.query;
    console.log(agentId)

    let doc = {};


    var GET_DATA = (cb) => {
        connectToDatabase.then((pool) => {
            pool.query(`
                select * from  "Lodge" where "agentId" = '${agentId}'
            `)
            .then((result) => {
                //res.status(200).send(result.rows)
                doc.data = result.rows;
                cb()
            })
            .catch((err) => {
                console.log(err)
                doc.data = err;
                cb()
            })
        })
        .catch((err) => {
            console.log(err)

            res.status(501).send({err: 'Error connecting to db'})
            cb()
        })
    }

    var GET_FILES = (resolve) => {
        connectToDatabase.then((pool) => {
            pool.query(
                `select * from "LodgeFiles" where "agentId" = '${agentId}'` 
            )
            .then((result) => {
                doc.files = result.rows;
                resolve()
            })
            .catch((err) => {
                doc.files = err;
                console.log(err)
                resolve()

            })
        })
        .catch((err) => {
            console.log(err)
            res.status(501).send({err: 'Error connecting to db'})
            resolve()

        })
           
    }

    function getPost(cb){
        GET_DATA(cb)
    }

    getPost(() => {
        return new Promise(resolve => {
            GET_FILES(resolve);
        })
        .then(() => {
            res.status(200).send(doc);
            console.log(doc)
        })
    })



    
}



module.exports = {
    email_validation,
    uname_validation,
    phone_validation,
    lodge,
    signup,
    login,
    lodgeBank
}
