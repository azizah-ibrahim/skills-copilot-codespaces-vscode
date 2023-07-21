// Create web server

var express = require('express');
var router = express.Router();

// Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost:27017/week6lab';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

// Require comment model
var Comment = require('../models/comment');

// GET comment home page
router.get('/', function(req, res, next) {
  res.send('Comments home page');
});

// GET request for creating a comment
router.get('/create', function(req, res, next) {
  res.send('Create comment');
});

// POST request for creating a comment
router.post('/create', function(req, res, next) {
  res.send('Create comment');
});

// GET request for deleting a comment
router.get('/delete', function(req, res, next) {
  res.send('Delete comment');
});

// POST request for deleting a comment
router.post('/delete', function(req, res, next) {
  res.send('Delete comment');
});

// GET request for updating a comment
router.get('/update', function(req, res, next) {
  res.send('Update comment');
});

// POST request for updating a comment
router.post('/update', function(req, res, next) {
  res.send('Update comment');
});

// GET request for one comment
router.get('/:id', function(req, res, next) {
  res.send('One comment');
});

// GET request for all comments
router.get('/all', function(req, res, next) {
  res.send('All comments');
});

module.exports = router;