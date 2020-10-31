import chalk from "chalk";

const exec = require('child_process').exec;

export const installHelper = (command: string, onSuccess: any, spinner: any) => {
  return new Promise((resolve, reject) => {
    const process = exec(command, (err: any, stdout: any, stderr: any) => {
      if (err) { return err }
      if(stdout) {
        return `${stdout}`
      }
      if (stderr) {
        return stderr;
      }
    });
    // spinner.start();

    process.on('exit', () => {
      // spinner.stop();
      onSuccess();
      resolve();
    })
  })
}
