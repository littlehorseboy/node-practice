const { exec } = require('child_process');

exec('git add . && git commit -m "feat: exec && todo: && issue exec"', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }

  if (stdout) {
    console.log(`stdout: ${stdout}`);
  }

  if (stderr) {
    console.log(`stderr: ${stderr}`);
  }
});


