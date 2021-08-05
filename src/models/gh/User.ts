import { Repo } from "./Repo";

export class User {
  public login: string
  public fullName: string
  public repoCount: string
  public followCount: string
  repos: Repo []

  constructor(
    userResponse: any
  ) {
    this.login = userResponse.login
    this.fullName = userResponse.name
    this.repoCount = userResponse.public_repos
    this.followCount = userResponse.followers
    this.repos = []
  }
}