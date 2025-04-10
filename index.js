const PublicIP = require('./src/public-ip');
const IPProvider = require('./src/providers/base');
const IPIPProvider = require('./src/providers/ipip');
const BaiduProvider = require('./src/providers/baidu');
const CloudflareProvider = require('./src/providers/cloudflare');

module.exports = {
  PublicIP,
  IPProvider,
  IPIPProvider,
  BaiduProvider,
  CloudflareProvider
};