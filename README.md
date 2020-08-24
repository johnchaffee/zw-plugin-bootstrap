# zw-plugin-bootstrap

Chrome Extension for loading the plugin boot.js file and accessing the marketplace. The extension will automatically load the remote boot.js file when visiting app.zipwhip.com. Clicking the Extension icon will load the zipwhp.store in an iframe popup window.

1. Unzip this file to extract the zw-plugin-bootstrap folder.
2. In Chrome, go to chrome://extensions/ and click “Developer mode” in the top right.
3. Click “Load unpacked extension…” and select the the zw-plugin-bootstrap directory. 
4. A Z icon should appear in the Chrome toolbar.
5. Open a new tab and go to app.zipwhip.com.
6. View the Console and look for the "Plugin -" messages to see if it's working.
7. Click the Z icon in the toolbar to view the zipwhip.store in a popup.

You can make changes to the content.js file to load a local copy of the boot.js file or any other changes. If you make changes to any files, you'll have to reload the Extension by opening the Extensions window and clicking the reload icon.