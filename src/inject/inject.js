chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		
    // ----------------------------------------------------------
    // All external links should open in new tab/window. Internal links are relative.
    var anchors = document.querySelectorAll('a');
    var linksFixed = 0;
    for (var i = 0; i < anchors.length; i++) {
      if (anchors[i].host !== window.location.hostname) {
        linksFixed = linksFixed + 1;
        anchors[i].setAttribute('target', '_blank');
      }
    }

    console.log("JIRA Link Fixer - Loaded, " + linksFixed + " link" + (linksFixed > 1 ? "s" : "") + " fixed!");
	}
	}, 10);
});