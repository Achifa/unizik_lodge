const {connectToDatabase} = require("../db");
const bcrypt = require('bcryptjs');


const logger = (email) => {
    

    return new Promise((resolve, reject) => {
        connectToDatabase
        .then(async(pool) => {
                
            pool.query(`select "id" from "Agent" where "email" = '${email}'`, (err, result) => {
                
                if(!err){
                    if(result.rows.length > 0){
                        const id = result.rows[0].id;
                        resolve(id)
                    }else{
                        /*res.status(400).send({
                            
                        })*/
                        reject({Mssg: "Email is not registered..."});
                    }
                }else{
                    console.log(err)
                }
                
            })
            
        });
    })
    .then(async(id) => {
        return(
            connectToDatabase
            .then(async(pool) => {
                let database_return_value = await pool.query(
                    `select "email", "pwd", "agentid" from "Agent" where "id" = '${id}'`
                )
                .then(result => result.rows[0])
                .catch(err => console.log(err))
                //console.log(database_return_value)

                return database_return_value
            })
        )
        
    })
    .catch(err => {
        console.log(err)
    })
    
}

let loggerEndResult = async(user,pwd,res,createToken,maxAge) => {
    if(user){

        const auth = await bcrypt.compare(pwd, user.pwd);
        if (auth) {
            const token = createToken(user.agentid);
            res.cookie('agent_JWT', token, {
                maxAge: maxAge * 1000,
                httpOnly: true,
                secure: true,
                sameSite: 'none',
                path: '/'
            });

            res.status(200).send({
                user: user.agentid
            });

        }else{
            res.status(501).send({
                Mssg: "Invalid Password"
            })
        }
    }else{
        res.status(501).send({
            Mssg: "Email is not registered"
        })
    }
}

module.exports = {logger, loggerEndResult};
