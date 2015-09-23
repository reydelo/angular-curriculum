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
