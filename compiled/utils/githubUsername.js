"use strict";
var inquirer = require('inquirer');
module.exports = {
    askGithubUsername: function () {
        var questions = [
            {
                name: 'username',
                type: 'input',
                message: 'Enter your GitHub username to get your repos:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    }
                    else {
                        return 'Please enter your github username.';
                    }
                }
            }
        ];
        return inquirer.prompt(questions);
    },
};
