"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.askAboutStack = void 0;
var inquirer = require('inquirer');
function askAboutStack() {
    var questions = [
        {
            name: 'Stack',
            type: 'list',
            choices: ['Front-end', 'Back-end', 'Full-stack'],
            message: 'Choose a stack for development',
            filter: function (value) {
                return (value === 'Front-end') ? 'fe' : (value === 'Back-end' ? 'be' : 'full');
            }
        }
    ];
    return inquirer.prompt(questions);
}
exports.askAboutStack = askAboutStack;
