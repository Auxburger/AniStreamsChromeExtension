console.log("DOM LOADED");
setTimeout(() => {
  let acceptButton = document.getElementsByClassName("iubenda-cs-accept-btn iubenda-cs-btn-primary");
  let iframe = document.getElementById("embed");
  if (iframe != null) {
    window.open(iframe.children[0].src, '_blank').focus();
  }
}, 1000);
