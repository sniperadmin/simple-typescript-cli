const inquirer = require('inquirer');

export function askAboutTechFront () {
  const questions: object[] = [
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
      filter: function (value: any) {
        return value === 'Nuxt' ? 'nuxt'
          : value === 'Vue' ? 'vue'
          : value === 'React' ? 'react'
          : value === 'Angular' ? 'angular'
          : value === 'Vanilla Javascript' ? 'js'
          : value === 'Vanilla typescript' ? 'ts'
          : null
      }
    }
  ];
  return inquirer.prompt(questions);
}
