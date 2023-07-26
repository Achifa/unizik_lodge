
const { signup,login, lodge } = require('../controllers/agent');
const { agentAuthentication, checkAgent } = require('../middleware/agent');
const { express,path,fs,parser,cookieParser,mocha,morgan,io,cors,shortId,jwt,} = require('../modules');

let agent_router = express.Router();  

agent_router.post('/agent/signup', parser, signup);
agent_router.post('/agent/login', parser, login);

agent_router.post('/agent/lodge', parser, lodge);

agent_router.get('/agent/authentication', agentAuthentication);
agent_router.get('/agent/check-agent', checkAgent);



 
module.exports = {agent_router}


