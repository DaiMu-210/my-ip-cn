const https = require('https');

class IPProvider {
  async getIP() {
    throw new Error('Not implemented');
  }

  async request(url) {
    return new Promise((resolve, reject) => {
      https.get(url, (resp) => {
        let data = '';
        resp.on('data', (chunk) => data += chunk);
        resp.on('end', () => resolve(data));
      }).on('error', reject);
    });
  }
}

module.exports = IPProvider;