# angular-pagespeed-insights
AngularJS 1.x service for Google Youtube API

#### Youtube API Docs ####

* https://www.youtube.com/yt/dev/en/api-resources.html

##### Service Methods #####

* getYoutubeChannelStats

#### Example ####

Just add the service as dependency to your controller and make a call.
You need to obtain an API-key before.

```javascript
ngYTInsights.getYoutubeChannelStats('androidpit')
.then(
  function( response ) {
    $scope.uservalue = response;
  }
);
```

#### Demo ####

* http://hello.bnz-power.com/angular-youtube-insights
