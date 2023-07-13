const { express,path,fs,parser,mocha,cors,shortId,jwt,io} = require('./modules');


const cookieParser = require('cookie-parser');

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


/*app.use(author_router);
app.use(admin_router);
app.use(client_router);*/





var server = app.listen(process.env.PORT,_ => console.log('app is live @',process.env.PORT));

io(server, {cors: {origin: '*'}}).on('connection', socket => {


});


process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', reason.stack || reason)
  // Recommended: send the information to sentry.io
  // or whatever crash reporting service you use
});
