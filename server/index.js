const { express,path,fs,parser,mocha,cors,shortId,jwt} = require('./modules');


const cookieParser = require('cookie-parser');
const { agent_router } = require('./routes/agent');
const { connectToDatabase } = require('./db');
const { client_router } = require('./routes/client');

require('dotenv').config();



const app = express();
app.use(cookieParser());
 
let urls = ['http://localhost:3000', 'http://192.168.172.146:3000'];

app.use(cors({
  origin: urls,
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE', 'UPDATE'],
  credentials: true,
  optionsSuccessStatus: 200
}));


//connectToDatabase.then((pool) => pool.query(``, (err,result) => console.log(result))).catch(err => console.log(err))
app.use(agent_router);
app.use(client_router);
/*app.use(author_router);
app.use(admin_router);
app.use(client_router);*/


app.get('/', (req,res) => {
  res.send({mssg: 'hello world'})
})


var server = app.listen(process.env.PORT,_ => console.log('app is live @',process.env.PORT));
/*
io(server, {cors: {origin: '*'}}).on('connection', socket => {


});
*/

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', reason.stack || reason)
  // Recommended: send the information to sentry.io
  // or whatever crash reporting service you use
});


/*





CREATE TABLE IF NOT EXISTS "Lodge"
(
    id serial primary KEY NOT NULL,
    lodgeId text UNIQUE NOT NULL,
    name text NOT NULL,
    price text NOT NULL,
    address1 text NOT NULL,
    address2 text NOT NULL,
    coordinates text NOT NULL,
    facilities json NOT NULL,
    date text NOT NULL,
    
);

CREATE TABLE IF NOT EXISTS "Agent"
(
    id serial primary KEY NOT NULL,
    agentId text UNIQUE NOT NULL,
    agentName text NOT NULL,
    fname text NOT NULL,
    lname text NOT NULL,
    email text NOT NULL,
    phone bigint NOT NULL,
    pwd text NOT NULL,
    date text NOT NULL,
    gender text NOT NULL,
    sname text NOT NULL,
    is_active boolean NOT NULL,
    address1 text NOT NULL,
    address2 text NOT NULL
);

CREATE TABLE IF NOT EXISTS "LodgeFiles"
(
    id serial primary KEY NOT NULL ,
    file text NOT NULL,
    lodgeId text NOT NULL,
);


CREATE TABLE IF NOT EXISTS Photos
(
    id serial primary KEY NOT NULL,
    userId text NOT NULL,
    file text NOT NULL
);



*/