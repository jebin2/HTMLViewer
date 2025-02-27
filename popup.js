// popup.js
document.addEventListener('DOMContentLoaded', function() {
  const htmlInput = document.getElementById('htmlInput');
  const openInNewTabButton = document.getElementById('openInNewTab');

  openInNewTabButton.addEventListener('click', function() {
    chrome.runtime.sendMessage({
      action: 'openHTML',
      html: htmlInput.value,
      newTab: true
    });
  });

});