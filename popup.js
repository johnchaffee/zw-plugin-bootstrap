// alert('Hello from popup.js');
console.log('Hello from popup.js');

document.addEventListener('DOMContentLoaded', function () {

    console.log("poup.js: DOMContentLoaded");

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

        chrome.tabs.sendMessage(tabs[0].id, { message: "Append iframe to popup.html" }, function (response) {

            let frame = document.createElement('iframe');
            frame.setAttribute('width', '100%');
            frame.setAttribute('height', '600px');
            frame.setAttribute('frameborder', '0');
            frame.setAttribute('id', 'myIframe');
            frame.setAttribute('src', 'http://zipwhip.store/');
            document.body.appendChild(frame);

        });

    });

});