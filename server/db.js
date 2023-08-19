const {Client,Pool} = require('pg');

let host = ["localhost", "postgresql-138493-0.cloudclusters.net", "postgres://fabian:woMRHytKIcBdf8l70B4h6BVv0qy26EIN@dpg-cjgh4ek1ja0c73cso17g-a.oregon-postgres.render.com/lodger"];
let port = [5432,17935];
let user = ["postgres", "fabian"];
let password = ["asdfghjkl", "woMRHytKIcBdf8l70B4h6BVv0qy26EIN"];
let db = ["lodger"];

let connectToDatabase = new Promise((resolve, reject) => {

    let pool = new Pool({
        host: host[2],
        port: port[0],
        user: user[1],
        password: password[1],
        database: db[0]
    });
 
    let conn = pool.connect();
    if(conn){
        resolve(pool);
    }else{
        reject(conn);
    }
    
})

module.exports = {
    connectToDatabase
}
