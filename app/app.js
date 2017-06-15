'use strict';

var app = angular.module('myApp', [
  'ngMaterial',
  'ngMessages'
]);

app.controller('View1Ctrl', function() {
  var dateObject = {
    date: moment().format('MMMM Do YYYY'),
    time: moment().format('h:mm:ss a')
  };
  console.log(this);
  this.testObject = dateObject;
  // console.log(testery);
  this.myDate = new Date();
  this.isOpen = false;
  $( "#target" ).click(function() {
    console.log("Handler for .click() called.");
    console.log(this);
  });
});