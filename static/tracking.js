var idSite = 1;
var matomoTrackingApiUrl = 'https://matomo.iroco.co:8080/matomo.php';

var _paq = window._paq = window._paq || [];
_paq.push(['setTrackerUrl', matomoTrackingApiUrl]);
_paq.push(['setSiteId', idSite]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);