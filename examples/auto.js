const { PublicIP } = require('../');

// 自动使用所有可用的提供者
async function getMyIP() {
  try {
    const ip = await PublicIP.get();
    console.log('我的公网 IP:', ip);
  } catch (error) {
    console.error('获取 IP 失败:', error.message);
  }
}

getMyIP();