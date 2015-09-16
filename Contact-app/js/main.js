// add scripts
var app = angular.module("myApp", [])

app.controller("Contacts", function($scope) {
 $scope.contacts = [];
 $scope.addContact = function () {
   $scope.newContact = {
   name: $scope.name,
   email: $scope.email,
   phone: $scope.phone
 };
 $scope.contacts.push($scope.newContact);
 console.log($scope.contacts);
 $scope.name = "";
 $scope.email = "";
 $scope.phone = "";
 };
});
