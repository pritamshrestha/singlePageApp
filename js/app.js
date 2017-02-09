// this is for the angularapp
var app=angular.module("pritam",['ngRoute'])
// this is for the ngroute configuration
app.config(function($routeProvider){
	$routeProvider
	             .when('/',{
		            templateUrl:'views/home.html'
	                   })
	              .when('/about',{
	              	templateUrl:'views/about.html'
	              })
	              .when('/cantact',{
	              	templateUrl:'views/cantact.html'
	              })
                  .otherwise({redirectTo:'/'
              })
})
