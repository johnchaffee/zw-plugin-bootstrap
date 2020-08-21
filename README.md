# zw-plugin-bootstrap

Here is a Chrome Extension that replaces Tampermonkey for loading the bootstrap js file. Just install the extension and it will automatically load jquery and boot.js when visiting app.zipwhip.com. 

1. Unzip this file to extract the zw-plugin-bootstrap folder.
2. In Chrome, go to chrome://extensions/ and click “Developer mode” in the top right.
3. Disable the Tampermonkey Extension. You can remove it entirely later once you're confident this works.
4. Click “Load unpacked extension…” and select the the zw-plugin-bootstrap directory. 
5. An orange Z icon should appear in the Chrome toolbar.
6. Open a new tab and go to app.zipwhip.com and the orange Z icon should show a blue checkmark on it.
7. View the Console and look for the "Plugin -" messages to see if it's working.

If you modify the boot.js code, go back to the chrome://extensions/ page and reload the extension.