const inquirer = require('inquirer');

module.exports = {
  askGithubUsername: () => {
    const questions: object[] = [
      {
        name: 'username',
        type: 'input',
        message: 'Enter your GitHub username to get your repos:',
        validate: function(value: any) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your github username.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
};
