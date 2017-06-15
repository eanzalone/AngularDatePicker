'use strict';

var app = angular.module('myApp', [
  'ngMaterial',
  'ngMessages',
  'mdPickers'
]);
  
app.controller("MainCtrl", ['$scope', '$mdpDatePicker', '$mdpTimePicker', function($scope, $mdpDatePicker, $mdpTimePicker){
  $scope.currentDate = new Date();
  $scope.holdDateAndTime = {
    date: undefined,
    time: undefined
  };
  $scope.dateAndTime = {
    date: undefined,
    time: undefined
  };
  $scope.timeZones = [
    { id: 1, area: 'America/Los_Angeles', abbv: 'PST' },
    { id: 2, area: 'America/New_York', abbv: 'EST' },
    { id: 3, area: 'America/Indiana/Indianapolis', abbv: 'EDT' },
    { id: 4, area: 'America/Denver', abbv: 'MDT' },
    { id: 5, area: 'America/Anchorage', abbv: 'AKDT' },
    { id: 6, area: 'Pacific/Honolulu', abbv: 'HST' },
    { id: 7, area: 'America/Puerto_Rico', abbv: 'AST' }
  ];
  $scope.selectedTZ = { id: 1, area: 'America/Los_Angeles', abbv: 'PST' };
  $scope.disabled = true;

  this.showDatePicker = function(ev) {
    $mdpDatePicker($scope.currentDate, {
      targetEvent: ev
    }).then(function(selectedDate) {
      console.log(selectedDate);
      console.log(moment(selectedDate).format());
      $scope.holdDateAndTime.date = selectedDate;
      $scope.disabled = false;
      if ($scope.holdDateAndTime.time) {
        $scope.holdDateAndTime.time = undefined;
      }
    });;
  };
  
  this.testTimePicker = function(time) {
    console.log($scope.holdDateAndTime.date);
    var selectedDate = $scope.holdDateAndTime.date;
    var dayOfWeek = moment(selectedDate).format('dddd');
    if (dayOfWeek === ('Saturday' || 'Sunday')) {
      console.log('weekend');
    }
  }  

  this.showTimePicker = function(ev) {
    $mdpTimePicker($scope.currentTime, {
      targetEvent: ev
    }).then(function(selectedDate) {
      console.log(selectedDate);
      $scope.holdDateAndTime.time = selectedDate;
      if ($scope.holdDateAndTime.date && $scope.holdDateAndTime.time) {
        console.log("date and time stored");
        $scope.dateAndTime = $scope.holdDateAndTime;
        console.log($scope.dateAndTime);
      }
    });
  }



}]);