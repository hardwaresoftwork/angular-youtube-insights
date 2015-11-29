# angular-youtube-insights
AngularJS 1.x service for Google Youtube API

#### Youtube API Docs ####

* https://www.youtube.com/yt/dev/en/api-resources.html

##### Service Methods #####

*  getChannelStats
*  getChannelPlaylists
*  getPlaylistItems
*  getVideoDetails

#### Example ####

Just add the service as dependency to your controller and make a call.
You need to obtain an API-key before.

```javascript
ngYTInsights.getChannelStats('YOUR_CHANNELNAME')
.then(
  function( response ) {
    $scope.channeldata = response;
  }
);
```

#### Demo ####

* http://hello.bnz-power.com/angular-youtube-insights/docs/examples
