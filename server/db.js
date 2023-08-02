const {Client,Pool} = require('pg');

let host = ["localhost", "postgresql-138493-0.cloudclusters.net"];
let port = [5432,17935];
let user = ["postgres", "Fabian"];
let password = ["asdfghjkl"];
let db = ["Lodger"];

let connectToDatabase = new Promise((resolve, reject) => {

    let pool = new Pool({
        host: host[1],
        port: port[1],
        user: user[1],
        password: password[0],
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
