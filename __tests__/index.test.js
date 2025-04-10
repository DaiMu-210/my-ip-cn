const { PublicIP, IPIPProvider, BaiduProvider, CloudflareProvider } = require('../index');
const ip = require('ip');

describe('IP Providers Availability', () => {
  const providers = [
    { name: 'Baidu', instance: new BaiduProvider() },
    { name: 'Cloudflare', instance: new CloudflareProvider() },
    { name: 'IPIP.net', instance: new IPIPProvider() }
  ];

  describe('公网 IP 地址验证', () => {
    test.each(providers)('$name 提供者应返回有效的公网 IP 地址', async ({ name, instance }) => {
      const ipAddress = await instance.getIP();
      console.log(`\n${name} 提供的 IP: ${ipAddress}`);
      
      // 验证是否为有效的 IP 地址
      expect(ip.isV4Format(ipAddress)).toBe(true);
      
      // 验证不是私有 IP
      expect(ip.isPrivate(ipAddress)).toBe(false);
      
      // 验证不是保留地址
      expect(ip.isLoopback(ipAddress)).toBe(false);
    }, 30000);
  });

  describe('多提供者 IP 地址验证', () => {
    test('所有提供者应返回有效的公网 IP', async () => {
      const results = await Promise.all(
        providers.map(async ({ name, instance }) => ({
          name,
          ipAddress: await instance.getIP()
        }))
      );

      console.log('\n多提供者 IP 地址检查结果:');
      results.forEach(({ name, ipAddress }) => {
        console.log(`${name}: ${ipAddress}`);
        expect(ip.isV4Format(ipAddress)).toBe(true);
        expect(ip.isPrivate(ipAddress)).toBe(false);
        expect(ip.isLoopback(ipAddress)).toBe(false);
      });
    }, 30000);
  });
});