var bannerApp = angular.module('bannerApp', []);

bannerApp.controller('bannerController', ['$scope','$window','$timeout', function($scope,$window,$timeout){
  $scope.bannerdata = [
  {'index':1, 'char':'l'},
  {'index':0, 'char':'e'},
  {'index':5, 'char':'t'},
  {'index':6, 'char':'t'},
  {'index':2, 'char':'l'},
  {'index':7, 'char':'.'},
  {'index':3, 'char':'i'},
  {'index':4, 'char':'o'}
  ];
  $scope.predicate = '';
  var surname = [
    {'index':8, 'char':'t'},
    {'index':9, 'char':'h'},
    {'index':10, 'char':'o'},
    {'index':11, 'char':'m'},
    {'index':12, 'char':'p'},
    {'index':13, 'char':'s'},
    {'index':14, 'char':'o'},
    {'index':15, 'char':'n'}
  ];

  $timeout(function() {
    $scope.predicate = 'index';
  }, 2000);

  $timeout(function() {
    $scope.predicate = 'index';
    $scope.bannerdata = $scope.bannerdata.concat(surname);
  }, 5000);

$scope.st = "200px";

$scope.testing = function(t) {
  return { left: (t) + 'px' };
};

$scope.test = function() {
  $scope.st = "100px";
};





}]);
