 "use strict"; 

 var app = angular.module('spotifyApp',[]);

 app.controller('mainCtrl',function($scope,$http){
 	$http
 		.get('/spotify')
 		.success(function(data){
 			$scope.data = data.items;
 		});
 })

