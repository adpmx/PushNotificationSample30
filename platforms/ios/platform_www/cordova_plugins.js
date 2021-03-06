cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.core.dialogs/www/notification.js",
        "id": "org.apache.cordova.core.dialogs.notification",
        "pluginId": "org.apache.cordova.core.dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.AudioHandler/www/MediaError.js",
        "id": "org.apache.cordova.core.AudioHandler.MediaError",
        "pluginId": "org.apache.cordova.core.AudioHandler",
        "clobbers": [
            "window.MediaError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.AudioHandler/www/Media.js",
        "id": "org.apache.cordova.core.AudioHandler.Media",
        "pluginId": "org.apache.cordova.core.AudioHandler",
        "clobbers": [
            "window.Media"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.console/www/console-via-logger.js",
        "id": "org.apache.cordova.core.console.console",
        "pluginId": "org.apache.cordova.core.console",
        "clobbers": [
            "console"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.console/www/logger.js",
        "id": "org.apache.cordova.core.console.logger",
        "pluginId": "org.apache.cordova.core.console",
        "clobbers": [
            "cordova.logger"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.PushPlugin": "2.0.1",
    "org.apache.cordova.core.dialogs": "0.2.0",
    "org.apache.cordova.core.AudioHandler": "0.2.1",
    "org.apache.cordova.core.console": "0.2.0"
}
// BOTTOM OF METADATA
});