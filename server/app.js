var koa = require('koa');
var superagent = require('superagent');
var logger = require('koa-logger');

var app = koa();

app.use(logger());

app.use(function *(){
  this.body = 'Hello World';
});

app.listen(8000, () => {
  console.log(`app is listening at port:http://localhost:8000/`)
});
