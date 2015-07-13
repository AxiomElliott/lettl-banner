var bannerApp = angular.module('bannerApp', []);

bannerApp.controller('bannerController', ['$scope','$window','$timeout', function($scope,$window,$timeout){
  $scope.bannerdata = [
  {'index':1, 'charclasses':'char', 'char':'e'},
  {'index':0, 'charclasses':'char', 'char':'l'},
  {'index':4, 'charclasses':'char', 'char':'l'},
  {'index':6, 'charclasses':'char', 'char':'i'},
  {'index':7, 'charclasses':'char', 'char':'o'},
  {'index':2, 'charclasses':'char', 'char':'t'},
  {'index':3, 'charclasses':'char', 'char':'t'},
  {'index':5, 'charclasses':'char', 'char':'.'}
  ];
  $scope.charclasses = "char";
  var surname = [
    {'index':8, 'charclasses':'animated tada char', 'char':'T'},
    {'index':9, 'charclasses':'animated tada char', 'char':'h'},
    {'index':10, 'charclasses':'animated tada char', 'char':'o'},
    {'index':11, 'charclasses':'animated tada char', 'char':'m'},
    {'index':12, 'charclasses':'animated tada char', 'char':'p'},
    {'index':13, 'charclasses':'animated tada char', 'char':'s'},
    {'index':14, 'charclasses':'animated tada char', 'char':'o'},
    {'index':15, 'charclasses':'animated tada char', 'char':'n'}
  ];

  $timeout(function() {
    for(i = 0; i < $scope.bannerdata.length; i++) {
      $scope.bannerdata[i].index = i;
    }
  }, 4000);

  $timeout(function() {
    // $scope.bannerdata = $scope.bannerdata.concat(surname);
    // for(i = 0; i < $scope.bannerdata.length; i++) {
    //   $scope.bannerdata[i].charclasses += ' huechange';
    // }
    $scope.bannerdata[0].char = 'E';
    $scope.bannerdata[0].charclasses += ' animated tada';
  }, 9000);

  $scope.getLeftPosition = function(index){
    return (index * 25) + 'px';
  }

}]);
