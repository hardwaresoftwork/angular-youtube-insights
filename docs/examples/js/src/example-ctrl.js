/**
* Created by Erik Woitschig
* http://www.bnz-power.com
*/

(function(){

var Controllers = angular.module('Controllers', []);

// project defaults
Controllers.value('project', {
  title: 'Angular-Youtube-Insights',
});

Controllers.controller('HomeCtrl', ['$scope', '$routeParams', 'ngYTInsights', '$location', 'project',
function($scope, $routeParams, ngYTInsights, $location, project) {

  $scope.project = { title: project.title };

  $scope.milestones = [
        {     id    :   1,
              body  : "project started",
              date  : "2015-03-17"
        },
        {     id    :   2,
              body  : "moved to github",
              date  : "2015-09-20"
        }
        ];
}
]);

Controllers.controller('YoutubeInternalCtrl', ['$scope', '$routeParams', 'ngYTInsights', '$location', 'project',
function($scope, $routeParams, ngYTInsights, $location, project) {

  $scope.project = { title: project.title };

  $scope.results = [];

  $scope.sites = [{
    site: 'http://androidpit.de',
    channel: 'androidpit',
    country: 'de',
    sitedata: {}
  },{
    site: 'http://androidpit.com',
    country: 'us',
    channel: 'androidpitcom',
    sitedata: {}
  },{
    site: 'http://androidpit.com.br',
    channel: 'androidpitbr',
    country: 'br',
    sitedata: {}
  },{
    site: 'http://androidpit.it',
    channel: 'androidpitit',
    country: 'it',
    sitedata: {}
  },{
    site: 'http://androidpit.es',
    channel: 'androidpites',
    country: 'es',
    sitedata: {}
  },{
    site: 'http://androidpit.fr',
    channel: 'androidpitfr',
    country: 'fr',
    sitedata: {}
  }
];


  var sitelength = $scope.sites.length;

  for (var i = 0; i < sitelength; i++) {
    ngYTInsights.getChannelStats($scope.sites[i].channel)
    .then(
      function( response ) {
        $scope.temp = response;
        $scope.results.push({
          ytinsights : $scope.temp
        });
      }
    );
  }


}]);

Controllers.controller('YoutubeExternalCtrl', ['$scope', '$routeParams', 'ngYTInsights', '$location', 'project',
function($scope, $routeParams, ngYTInsights, $location, project) {

  $scope.project = { title: project.title };

  $scope.results = [];

  $scope.sites = [{
    channel: 'baixakiAndroid',
    sitedata: {}
  },{
    channel: 'phandroid',
    sitedata: {}
  },{
    channel: 'androidpolice',
    sitedata: {}
  },{
    channel: 'AndroidCentral',
    sitedata: {}
  },{
    channel: 'AndroidAuthority',
    sitedata: {}
  },{
    channel: 'androidtapp',
    sitedata: {}
  }];

  var sitelength = $scope.sites.length;

  for (var i = 0; i < sitelength; i++) {
    ngYTInsights.getChannelStats($scope.sites[i].channel)
    .then(
      function( response ) {
        $scope.temp = response;
        $scope.results.push({
          ytinsights : $scope.temp
        });
      }
    );
  }


}]);

Controllers.controller('RapCtrl', ['$scope', '$routeParams', 'ngYTInsights', '$location', 'project',
function($scope, $routeParams, ngYTInsights, $location, project) {

  $scope.project = { title: project.title };

  $scope.results = [];

  $scope.sites = [{
    channel: 'bushido'
  },{
    channel: 'FlerTV2010'
  },{
    channel: 'www16barsde'
  },{
    channel: 'wwwHiphopDe'
  }];

  var sitelength = $scope.sites.length;

  for (var i = 0; i < sitelength; i++) {
    ngYTInsights.getChannelStats($scope.sites[i].channel)
    .then(
      function( response ) {
        $scope.temp = response;
        $scope.results.push({
          ytinsights : $scope.temp
        });
      }
    );
  }


}]);


Controllers.controller('PlaylistsCtrl', ['$scope', '$routeParams', 'ngYTInsights', '$location', 'project',
function($scope, $routeParams, ngYTInsights, $location, project) {

  $scope.project = { title: project.title };

  ngYTInsights.getChannelPlaylists($routeParams.playlistid)
    .then(
      function( response ) {
        $scope.results = response;

      }
    );


}]);

Controllers.controller('PlaylistsItemsCtrl', ['$scope', '$routeParams', 'ngYTInsights', '$location', 'project',
function($scope, $routeParams, ngYTInsights, $location, project) {

  $scope.project = { title: project.title };

  ngYTInsights.getPlaylistItems($routeParams.playlistid)
    .then(
      function( response ) {
        $scope.results = response;
      }
    );

}]);

Controllers.controller('VideoCtrl', ['$scope', '$routeParams', 'ngYTInsights', '$location', 'project',
function($scope, $routeParams, ngYTInsights, $location, project) {

  $scope.project = { title: project.title };

  ngYTInsights.getVideoDetails($routeParams.videoid)
    .then(
      function( response ) {
        $scope.results = response;
      }
    );

}]);


})();
