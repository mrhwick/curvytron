var config,
    packageInfo = require('../package.json');

try {
    config = require('../config.json');
} catch (error) {
    config = {
        port: process.env.PORT,
        inspector: { enabled: false }
    };
}

var server = new Server({ port: config.port });

if (config.inspector.enabled) {
    try {
        new Inspector(server, config.inspector);
    } catch (error) {
        console.error('Inspector error:', error);
    }
}

module.exports = server;
