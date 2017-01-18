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
  .when('/3', {
    controller: 'ThirdCtrl',
    templateUrl: 'myPartial/famoushighwaylink.html',
  })
  .otherwise({
    redirectTo: '/3'
  })
})



app.controller('FirstCtrl', function($scope) {
  $scope.highwayName = '65'
  $scope.highwayDescription = '65 enters Tennessee from the south near the town of Ardmore, and passes through mostly rural territory for 65 miles (105 km). At exit 1 (Tennessee State Route 7), US-31 separates from the Interstate, having merged at Athens, Alabama, and immediately services Elkton. After skimming the edges of Columbia and Spring Hill, the road comes to an interchange with Interstate 840. The road widens to eight lanes and travels through Franklin and Brentwood, Tennessee, before coming to an interchange with Interstate 440. The highway enters Downtown Nashville, sharing brief concurrences with Interstate 40 and Interstate 24. The road then separates from I-24 and intersects with SR-155 (Briley Parkway) on the north side of Nashville, and widens to ten through lanes. The widest section of I-65 is found on the north side of this interchange, where the road briefly accommodates 15 through lanes (8 northbound, 7 southbound). The road passes through Madison, and comes to an interchange with SR-386 (Vietnam Veterans Blvd) in Goodlettsville, and narrows back to six lanes. SR-386 can only be accessed from the northbound lanes. The highway then enters a largely rural area, passing through White House, and it exits near Portland into Kentucky to the north.'
})

app.controller('SecondCtrl', function($scope) {
  $scope.highwayName = '24'
  $scope.highwayDescription = 'One of the more hazardous stretches of Interstate highway in the United States is located approximately 40 miles (64 km) west of Chattanooga on I-24 in Monteagle, where the highway crosses the Cumberland Plateau. Compared to grades elsewhere, Monteagle 4–6% grade does not come close to the steepest (I-40 between Nashville and Knoxville features 5% grades in each direction as well as a 5% grade north of Nashville on I-24, near Joelton), but the slope is protracted over a distance of several miles. While all motorists need to exercise caution, truckers are particularly vexed by Monteagle, and many have died going through this area. As runaway trucks had been a regular and deadly occurrence, in part of the failure or inability of truckers to slow down to the 35 miles per hour (55 km/h) truck speed limit once on the slope, the eastbound lanes were rebuilt in the late 1980s. This work reduced the grade, widened the road, added a required stopping area with traffic lights for trucks prior to descending the mountain, and added two runaway truck ramps where a truck whose brakes have failed due to overheating can exit into a long pit full of loose gravel to safely stop. Owing to geography, these two ramps are on the left side of the grade. This stretch of highway inspired Johnny Cash to write a song about Monteagle Mountain. It is also mentioned in The Legend, the introductory song for Smokey and the Bandit, which touts the protagonist driving skill in having reportedly navigated his truck down the Monteagle Grade during a heavy rainstorm, despite an airbrake failure.'
})
app.controller('ThirdCtrl', function($scope) {
  //$scope.link = 'myPartial/famoushighway1.html,'
  //$scope.link2 = 'marPartial/famoushighway2.html'
})
