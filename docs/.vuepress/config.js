module.exports = {
  dest: 'dist',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'AllPay',
      description: 'api docs'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'AllPay',
      description: 'api接入文档'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  themeConfig: {
    repo: 'allpayx/allpayx.github.io',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'PC Web',
            link: '/pc/',
          },
          {
            text: 'Android',
            link: '/android/'
          },
          {
            text: 'IOS',
            link: '/ios/'
          },
          {
            text: 'HTML5',
            link: '/h5/'
          },
          {
            text: 'shoppingCart plug-in',
            link: '/cart/'
          },
          {
            text: 'wechatMiniProgram',
            link: '/wx/'
          },
        ],
        sidebar: {
          '/pc/':genSidebar('pc','PC'),
          '/android/': genSidebar('android','Android'),
          '/ios/': genSidebar('ios','IOS'),
          '/h5/': genSidebar('h5','H5'),
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: 'PC在线支付',
            link: '/zh/pc/',
          },
          {
            text: 'Android',
            link: '/zh/android/'
          },
          {
            text: 'IOS',
            link: '/zh/ios/'
          },
          {
            text: 'HTML5',
            link: '/zh/h5/'
          },
          {
            text: 'shoppingCart plug-in',
            link: '/zh/cart/'
          },
          {
            text: 'wechatMiniProgram',
            link: '/zh/wx/'
          },
        ],
        sidebar: {
          '/zh/pc/':genSidebar('pc','PC在线支付'),
          '/zh/android/': genSidebar('android','Android'),
          '/zh/ios/': genSidebar('ios','IOS'),
          '/zh/h5/': genSidebar('h5','H5'),
        }
      }
    }
  }
}


function genSidebar(name,title) {
  var child = {
    pc:[
      '',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ], 
    android: [
      '',
      '1',
      '2',
      '3',
      '4',
      '5',
    ],
    ios: [
      '',
      '1',
      '2',
      '3',
      '4',
      '5',
    ],
    h5: [
      '',
      '1',
      '2',
      '3',
    ],
  }
  return [
    {
      title,
      collapsable: false,
      children: child[name]
    }
  ]
}
