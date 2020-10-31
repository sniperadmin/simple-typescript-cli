const inquirer = require('inquirer');

export function askAboutStack () {
  const questions: object[] = [
    {
      name: 'Stack',
      type: 'list',
      choices: ['Front-end', 'Back-end', 'Full-stack'],
      message: 'Choose a stack for development',
      filter: function (value: any) {
        return (value === 'Front-end') ? 'fe' : (value === 'Back-end' ? 'be' : 'full')
      }
    }
  ];
  return inquirer.prompt(questions);
}
