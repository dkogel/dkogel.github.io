window.onloadTurnstileCallback = function () {
  turnstile.render("#myWidget", {
    sitekey: "<0x4AAAAAAAz93OMmwrC3gdAc>",
    callback: function (token) {
      console.log(`Challenge Success ${token}`);
      
    },
  });
};
