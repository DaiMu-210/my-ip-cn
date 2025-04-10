# 示例说明

本目录包含两个示例文件，展示了不同的使用方式：

## 自动模式 (auto.js)

自动使用所有内置的提供者，最简单的使用方式：

```javascript
const { PublicIP } = require('my-ip-cn');
const ip = await PublicIP.get();
```

## 手动模式 (manual.js)

手动指定使用的提供者，需要手动选择使用的提供者：

```javascript
const { PublicIP } = require('my-ip-cn');
const ip = await PublicIP.get({ providers: ['ip-api', 'ip-api-com'] });
```