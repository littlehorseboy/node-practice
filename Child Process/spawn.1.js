const { spawn } = require('child_process');

spawn('cmd', ['/c', 'npm -v'], {
  stdio: 'inherit',
});
