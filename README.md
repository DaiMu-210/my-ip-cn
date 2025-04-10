# my-ip-cn

针对中国大陆优化的公网 IP 获取库，支持百度、IPIP.net 等多个服务提供商。

## 背景

目前开源社区中存在不少获取公网 IP 的库，但大多已经年久失修，服务商接口更新后无人维护。为解决这个问题，我们团队推出了这个长期维护的公网 IP 获取库。

为确保可靠性，我们：
- 🤖 在 CI/CD 流程中设置定时任务，每天自动检查 3 次各服务商的可用性
- ⚡️ 服务商接口异常时第一时间收到通知并进行维护
- 📢 重要更新会在 QQ 群 123123123 发布公告（全员禁言）

## 特性

- 🚀 优先使用中国大陆服务提供商
- 🔄 自动故障转移和重试机制
- 🛡 内置请求超时和错误处理
- 🔌 支持自定义配置和扩展
- 👨‍💻 长期维护，及时修复

## 安装

```bash
npm install my-ip-cn
```
### 方式一：自动模式（推荐）
```javascript
const { PublicIP } = require('my-ip-cn');

// 获取公网 IP
const ip = await PublicIP.get();
console.log('当前公网 IP:', ip);
```

### 方式二：指定服务商模式
```javascript
const { BaiduProvider, IPIPProvider, PublicIP } = require('my-ip-cn');

// 创建服务商实例
const baiduProvider = new BaiduProvider();
const ipipProvider = new IPIPProvider();

// 设置服务商列表
PublicIP.providers = [baiduProvider, ipipProvider];

// 获取公网 IP
const ip = await PublicIP.get();
console.log('当前公网 IP:', ip);
```

### 方式三：单一服务商模式
```javascript
const { BaiduProvider, IPIPProvider } = require('my-ip-cn');

// 使用百度服务
const baiduIP = await new BaiduProvider().getIP();
console.log('百度提供的 IP:', baiduIP);

// 使用 IPIP.net 服务
const ipipIP = await new IPIPProvider().getIP();
console.log('IPIP.net 提供的 IP:', ipipIP);
```