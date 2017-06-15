'use strict';

var app = angular.module('myApp', [
  'ngMaterial',
  'ngMessages',
  'mdPickers'
]);

app.controller('ViewCtrl', function() {
  var dateObjects = [{
    date: moment().format('MMMM Do YYYY'),
    time: moment().format('h:mm:ss a')
  },
  {
    date: moment().format('dddd'),
    time: moment().format()
  }];
  // console.log(this);
  this.testObject = dateObjects;
  // console.log(testery);
  this.myDate = new Date();
  this.isOpen = false;
  $( "#target" ).click(function() {
    console.log("Handler for .click() called.");
    console.log(this);
    // debugger;
  });
});

  
app.controller("MainCtrl", ['$scope', '$mdpDatePicker', '$mdpTimePicker', function($scope, $mdpDatePicker, $mdpTimePicker){
  $scope.currentDate = new Date();
  this.showDatePicker = function(ev) {
    $mdpDatePicker($scope.currentDate, {
      targetEvent: ev
    }).then(function(selectedDate) {
      // console.log(selectedDate);
      $scope.selectedDate = selectedDate;
      // $scope.currentDate = selectedDate;
    });;
  };
  
  // this.filterDate = function(date) {
  //   return moment(date).date() % 2 == 0;
  // };
  
  this.showTimePicker = function(ev) {
    $mdpTimePicker($scope.currentTime, {
      // debugger;
      targetEvent: ev
    }).then(function(selectedDate) {
      // console.log(selectedDate);
      console.log($scope.selectedDate);
      // debugger;
      $scope.selectedTime = selectedDate;
      // $scope.currentTime = selectedDate;
    });;
  }  
}]);