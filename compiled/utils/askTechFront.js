"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.askAboutTechFront = void 0;
var inquirer = require('inquirer');
function askAboutTechFront() {
    var questions = [
        {
            name: 'Tech',
            type: 'list',
            choices: [
                'Nuxt',
                'Vue',
                'React',
                'Angular',
                'Vanilla Javascript',
                'Vanilla Typescript'
            ],
            message: 'Choose your favorite tech tool',
            filter: function (value) {
                return value === 'Nuxt' ? 'nuxt'
                    : value === 'Vue' ? 'vue'
                        : value === 'React' ? 'react'
                            : value === 'Angular' ? 'angular'
                                : value === 'Vanilla Javascript' ? 'js'
                                    : value === 'Vanilla typescript' ? 'ts'
                                        : null;
            }
        }
    ];
    return inquirer.prompt(questions);
}
exports.askAboutTechFront = askAboutTechFront;
