var bannerApp = angular.module('bannerApp', []);

bannerApp.controller('bannerController', ['$scope','$window','$timeout', function($scope,$window,$timeout){
  $scope.bannerdata = [
  {'index':1, 'charclasses':'char', 'char':'e'},
  {'index':-1, 'charclasses':'char', 'char':'l'},
  {'index':2, 'charclasses':'char', 'char':'l'},
  {'index':3, 'charclasses':'char', 'char':'i'},
  {'index':3, 'charclasses':'char', 'char':'o'},
  {'index':-3, 'charclasses':'char', 'char':'t'},
  {'index':-3, 'charclasses':'char', 'char':'t'},
  {'index':-2, 'charclasses':'char', 'char':'.'}
  ];
  var surname = [
    {'index':0, 'charclasses':'char', 'char':'T'},
    {'index':0, 'charclasses':'char', 'char':'h'},
    {'index':0, 'charclasses':'char', 'char':'o'},
    {'index':0, 'charclasses':'char', 'char':'m'},
    {'index':0, 'charclasses':'char', 'char':'p'},
    {'index':0, 'charclasses':'char', 'char':'s'},
    {'index':0, 'charclasses':'char', 'char':'o'},
    {'index':0, 'charclasses':'char', 'char':'n'}
  ];

  $scope.fasttransition = false;
  $scope.offset = 60;

  $timeout(function() {
    for(i = 0; i < $scope.bannerdata.length; i++) {
      $scope.bannerdata[i].index = 0;
    }
  }, 4000);

  $timeout(function() {
    $scope.bannerdata = $scope.bannerdata.concat(surname);
    for(i = 0; i < $scope.bannerdata.length; i++) {
      $scope.bannerdata[i].charclasses += ' animated tada';
    }
    $scope.fasttransition = true;
    $scope.offset = 0;
    $scope.bannerdata[0].char = 'E';
  }, 15000);

  $timeout(function() {
    $scope.bannerdata = $scope.bannerdata.concat(surname);
    for(i = 0; i < $scope.bannerdata.length; i++) {
      $scope.bannerdata[i].charclasses += ' huechange';
    }
  }, 17000);


  $scope.getCharStyling = function(index){
    return {'left':(index * 15 + $scope.offset) + 'px', 'transition':$scope.fasttransition?0.5 + 's' : 9 + 's'};
  }

}]);
