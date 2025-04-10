# my-ip-cn

针对中国大陆优化的公网 IP 获取库，支持百度、IPIP.net 等多个服务提供商。

## 安装

```bash
npm install my-ip-cn
```

## 快速开始

```javascript
const { PublicIP } = require('my-ip-cn');

// 获取公网 IP（自动尝试所有可用的服务提供商）
const ip = await PublicIP.get();
console.log('当前公网 IP:', ip);
```

## 特性

- 🚀 优先使用中国大陆服务提供商
- 🔄 自动故障转移和重试机制
- 🛡 内置请求超时和错误处理
- 🔌 支持自定义配置和扩展
- 👨‍💻 长期维护，及时修复

## 服务可用性

我们通过自动化监控确保服务的可靠性：

- 🤖 服务状态监控： https://my-ip-cn.dsheep.com/status
- ⚡️ 每日执行 3 次可用性检查
- 📊 服务可用性报告自动更新

## 高级用法

### 指定服务商模式

适用于需要自定义服务商顺序的场景：

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

## 支持的服务提供商

目前支持以下服务提供商：

> 维护公告我们会通知到Q群(**全员禁言**)：**935651528**

| 服务商           | 引入方式                                             | 特点                                         | 适用场景     |
| ---------------- | ---------------------------------------------------- | -------------------------------------------- | ------------ |
| 百度 IP 定位服务 | `const { BaiduProvider } = require('my-ip-cn')`      | - 稳定可靠<br>- 响应速度快<br>- 中国大陆优化 | 国内网络环境 |
| Cloudflare       | `const { CloudflareProvider } = require('my-ip-cn')` | - 全球 CDN<br>- 轻量级接口<br>- 响应迅速     | 全球网络环境 |
| IPIP.net         | `const { IPIPProvider } = require('my-ip-cn')`       | - 高精准度<br>- 全球可用<br>- 备选方案       | 全球网络环境 |