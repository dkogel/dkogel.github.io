window.onloadTurnstileCallback = function () {
  turnstile.render('#myWidget', {
    sitekey: '0x4AAAAAAAz93OMmwrC3gdAc',
    callback: function(token) {
      console.log(`Challenge Success ${token}`);
      setTimeout(()   {
        document.querySelector(".container").style.display = "flex";
        docucment.getELementbyID("myWidget").style.display = "none";
      }, 2000);
    },
  });
};
