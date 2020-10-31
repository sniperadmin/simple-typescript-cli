import * as _ from 'lodash'
import { GithubService } from '../services/GithubService'
const inquirer = require('inquirer');

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

inquirer.prompt(questions);

export const askForGhUsername = async function() {
  const credentials = await inquirer.askGithubUsername()
  console.log(credentials)
  
  let svc = new GithubService()
  
  svc.getUserInfo(credentials.username, (user) => {
    svc.getRepos(credentials.username, (repos) => {
      let sorted = _.sortBy(repos,
        [(repo) => repo.name])
  
      let filtered = _.take(sorted, 2)
      user.repos = filtered
      console.log(user.repos)
    })
  })
}
