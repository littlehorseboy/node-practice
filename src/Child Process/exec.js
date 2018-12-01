const request = require('request');
const { exec } = require('child_process');

// exec('git add . && git commit -m "feat: exec && todo: && issue exec"', (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   if (stdout) {
//     console.log(`stdout: ${stdout}`);
//   }

//   if (stderr) {
//     console.log(`stderr: ${stderr}`);
//   }
// });

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info.stargazers_count + " Stars");
    console.log(info.forks_count + " Forks");
  }
}

request({
  method: 'POST',
  url: 'https://api.line.me/v2/bot/message/push',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer jzd3D/TFh5IrfZhOhyfxso/v5gILPq7DomD+DS5qU7ezL4ga/cmbwmctFMwxoNCYh2gWD9lur8/INMF7ukzoJ4hzwWk/dqS9Bv9RE3FGTS67J7B6GRzxThqcT3qBcZUXyCbs2d6KWQ4awqZHT/BlfwdB04t89/1O/w1cDnyilFU=',
  },
  json: {
    to: 'U8102554c1ebf09d303a148fc12894fa0',
    messages: [{
      type: 'text',
      text: 'hello',
    }],
  },
}, callback);
