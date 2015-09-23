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

    var baseUrl = 'https://www.googleapis.com/youtube/v3/';
    var apikey = '&key=AIzaSyCYwYrQTfWWYknZTnwHNLF0IhyUz-grzUw';

    return({
            getChannelStats         : getChannelStats,
            getChannelPlaylists     : getChannelPlaylists,
            getPlaylistItems        : getPlaylistItems
    });

function getChannelStats(channelname) {

  var request = $http({
    method: "get",
    cache: true,
    url: baseUrl + 'channels?part=snippet,contentDetails,statistics&forUsername=' + channelname + apikey
  });

  return( request.then( handleSuccess, handleError ) );

}

function getChannelPlaylists(channelid) {

  var request = $http({
    method: "get",
    cache: true,
    url: baseUrl + 'playlists?part=snippet&maxResults=50&channelId=' + channelid + apikey
  });

  return( request.then( handleSuccess, handleError ) );

}

function getPlaylistItems(playlistid) {

  var request = $http({
    method: "get",
    cache: true,
    url: baseUrl + 'playlistItems?part=snippet&maxResults=50&playlistId=' + playlistid + apikey
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
