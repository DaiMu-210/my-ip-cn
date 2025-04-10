<span style="display: block;padding: 1rem 2rem; font-size: 1.5rem; background: #5352ed; border-radius: 4px; text-align: center; font-weight: bold;">💡 版本更新通知QQ群（全员禁言）935651528<span>

# my-ip-cn

一个简单的获取公网 IP 地址的 Node.js 库。

## 安装 (Installation)

```bash
npm install my-ip-cn
```

## 特点(Features)

1. 高效维护，每天检查 3 次
2. 多个 IP Provider 负载均衡以及重试机制，保证稳定性
3. QQ 群及时推送更新（全员禁言）

## 示例说明 (Example)

本目录包含两个示例文件，展示了不同的使用方式：

### 自动模式 (auto.js)

自动使用所有内置的提倡者，最简单的使用方式：

```javascript
const { PublicIP } = require('my-ip-cn');
const ip = await PublicIP.get();
```

### 手动模式 (manual.js)

手动指定使用的提倡者，需要手动选择使用的提供者：

```javascript
const { PublicIP } = require('my-ip-cn');
const ip = await PublicIP.get({ providers: ['ip-api', 'ip-api-com'] });
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.