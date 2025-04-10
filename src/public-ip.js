const { sleep, shuffleArray, calculateDelay } = require('./utils');
const IPProvider = require('./providers/base');
const CloudflareProvider = require('./providers/cloudflare');
const BaiduProvider = require('./providers/baidu');
const IPIPProvider = require('./providers/ipip');

class PublicIP {
  static config = {
    maxRetries: 3,
    baseDelay: 1000,
    maxDelay: 5000
  };

  static providers = [
    new BaiduProvider(),
    new CloudflareProvider(),  // 添加 Cloudflare 提供者
    new IPIPProvider()
  ];

  static async get() {
    const shuffledProviders = shuffleArray([...this.providers]);
    let lastError;
    let currentRetry = 0;

    while (currentRetry < this.config.maxRetries) {
      for (const provider of shuffledProviders) {
        try {
          return await provider.getIP();
        } catch (err) {
          lastError = err;
          await sleep(calculateDelay(this.config.baseDelay, this.config.maxDelay, currentRetry));
        }
      }
      currentRetry++;
    }
    
    throw new Error(`Failed to fetch public IP after all retries: ${lastError?.message}`);
  }

  static addProvider(provider) {
    if (provider instanceof IPProvider) {
      this.providers.push(provider);
    }
  }

  static removeProvider(providerClass) {
    this.providers = this.providers.filter(p => !(p instanceof providerClass));
  }

  static getProviders() {
    return [...this.providers];
  }
}

module.exports = PublicIP;