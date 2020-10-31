"use strict";
var inquirer = require('inquirer');
module.exports = {
    askDeveloper: function () {
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
    },
};
