const path = require('path');
const Express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const morgan = require('morgan');
const app = Express();

const PATH_DIST   = path.resolve(__dirname, '../../dist');

app.use(compression());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(cookieParser());
app.use(Express.static(PATH_DIST));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

const server = app.listen(process.env.PORT || 3000, () => {
  const port = server.address().port;
  console.log('Server is listening at %s', port);
});


const gracefulShutdown = function() {
  console.log("Received kill signal, shutting down gracefully.");
  server._connections=0
  server.close();
  setTimeout(function() {
    console.error("Could not close connections in time, forcefully shutting down");
    process.exit();
  }, 3*1000);
}

process.on ('SIGTERM', gracefulShutdown);
process.on ('SIGINT', gracefulShutdown);

server.on('close', function () {
  console.log("Closing server");
});
