//import { Mongoose } from 'mongoose';

//Description: This files handles all the incoming and outgoing routes

//Required modules
const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const urlencodedparser = bodyparser.urlencoded({extended:false});
const passport = require('passport');
const controller = require('../controller/controller');



//--------------------HOME-----------------------
router.get('/', function(req, res, next)
{
    const feed = {};
    feed.msg="home";
    res.render("index", {data:feed});
});

//--------------------LOGIN-----------------------
//Login POST Route
router.post('/', urlencodedparser, controller.auth);
router.post('/login', urlencodedparser, controller.auth);

//--------------------SIGNUP----------------------
//Signup GET Route
router.get('/signup', function(req, res, next)
{
    const feed = {};
    res.render("signup", {data:feed});
});
//Signup POST Route
router.post('/signup', urlencodedparser, controller.insert);


/* GET complaint. */
router.get('/complain', controller.reqAuth, function(req, res, next){
  res.render('complain');
});

router.get('/get-data', function(req, res, next) {
  complaint.find()
      .then(function(doc) {
        res.render('complain', {items: doc});
      });
});

router.post('/insert', function(req, res, next) {
  var item = {
    email: req.body.email,
    subject: req.body.subject,
    complaint: req.body.complaint
  };

  var data = new complaint(item);
  data.save();

  res.redirect('/');
});

//--------------------FEEDBACK--------------------
//Feedback GET Route
router.get('/feedback', controller.reqAuth, function(req, res, next)
{
    const feed = {};
    feed.msg="feedback";
    res.render("feedback",
    {
        firstname: req.session.user.firstname,
        lastname: req.session.user.lastname,
        email: req.session.user.email,
        data: feed
    });
    console.log("Autofill completed");
});


//---------------PASSPORT CONFIG-----------------
// used to serialize the user for the session
passport.serializeUser(function(username, done) {
    done(null, username); 
});

// used to deserialize the user
passport.deserializeUser(function(username, done) {
        done(null, username);
});

module.exports = router;