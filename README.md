# SourInsights #

### AngularJS module for different Analysis ###


#### Features ####
##### APIs #####

* Google Pagespeed Insights
* Youtube Data v3
* Facebook (planned)  
* Google+

##### Service Methods #####

* getSiteInsights
* getDesktopSiteInsights
* getMobileSiteInsights
* getYoutubeChannelStats

#### Example ####

Just add the service as dependency to your controller and make a call.

```javascript
SourSound.getYoutubeChannelStats('androidpit')
.then(
  function( response ) {
    $scope.uservalue = response;
  }
);
```

#### Demo ####

* http://insights.bnz-power.com
