
import * as _ from 'lodash'
import { askAboutStack } from './utils/askDev';
import { askAboutPackageManager } from './utils/askPackageManager';
import { askAboutTechFront } from './utils/askTechFront';
import { nuxtInstaller } from './utils/installers/nuxt';
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require("inquirer");
const shell = require("shelljs");
const cli = require("clui");
const Spinner = cli.Spinner;

clear();

console.log(
  chalk.yellow(
    figlet.textSync('AllStacks', { horizontalLayout: 'fill' })
  )
);

const run = async () => {
  const stack = await askAboutStack()
  const { Stack } = stack

  const manager = await askAboutPackageManager()
  const { Package} = manager

  if (Stack === 'fe') {
    // go for fe
    const tool = await askAboutTechFront()
    const { Tech } = tool

    if (Tech === 'nuxt') {
      // run nuxt
      nuxtInstaller(Package, chalk)
    } else if (Tech === 'Vue') {
      // run vue
    } else if (Tech === 'React') {
      // run react
    } else if (Tech === 'angular') {
      // run angular
    } else if (Tech === 'js') {
      // install js
    } else if (Tech === 'ts') {
      // install ts
    }
  } else if (Stack === 'be') {
    // go for be
  } else {
    // go for full
  }
}

run()

