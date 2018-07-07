const konstructor = require('@konstructor/konstructor');
const koa = require('@konstructor/koa');
const error = require('@konstructor/error');
const logger = require('@konstructor/logger');
const router = require('@konstructor/router');

const app = new konstructor();
app.add(new koa());
app.add(new error());
app.add(new logger());
app.add(new router());

app.get('/', 'home/index');

app.listen();
