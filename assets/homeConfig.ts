import type { HomeConfig } from '~/types/home'

const homeConfig: HomeConfig = {
  // 昵称-用于大标题
  name: 'ninc',
  // 昵称-左侧信息展示、底部信息展示、网页Title展示
  fullName: '呢喃ninc',
  // 地址-左侧信息展示
  location: '中国-山东-青岛',
  // 邮箱-左侧信息展示
  email: 'n@ninc.top',
  // 标签-左侧信息展示
  tag: ['网瘾', '前端', '运动', '社恐', '好奇'],
  // 头像跳转链接
  url: 'https://blog.ninc.top',
  // 备案号
  beian: '鲁ICP备2023082510号-1',
  // 联系方式
  contacts: [
    {
      type: 'Email',
      icon: 'iconfont icon-email',
      url: 'mailto:n@ninc.top',
      hoverColor: '#e78b0a'
    },
    {
      type: '博客',
      icon: 'iconfont icon-blog',
      url: 'https://blog.ninc.top',
      hoverColor: '#42b883'
    },

    {
      type: 'Github',
      icon: 'iconfont icon-github',
      url: 'https://github.com/zhChuXiao',
      hoverColor: '#6500fc'
    },
    {
      type: 'CSDN',
      icon: 'iconfont icon-csdn1-copy',
      url: 'https://blog.csdn.net/a143730',
      hoverColor: '#ea6140'
    },
    {
      type: 'Telegram',
      icon: 'iconfont icon-telegram-original',
      url: 'https://t.me/ninan_cx',
      hoverColor: '#3491ff'
    }
  ],
  // 右侧轮播文案
  typedDescriptions: [
    '嘿，你来啦！这里有一份专属的温暖待签收~',
    '今天也要做一颗闪闪发光的星星呀✨',
    '你的每一次点击，都是故事的开始。',
    '生活偶有裂缝，那是光照进来的地方。',
    'I hope you have a happy day every day.'
  ],
  // Project链接
  siteLinks: [
    {
      title: '博客',
      desc: '我的主站，分享技术，记录生活',
      icon: 'iconfont icon-blog',
      url: 'https://blog.ninc.top'
      // main: true
    },
    {
      title: 'Apple参数大全',
      desc: '收集苹果产品参数以及参数对比',
      icon: 'iconfont icon-apple-fill',
      url: 'https://device.ninc.top'
    },
    {
      title: '站点监测',
      desc: '实时监控网站可用性',
      url: 'https://status.ninc.top ',
      icon: 'iconfont icon-state'
    },
    {
      title: '起始页',
      desc: '一个极简的起始页(未完成)',
      url: 'https://nav.ninc.top',
      icon: 'iconfont icon-compass-full'
    },
    {
      title: '预留3',
      desc: '暂时预留',
      url: '/',
      icon: 'iconfont icon-github'
    },
    {
      title: '预留4',
      desc: '暂时预留',
      url: '/',
      icon: 'iconfont icon-github'
    }
  ],
  // 技能图标 svg文件存放目录： ~/assets/icons
  skillsList: [
    {
      name: 'TailwindCSS',
      color: '#4DB6AC',
      icon: 'tailwindcss'
    },
    {
      name: 'Node',
      color: '#333',
      icon: 'nodejs'
    },
    {
      name: 'Webpack',
      color: '#2e3a41',
      icon: 'webpack'
    },
    {
      name: 'Pinia',
      color: '#fff',
      border: true,
      icon: 'pinia'
    },
    {
      name: 'github',
      color: '#333',
      icon: 'github'
    },
    {
      name: 'Vite',
      color: '#937df7',
      icon: 'vite'
    },
    {
      name: 'Vue',
      color: '#fff',
      border: true,
      icon: 'vue'
    },
    {
      name: 'React',
      color: '#222',
      icon: 'react'
    },
    {
      name: 'CSS3',
      color: '#2c51db',
      icon: 'css3'
    },
    {
      name: 'HTML',
      color: '#e9572b',
      icon: 'html5'
    },
    {
      name: 'Vscode',
      color: '#fff',
      border: true,
      icon: 'vscode'
    },
    {
      name: 'TypeScript',
      color: '#007acc',
      icon: 'typescript'
    },
    {
      name: 'JS',
      color: '#f7cb4f',
      icon: 'javascript'
    },
    {
      name: 'Sass',
      color: '#CF649A',
      icon: 'sass'
    },
    {
      name: 'Nuxt',
      color: '#fff',
      border: true,
      icon: 'nuxt'
    },
    {
      name: 'Nginx',
      color: '#4a9a35',
      icon: 'nginx'
    },
    {
      name: 'Linux',
      color: '#666666',
      icon: 'linux'
    },
    {
      name: 'Stylus',
      color: '#C0CA33',
      icon: 'stylus'
    },
    {
      name: 'VitePress',
      color: '#fff',
      border: true,
      icon: 'vitepress'
    },
    {
      name: 'Git',
      color: '#df5b40',
      icon: 'git'
    },
    {
      name: 'Docker',
      color: '#57b6e6',
      icon: 'docker'
    },
    {
      name: 'Photoshop',
      color: '#4082c3',
      icon: 'photoshop'
    },
    {
      name: 'WebStorm',
      color: '#fff',
      border: true,
      icon: 'webstorm'
    }
  ],
  // 时间轴
  timeLine: [
    {
      time: '2025.02',
      title: '更换新域名'
    },
    {
      time: '2024.12',
      title: '注册新域名ninc.top'
    },
    {
      time: '2024.10',
      title: '博客迁移至VitePress'
    },
    {
      time: '2024.01',
      title: '从WordPress迁移到Hexo'
    },
    {
      time: '2023.11',
      title: '搭建静态站点'
    },
    {
      time: '2023.10',
      title: '遭受大量攻击'
    },
    {
      time: '...',
      title: '...'
    },
    {
      time: '2022.12',
      title: '更换域名ninancx.com'
    },
    {
      time: '...',
      title: '...'
    }
  ]
}

export default homeConfig
