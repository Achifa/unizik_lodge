
module.exports = {
    express : require('express'),
    fs : require('fs'),
    path : require('path'),
    cookieParser : require('cookie-parser'),
    parser : require('body-parser').json({limit: '1024mb'}),
    mocha : require('mocha'),
    cors : require('cors'),
    shortId : require('short-id'),
    jwt : require('jsonwebtoken'),
    bcrypt: require('bcryptjs'),
    io: require('socket.io')
}
