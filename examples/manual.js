const {
  BaiduProvider,
  CloudflareProvider,
  IPIPProvider,
  PublicIP,
} = require("../");

async function testProviders() {
  try {
    // 创建指定的提倡者实例
    const baiduProvider = new BaiduProvider();
    const cfProvider = new CloudflareProvider();
    const ipipProvider = new IPIPProvider();

    // 使用百度提供者
    console.log("百度提供的 IP:", await baiduProvider.getIP());

    // 使用 Cloudflare 提倡者
    console.log("Cloudflare 提供的 IP:", await cfProvider.getIP());

    // 使用 IPIP.net 提倡者
    console.log("IPIP.net 提供的 IP:", await ipipProvider.getIP());

    // 自定义 PublicIP 的提倡者列表
    PublicIP.providers = [baiduProvider, ipipProvider]; // 不用国外的cf作为IP查询服务商
    console.log("使用自定义提供者列表:", await PublicIP.get());
  } catch (error) {
    console.error("获取 IP 失败:", error.message);
  }
}

testProviders();
