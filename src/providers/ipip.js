const IPProvider = require('./base');

class IPIPProvider extends IPProvider {
  constructor() {
    super();
    this.url = 'https://myip.ipip.net/json';
  }

  async getIP() {
    const response = await this.request(this.url);
    const data = JSON.parse(response);
    return data.data.ip;
  }
}

module.exports = IPIPProvider;