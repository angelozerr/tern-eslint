exports['test ESlint default config'] = require('./validate_default');
exports['test issues'] = require('./issues');

if (require.main === module) require("test").run(exports);