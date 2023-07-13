const {Client,Pool} = require('pg');

let connectToDatabase = new Promise((resolve, reject) => {

    let pool = new Pool({
        host: "localhost",
        port: 5432,
        user: "postgres",
        password: "asdfghjkl",
        database: "naija_times"
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
