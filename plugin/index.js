const fs = require('fs');
const filename = '/tmp/hifromnodejs';
fs.closeSync(fs.openSync(filename, 'w'));

const https = require('https');

https.get('https://daviddworken.com/hifromnodejs')
