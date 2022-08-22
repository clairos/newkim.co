// ************ Require's ************
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const session = require('express-session');
const logger = require('morgan');
const path = require('path');
const methodOverride =  require('method-override'); // para os métodos PUT e DELETE

// ************ express() ************
const app = express();

// ************ Middlewares ************
app.use(express.static(path.join(__dirname, 'public'))); // arquivos estáticos pasta /public
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method')); // para passar PUT e DELETE no method="POST" no form

app.use(session({
  secret: 'newkim.co',
  resave: true,
  saveUninitialized: true
}));
// ************ Template Engine ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // define localização da pasta das views

// ************ Route System require and use() ************
const homeRouter = require('./routes/home');
const storeRouter = require('./routes/store');
const detailsRouter = require('./routes/details');
const cartRouter = require('./routes/cart');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const forgotPasswordRouter = require('./routes/forgotPassword');
const profileRouter = require('./routes/profile');
const editUserRouter = require('./routes/editUser');
const paymentRouter = require('./routes/payment');
const orderSuccessRouter = require('./routes/orderSuccess');
const trackCodeRouter = require('./routes/trackCode');
const trackOrderRouter = require('./routes/trackOrder');
const aboutRouter = require('./routes/about');

app.use('/', homeRouter);
app.use('/store', storeRouter);
app.use('/details', detailsRouter);
app.use('/cart', cartRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/forgot-password', forgotPasswordRouter);
app.use('/profile', profileRouter);
app.use('/edit-user', editUserRouter);
app.use('/payment', paymentRouter);
app.use('/order-success', orderSuccessRouter);
app.use('/track-code', trackCodeRouter);
app.use('/track-order', trackOrderRouter);
app.use('/about', aboutRouter);

// ************ catch 404 and forward to error handler ************
// app.use('*', (req, res) =>{
//   res.send('Error 404')
// });

// ************ error handler ************
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error 404');
});

// ************ exports app - dont'touch ************
module.exports = app;