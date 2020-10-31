"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installHelper = void 0;
var exec = require('child_process').exec;
exports.installHelper = function (command, onSuccess, spinner) {
    return new Promise(function (resolve, reject) {
        var process = exec(command, function (err, stdout, stderr) {
            if (err) {
                return err;
            }
            if (stdout) {
                return "" + stdout;
            }
            if (stderr) {
                return stderr;
            }
        });
        // spinner.start();
        process.on('exit', function () {
            // spinner.stop();
            onSuccess();
            resolve();
        });
    });
};
