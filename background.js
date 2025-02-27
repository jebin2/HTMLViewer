// background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'openHTML') {
    // Create a data URI from the HTML
    const dataUrl = 'data:text/html;charset=utf-8,' + encodeURIComponent(request.html);
    
    if (request.newTab) {
      // Open in a new tab
      chrome.tabs.create({url: dataUrl});
    } else {
      // Open in the current tab
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, {url: dataUrl});
      });
    }
  }
});