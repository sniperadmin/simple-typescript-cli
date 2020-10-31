
import { GithubService } from './services/GithubService';
import * as _ from 'lodash'
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const cmdPrompt = require('./utils/inquire')


clear();

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

