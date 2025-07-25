var idSite = 1;
var hostname = window.location.hostname;
var matomoTrackingApiUrl = "https://matomo." + hostname + "/matomo.php";

var _paq = (window._paq = window._paq || []);
_paq.push(["setTrackerUrl", matomoTrackingApiUrl]);
_paq.push(["setSiteId", idSite]);
_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);
