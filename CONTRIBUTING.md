# 贡献指南

感谢您考虑为呢喃ninc个人主页项目做出贡献！下面是一些指导方针，帮助您为此项目做出贡献。

## 行为准则

参与此项目即表示您同意遵守开源社区的友善、尊重和包容原则。请尊重其他贡献者，不发表攻击性言论。

## 问题报告

如果您发现了问题或有功能请求，请通过项目的 [Issues](https://github.com/zhChuXiao/ninc-homepage/issues) 页面提交。提交问题时，请尽可能详细地描述：

- 问题的详细描述
- 复现步骤
- 预期行为与实际行为
- 截图（如适用）
- 您的环境信息（浏览器、操作系统等）

## 提交更改

1. Fork 本仓库
2. 创建您的功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 确保代码符合项目的编码规范 (`pnpm lint`)
5. 推送到分支 (`git push origin feature/amazing-feature`)
6. 打开一个 Pull Request

## 拉取请求流程

1. 确保您的代码已经过测试并且能够正常工作
2. 更新文档以反映您的更改（如果适用）
3. 您的 PR 将由维护者审查，可能会提出修改建议
4. 一旦您的更改被接受，它们将被合并到主分支中

## 开发设置

请参阅 README.md 文件中的"快速开始"部分获取设置开发环境的指导。

## 编码规范

此项目使用 ESLint 和 Prettier 进行代码规范检查和格式化。请确保您的代码符合这些规范：

```bash
# 运行代码检查
pnpm lint

# 自动修复代码规范问题
pnpm lint:fix
```

## 版本规范

我们使用 [语义化版本控制](https://semver.org/lang/zh-CN/) 进行版本管理。

## 许可证

通过贡献您的代码，您同意将其贡献的代码按照项目的 MIT 许可证授权。

感谢您的贡献！
