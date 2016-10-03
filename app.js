(function(){

  var options = INSTALL_OPTIONS;
  var isPreview = INSTALL_ID == "preview";

  if (!options.app_id || !options.app_code || !options.name || !options.email) {
    return;
  }

  if (!options.avatar && !options.is_premium) {
    window.gotchaSettings = {
    	app_id: options.app_code, // GOTC-0000xx
    	name: options.name,
    	email: options.email,
    };
  } else if (!options.avatar && options.is_premium) {
    window.gotchaSettings = {
    	app_id: options.app_code, // GOTC-0000xx
    	name: options.name,
    	email: options.email,
      is_premium: options.is_premium
    };
  } else if (options.avatar && !options.is_premium) {
    window.gotchaSettings = {
    	app_id: options.app_code, // GOTC-0000xx
    	name: options.name,
    	email: options.email,
    	avatar: options.avatar
    };
  } else {
    window.gotchaSettings = {
    	app_id: options.app_code, // GOTC-0000xx
    	name: options.name,
    	email: options.email,
    	avatar: options.avatar,
      is_premium: options.is_premium
    };
  }

  var script = document.createElement('script');
  document.body.appendChild(script);
  script.setAttribute("id","gotcha-embed");
  //script.src = 'https://api.gotcha.io/widgets/'+options.app_id+'/gotcha.js';

  if (isPreview){
      function async_load(){
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        var theUrl = "https://api.gotcha.io/widgets/"+options.app_id+"/gotcha.js?preview=true";
        s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "ref=" + encodeURIComponent(window.location.href);
        var embedder = document.getElementById("gotcha-embed");
        embedder.parentNode.insertBefore(s, embedder);
      }
      if (window.attachEvent) {
        window.attachEvent("onload", async_load);
      } else {
       window.addEventListener("load", async_load, false);
      }
  } else {
    function async_load(){
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      var theUrl = "https://api.gotcha.io/widgets/"+options.app_id+"/gotcha.js";
      s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "ref=" + encodeURIComponent(window.location.href);
      var embedder = document.getElementById("gotcha-embed");
      embedder.parentNode.insertBefore(s, embedder);
    }
    if (window.attachEvent) {
      window.attachEvent("onload", async_load);
    } else {
     window.addEventListener("load", async_load, false);
    }
  }

  // if (isPreview) {
  //   script.src += "?preview=true";
  // }

})();
