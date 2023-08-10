
const { signup,login, lodge, lodgeBank } = require('../controllers/client');
//const { clientAuthentication, checkclient } = require('../middleware/client');
const { express,path,fs,parser,cookieParser,mocha,morgan,io,cors,shortId,jwt,} = require('../modules');

let client_router = express.Router();  

client_router.post('/client/signup', parser, signup);
client_router.post('/client/login', parser, login);

//client_router.post('/client/lodge', parser, lodge);

//client_router.get('/client/authentication', clientAuthentication);
//client_router.get('/client/check-client', checkclient);

client_router.get('/client/lodge-bank', lodgeBank);

//client_router.get('/', lodgeBank);

 
module.exports = {client_router}


