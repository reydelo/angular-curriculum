app.controller("HomeController", function($scope) {
  $scope.address = "1356 Pearl St";
});

app.controller("DogsController", function($scope) {
  $scope.dogName = "Nelly";
});

app.controller("ProjectsController", function($scope) {
  $scope.projectName = "SoundCrowd";
});

app.controller("MainController", function($scope, $location) {
  $scope.active = function(url) {
    return url === $location.path();
  }
});

app.controller("CalculatorController", function($scope, $routeParams) {
  console.log($routeParams);
  var operator = $routeParams.operator;
  var x = +$routeParams.x;
  var y = +$routeParams.y;
  console.log(operator);
  if (operator == "add") {
    console.log("hey!")
    $scope.answer = x + y;
  }
  if (operator == "division") {
    $scope.answer = x / y;
  }
  if (!x) {
    $scope.answer = "You fucked up!"
  }
})
