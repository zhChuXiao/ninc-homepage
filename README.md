# 🌈 Ninc Homepage

> 一个基于Nuxt.js的个人主页，简约而不简单，颜值与性能并存！

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-brightgreen.svg)](https://vuejs.org/)
[![Nuxt.js](https://img.shields.io/badge/Nuxt.js-3.x-00DC82.svg)](https://nuxt.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Sass](https://img.shields.io/badge/Sass-Supported-pink.svg)](https://sass-lang.com/)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F100-brightgreen.svg)](https://ninc.top)

## ✨ 特色

- 🌙 优雅的亮色/暗色模式切换
- 🎨 精心设计的UI，支持毛玻璃效果
- 📱 完美适配移动端与桌面端
- ⚡ 基于Nuxt.js，开箱即用的SSR优化
- 🔧 TypeScript全面支持，代码更健壮
- 🧩 模块化设计，易于扩展与定制
- 🌐 SEO友好，让搜索引擎更喜欢你
- 🚀 极致性能优化，Lighthouse全项满分

> [!NOTE]
> 本项目设计灵感来自于zyyo大佬的优秀作品 [@ZYYO666/homepage](https://github.com/ZYYO666/homepage)，在保留其简约美观设计理念的同时，使用`Nuxt.js`进行了技术栈重构，部分组件参考了[梦爱吃鱼](https://github.com/JLinmr)大佬的设计风格。

## 🖼️ 预览

**在线体验:** [https://ninc.top](https://ninc.top)

### 亮色模式

![亮色模式预览](/public/img/homepage-light.png)

### 暗色模式

![暗色模式预览](/public/img/homepage-dark.png)

## ⚡ 性能表现

本项目经过精心优化，在Google Lighthouse测试中获得了**全部满分**的优异成绩:

![Lighthouse满分](/public/img/lighthouse-score.png)

- **性能 (Performance)**: 100/100
- **可访问性 (Accessibility)**: 100/100
- **最佳实践 (Best Practices)**: 100/100
- **SEO**: 100/100

打包优化:

- 关键CSS内联与代码分割
- 图片懒加载与适当压缩
- 资源预加载与预连接
- Gzip与Brotli双重压缩
- 严格的缓存策略
- tree shaking优化与冗余清除

## 📦 安装使用

```bash
# 克隆代码
git clone https://github.com/zcxiao/ninc-homepage.git

# 进入目录
cd ninc-homepage

# 安装依赖
pnpm install

# 开发模式启动
pnpm dev

```

## 打包部署

> [!IMPORTANT]
> 本项目为纯静态站点，推荐使用预渲染打包部署

```bash
# ssr打包
pnpm build
# ssg预渲染打包
pnpm generate
```

## 🔍 项目结构

```
ninc-homepage/
├── assets/            # 静态资源
│   ├── fonts/         # 字体文件
│   ├── img/           # 图片资源
│   └── scss/          # 全局样式
├── homeConfig.ts      # 配置文件
├── components/        # 组件
│   ├── Contact.vue    # 联系方式组件
│   ├── Home.vue       # 主页组件
│   ├── Left.vue       # 左侧信息栏
│   ├── Right.vue      # 右侧内容区
│   ├── Skills.vue     # 技能展示
│   └── ...
├── composables/       # 组合式API
├── pages/             # 页面
├── public/            # 公共资源
├── types/             # 类型定义
└── ...
```

## 🎨 自定义配置

所有配置均存放在`homeConfig.ts`中，你可以根据自己的需求进行修改：

```ts
// 在 assets/homeConfig.ts 中进行配置
export default {
  name: '',
  fullName: '',
  location: '',
  email: '',
  url: ''
  // 更多配置见文件内注释...
}
```

## 🤝 贡献指南

1. Fork 本项目
2. 创建你的特性分支 (`git checkout -b feature/your-feature`)
3. 提交你的改动 (`git commit -m 'Add some your feature'`)
4. 推送到分支 (`git push origin feature/your-feature`)
5. 打开一个 Pull Request

## 📝 设计灵感

本项目设计灵感来自于zyyo大佬的优秀作品 [@ZYYO666/homepage](https://github.com/ZYYO666/homepage)，在保留其简约美观设计理念的同时，使用`Nuxt.js`进行了技术栈重构，部分组件参考了[梦爱吃鱼](https://github.com/JLinmr)大佬的设计风格。

## 📄 开源协议

MIT License © zcxiao

---

如果你喜欢这个项目，别忘了给个 ⭐️ 哦！有任何问题或建议，欢迎提 issue 或直接联系我。
