"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.askAboutPackageManager = void 0;
var inquirer = require('inquirer');
function askAboutPackageManager() {
    var questions = [
        {
            name: 'Stack',
            type: 'list',
            choices: ['npm', 'yarn'],
            message: 'Choose your favorite package manager',
            filter: function (value) {
                return (value === 'npm') ? 'npm' : 'yarn';
            }
        }
    ];
    return inquirer.prompt(questions);
}
exports.askAboutPackageManager = askAboutPackageManager;
