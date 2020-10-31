export class Repo {
  public name: string
  public description: string

  constructor(repoResponse: Repo) {
    this.name = repoResponse.name
    this.description = repoResponse.description
  }
}