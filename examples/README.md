# 示例说明

本目录包含两个示例文件，展示了不同的使用方式：

## 自动模式 (auto.js)

自动使用所有内置的提供者，最简单的使用方式：

```javascript
const { PublicIP } = require('my-ip-cn');
const ip = await PublicIP.get();