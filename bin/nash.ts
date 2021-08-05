require = require('esm')(module); // enables us to use import in the other files
require('../src/cli').cli(process.argv);
