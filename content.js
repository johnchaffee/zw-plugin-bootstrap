// This is the boot code for the Zipwhip Plugins
console.log("Plugin - Hello from chrome extension");
console.log("Plugin - url: " + window.location.href);

console.log("Plugin - Pre-run");
setTimeout(function () {

  console.log("Plugin - Bootsrapper running...");

  var script = document.createElement('script');

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    var DONE = 4; // readyState 4 means the request is done.
    var OK = 200; // status 200 is a successful return.
    if (xhr.readyState === DONE) {
      if (xhr.status === OK) {
        console.log("Plugin - Got boot.js downloaded"); // 'This is the returned text.'
        script.text = xhr.responseText;
        document.getElementsByTagName('head')[0].appendChild(script);

      } else {
        console.log('Error: ' + xhr.status); // An error occurred during the request.
      }
    }
  };

  var urlForBoot = 'https://raw.githubusercontent.com/chilipeppr/zw-plugin-bootstrap/master/boot.js';
  // var urlForBoot = 'http://localhost:8080/zw-plugin-bootstrap/boot.js';
  console.log("Plugin - Boot url:", urlForBoot);

  xhr.open('GET', urlForBoot);
  xhr.send(null);

  console.log("Plugin - Bootsrapper ran");
}, 1000);

// Tell background.js to add checkmark to toolbar icon once boot.js is loaded
chrome.runtime.sendMessage({
  "message": "add_checkmark"
});
console.log("Plugin - add_checkmark");
