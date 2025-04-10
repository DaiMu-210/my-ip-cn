const IPProvider = require('./base');

class CloudflareProvider extends IPProvider {
  constructor() {
    super();
    this.url = 'https://www.cloudflare.com/cdn-cgi/trace';
  }

  async getIP() {
    const response = await this.request(this.url);
    const lines = response.split('\n');
    for (const line of lines) {
      if (line.startsWith('ip=')) {
        return line.slice(3);
      }
    }
    throw new Error('IP not found in Cloudflare response');
  }
}

module.exports = CloudflareProvider;