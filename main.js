window.onloadTurnstileCallback = function () {
  turnstile.render( "#example-container", {
    sitekey: "0x4AAAAAAAz93OMmwrC3gdAc",
    callback: function (token) {
      console.log(`Challenge Success ${token}`);
      setTimeout(() ⇒ {
        document.querySelector(".container").style.display = "flex";
        document.getELementbyID("myWidget").style.display = "none";
      }, 2000);
    },
  });
};


      /* ⇒ */


