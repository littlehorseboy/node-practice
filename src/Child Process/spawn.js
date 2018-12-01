const { spawn } = require('child_process');

const processFunc = (commandList) => {
  commandList.forEach((c) => {
    const command = spawn('cmd.exe', ['/c', c]);

    command.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    command.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    command.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
  });
};

processFunc(['npm -v', 'npm -v']);
