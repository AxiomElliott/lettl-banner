var bannerApp = angular.module('bannerApp', []);

bannerApp.controller('bannerController', ['$scope','$window','$timeout', function($scope,$window,$timeout){
  $scope.bannerdata = [
  {'index':0, 'char':'l'},
  {'index':1, 'char':'e'},
  {'index':2, 'char':'t'},
  {'index':3, 'char':'t'},
  {'index':4, 'char':'l'},
  {'index':5, 'char':'.'},
  {'index':6, 'char':'i'},
  {'index':7, 'char':'o'}
  ];
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

  var newIndices = [1,0,5,6,2,7,3,4];

  $timeout(function() {
    for(i = 0; i < $scope.bannerdata.length; i++) {
      $scope.bannerdata[i].index = newIndices[i];
      console.log(newIndices[i]);
    }
  }, 2000);

  $timeout(function() {
    $scope.bannerdata = $scope.bannerdata.concat(surname);
  }, 5000);

  $scope.getLeftPosition = function(index){
    return (index * 20 + 200) + 'px';
  }

}]);
