const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function dirExample() {
  const { stdout, stderr } = await exec('npm -v && npm -v');
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
}

async function dirExample2() {
  const { stdout, stderr } = await exec('npm -v');
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
}

dirExample();
dirExample2();
