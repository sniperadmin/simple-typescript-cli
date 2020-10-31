const inquirer = require('inquirer');

export function askAboutPackageManager () {
  const questions: object[] = [
    {
      name: 'Stack',
      type: 'list',
      choices: ['npm', 'yarn'],
      message: 'Choose your favorite package manager',
      filter: function (value: any) {
        return (value === 'npm') ? 'npm' : 'yarn'
      }
    }
  ];
  return inquirer.prompt(questions);
}
