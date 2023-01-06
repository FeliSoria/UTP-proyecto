var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
var pool = require('./models/bd');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//select OK
//pool.query('select * from empleados').then(function (resultados){
// console.log(resultados)
//});

//insert OK SE VIO EN MYSQL
//var obj = {
 // nombre: 'Felicitas',
 // apellido: 'Soria',
 // trabajo: 'Programador',
 // edad: 35,
 // salario: 100000,
 // mail: 'feli@gmail.com'
//}

//pool.query("insert into empleados set ?", [obj]).then(function (resultados){
 //console.log(resultados)
//});

//UPDATE OK
//var idempleados = 1;
//var obj = {
 // nombre: 'Cacho',
 // apellido: 'Castaña'
//} 

//pool.query("update empleados set ? where idempleados=?", [obj, idempleados]).then(function (resultados){
 //console.log(resultados)
//});


//DELETE
//var idempleados = 5

//pool.query("delete from empleados where idempleados = ?", [idempleados]).then(function (resultados){
// console.log(resultados)
//});

 
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
