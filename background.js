// alert('Hello from chrome extension background.js');
console.log("background.js: Hello from chrome extension");

// Listen for message 'add_checkmark'
// Adds a checkmark to toolbar icon when active tab is zipwhip.com and bootstrap file is loaded
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            console.log("background.js: request.message: " + request.message);
            let thisTab = {};
            if (request.message === "add_checkmark") {
                console.log("background.js: add_checkmark thisTab.id: " + thisTab.id);
                chrome.browserAction.setBadgeText({
                    text: "✓",
                    tabId: thisTab.id
                });
            }
        });
    }
);