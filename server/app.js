const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const schoolModel = require('./models/School');

const schoolRouter = require('./routes/schoolRouter');

// docker
const mongodbUrl = 'mongodb://mongo:27017/schools';

// localhost
// const mongodbUrl = 'mongodb://localhost/schools';

const app = express();

//cors
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', schoolRouter);

// connect to database
mongoose.connect(mongodbUrl, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDb Connected');
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

function addSampleSchools() {
  const sch1 = {
    name: 'Royal Academy',
    address: {
      street: 'Marple Street', suburb: 'Lombardy', postcode: '12353', state: 'WP'
    },
    studentCount: 85,
  };

  const sch2 = {
    name: 'Hodgens Highschool',
    address: {
      street: 'Marple Street', suburb: 'Lombardy', postcode: '12353', state: 'WP'
    },
    studentCount: 85,
  };

  const sch3 = {
    name: 'Hopkins Elementary',
    address: {
      street: 'Marple Street', suburb: 'Lombardy', postcode: '12353', state: 'WP'
    },
    studentCount: 85,
  };

  const sch4 = {
    name: 'Roland Gilliard',
    address: {
      street: 'Marple Street', suburb: 'Lombardy', postcode: '12353', state: 'WP'
    },
    studentCount: 85,
  };

  schoolModel.create(sch1, (error) => {
    if (error) { console.log('Error adding school ', error); }
  });
  schoolModel.create(sch2, (error) => {
    if (error) { console.log('Error adding school ', error); }
  });
  schoolModel.create(sch3, (error) => {
    if (error) { console.log('Error adding school ', error); }
  });
  schoolModel.create(sch4, (error) => {
    if (error) { console.log('Error adding school ', error); }
  });
}

// add sample schools
schoolModel.find({}, (err, schools) => {
  if (err) console.log(err);
  else if (schools.length === 0) {
    addSampleSchools();
  }
});
