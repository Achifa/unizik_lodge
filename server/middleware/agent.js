const jwt = require('jsonwebtoken');
const {connectToDatabase} = require('../db');
const {Pool, Client} = require("pg");


const agentAuthentication = (req, res, next) => {
    const token = req.cookies.agent_JWT; 
    
    //check json web token exists & verified
    if(token) {
        jwt.verify(token, 'agent_secret_token', (err, decodedToken) => {
            console.log(decodedToken)
            if(err){
                res.status(200).send(false)
            }else{
                res.status(200).send(true)
            }
        })
    }else{
        res.status(200).send(false)
    } 
}

const checkAgent = (req, res, next) => {
    const token = req.cookies.agent_JWT;
    //check json web token exists & verified
    if (token) {
        jwt.verify(token, 'agent_secret_token', async (err, decodedToken) => {
            if (err) {
                console.log(err)
                res.status(401).send('err verifying jwt')
                next();
            } else {
                //console.log(decodedToken);
                connectToDatabase
                .then((pool) => {
                    pool.query(`
                        select agentId,agentName,fname,lname,email,phone,date,gender,sname,is_active,address1,address2 from "Agent" where "agentid" = '${decodedToken.id}'
                    `)
                    .then((result, err) => {
                        console.log(decodedToken.id)
                        if(result){
                            res.status(200).send({bool: true, user: result.rows[0]});
                            next();
                        }else{
                            console.log(err)
                            res.status(401).send('no record on db');
                        }
                    })
                })
                .catch((err) => {
                    console.log(err)
                    res.status(401).send(false);
                })
                
            }
        })
    } else {
        res.status(401).send('token is missing')
        next();
    }
}



module.exports = { agentAuthentication, checkAgent };
