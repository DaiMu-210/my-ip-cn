const IPProvider = require('./base');

class BaiduProvider extends IPProvider {
  constructor() {
    super();
    this.url = 'https://qifu-api.baidubce.com/ip/local/geo/v1/district';
  }

  async getIP() {
    const response = await this.request(this.url);
    const data = JSON.parse(response);
    return data.ip;
  }
}

module.exports = BaiduProvider;