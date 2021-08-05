import { GithubService } from '../../services/gh/GithubService';
const cmdPrompt = require('../../utils/gh/gh-questions')
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
import * as _ from 'lodash'

clear();

export function getMyRepos() {
  console.log(
    chalk.yellow(
      figlet.textSync('GitMyRepos', { horizontalLayout: 'default' })
      )
      );
      
  const run = async () => {
    const credentials = await cmdPrompt.askGithubUsername()
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
  
  run()
}
