var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var offerdex = require('./routes/offers');

var app = express();

app.use(cors())
app.options('*', cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var router = express.Router()

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/offers', offerdex)

app.use('/api',router)

module.exports = app;
