chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'var s=document.createElement("style");s.id="div_density_styles";s.innerHTML="*,html,body{background-image:none!important;}";document.head.appendChild(s); var imgs = document.getElementsByTagName("img"); for(var i = 0, l = imgs.length; i < l; i++){ imgs[i].src= ""; imgs[i].style.opacity = 0; }'
  });
});