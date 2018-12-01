const { spawn } = require('child_process');

spawn('cmd', ['/c', 'npm -v && npm -v'], {
  stdio: 'inherit',
});
