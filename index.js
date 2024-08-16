const express = require('express');
const app = express();
const http = require('http').createServer(app);
const ejs = require('ejs');

// console color
const colors = require('colors');

colors.setTheme({
    info: 'yellow',
    error: 'bgRed',
    success: 'brightGreen',
    connect: 'brightBlue',
    close: 'brightRed',
});

app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use(express.static(__dirname + '/static/'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('port', 5000);

// web
const mainRouter = require('./router/main')(app);

const HttpServer = http.listen(app.get('port'), () => {
    console.log(`HTTP server listening on port http://localhost:${app.get('port')}`);
});