var sampleApp = angular.module('test', ['ngRoute']);

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/secondPage', {
    templateUrl: 'secondPage.html'
      }).
      when('/', {
    templateUrl: 'firstPage.html',
    controller: 'controller'
      });
}]);

sampleApp.controller('controller', function($scope) {
  $scope.loadVideo = function() {
    var iframe = document.getElementById("videoFrame");
    iframe.contentWindow.sendVideoURL('http://clips.vorwaerts-gmbh.de/VfE_html5.mp4');
  }
});