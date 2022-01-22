
function openWindow() {
  let acceptButton = document.getElementsByClassName("iubenda-cs-accept-btn iubenda-cs-btn-primary");
  let iframe = document.getElementById("embed");
  if (iframe != null) {
    window.open(iframe.children[0].src, '_blank').focus();
  }

}

setTimeout(() => openWindow(), 100);

// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  // First, validate the message's structure.
  if (msg.action === 'open') {
    // Collect the necessary data. 
    // (For your specific requirements `document.querySelectorAll(...)`
    //  should be equivalent to jquery's `$(...)`.)
    openWindow();
  }
});