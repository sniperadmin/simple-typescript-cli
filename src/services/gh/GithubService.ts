import * as request from 'request'
import { User } from '../../models/gh/User'
import { Repo } from '../../models/gh/Repo';

let options: any = {
  headers: {
    'User-Agent': 'request'
  },
  json: true
}
export class GithubService {
  getUserInfo(userName: string, cb: (user: User) => any) {
    console.log('Loading repos data...');
    request.get('https://api.github.com/users/' + userName,
      options,
      (error: any, response: any, body: any) => {
      let user = new User(body)
      cb(user)
    })
  }
  getRepos(username: string, cb: (repos: Repo[]) => any) {
    request.get('https://api.github.com/users/' + username + '/repos',
      options,
      (error: any, response: any, body: any) => {
      const res = body.map((repo: any) => new Repo(repo))
      cb(res)
    })
  }
}
