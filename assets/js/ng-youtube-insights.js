/**
* Angular-Youtube-Insights
* AngularJS Service for Google Youtube API
*
* Created by Erik Woitschig.
* http://bnz-power.com
* http://twitter.com/devbnz

*/

(function(){


  var insights = angular.module('ngYTInsights', []);

  insights.service("ngYTInsights",
  function( $http, $q) {

    var baseUrl = 'https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&forUsername=';
    var apikey = '&key=AIzaSyCYwYrQTfWWYknZTnwHNLF0IhyUz-grzUw';

    return({
            getYoutubeChannelStats        : getYoutubeChannelStats
    });

function getYoutubeChannelStats(channel) {

  var chan = channel;

  var request = $http({
    method: "get",
    cache: true,
    url: baseUrl + chan + apikey
  });

  return( request.then( handleSuccess, handleError ) );

}

function handleError( response ) {

  if (
    ! angular.isObject( response.data ) ||
    ! response.data.message
  ) {

    return( $q.reject( "An unknown error occurred." ) );

  }

  return( $q.reject( response.data.message ) );

}

function handleSuccess( response ) {

  return( response.data );

}

}
);


})();
