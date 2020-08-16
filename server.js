const express = require('express');
const bodyParser = require('body-parser');

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
});

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

require('./app/routes/post.routes.js/index.js')(app);

app.get('/', (req, res) => {
    res.json({"message": "successfully started"});
});

app.listen(3030, () => {
    console.log("Server is listening on port 3030");
});