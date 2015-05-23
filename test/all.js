exports['test ESlint default config'] = require('./validate_default');

if (require.main === module) require("test").run(exports);