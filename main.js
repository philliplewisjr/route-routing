console.log('Angular')

var app = angular.module('testApp', ['ngRoute'])

app.config(($routeProvider)=> {
 $routeProvider
  .when('/1', {
    controller: 'FirstCtrl',
    templateUrl: 'myPartial/famoushighway1.html',
  })
  .when('/2', {
    controller: 'SecondCtrl',
    templateUrl: 'myPartial/famoushighway2.html',
  })
})



app.controller('FirstCtrl', function($scope) {
  $scope.highwayName = 'Angular 75'
  $scope.highwayDescription = 'more steps'
})

app.controller('SecondCtrl', function($scope) {
  $scope.highwayName = 'jQuery 24east'
  $scope.highwayDescription = 'library of short cuts'
})
