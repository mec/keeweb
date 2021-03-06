const Launcher = require('../comp/launcher');

const RuntimeInfo = {
    version: '@@VERSION',
    buildDate: '@@DATE',
    commit: '@@COMMIT',
    userAgent: navigator.userAgent,
    launcher: Launcher ? Launcher.name + ' v' + Launcher.version : ''
};

module.exports = RuntimeInfo;
