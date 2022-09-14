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
app.set('views', path.resolve(__dirname, 'src', 'views')); // define localização da pasta das views

// ************ Route System require and use() ************
const homeRouter = require('./src/routes/home');
const storeRouter = require('./src/routes/store');
const detailsRouter = require('./src/routes/details');
const cartRouter = require('./src/routes/cart');
const registerRouter = require('./src/routes/register');
const loginRouter = require('./src/routes/login');
const forgotPasswordRouter = require('./src/routes/forgotPassword');
const profileRouter = require('./src/routes/profile');
const editUserRouter = require('./src/routes/editUser');
const paymentRouter = require('./src/routes/payment');
const orderSuccessRouter = require('./src/routes/orderSuccess');
const trackCodeRouter = require('./src/routes/trackCode');
const trackOrderRouter = require('./src/routes/trackOrder');
const aboutRouter = require('./src/routes/about');

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
  res.render('error');
});

// ************ exports app - dont'touch ************
module.exports = app;