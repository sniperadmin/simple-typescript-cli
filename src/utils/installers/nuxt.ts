import { installHelper } from "../helpers/installHelper"
const cli = require("clui");
const Spinner = cli.Spinner;

export const nuxtInstaller = async (packageManager: string, chalk: any) => {
  const spinner = new Spinner('Installing Nuxt ...')
  return installHelper(
    packageManager === 'npm' ? 'npm init nuxt-app my-app' : 'yarn create nuxt-app my-app',
    () => console.log(chalk.green('Nuxt has been installed!')),
    spinner
  )
}
