const head = require("./config/head");
const nav = require("./config/nav");
const sidebar = require("./config/sidebar");
const plugins = require("./config/plugins");
module.exports = {
   title: "Hsueh",
   description: "薛留阳记录学习的个人博客",
   dest: "public",
   locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
   head,
   theme: "reco",
   themeConfig: {
      //首页样式
    indexTitle:"志不强者智不达。",
    indexDes:"He who will not be wise will not be wise.",
    //是否全屏样式 true，false
    fullscreen: true,
    //全屏模式下才应用 分类图片 不填或者默认为随机
    categoryPic: null,
    tagPic: null,
    timePic: null,
    
     nav,
     sidebar,
     type: "blog",
     blogConfig: {
       category: {
         location: 2,
         text: "分类"
      },
       tag: {
         location: 3,
         text: "标签"
      }
    },
     friendLink: [
      {
         title: "福利清单",
         desc: "Enjoy when you can, and endure when you must.",
         email: "207195095@qq.com",
         link: "http://fl.testw.top"
      },
     /* {
         title: "vuepress-theme-reco",
         desc: "A simple and beautiful vuepress Blog & Doc theme.",
         avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
         link: "https://vuepress-theme-reco.recoluan.com"
      }*/
    ],
    //    // 
    displayAllHeaders: false,
     // 最后更新时间
     lastUpdated: true,
     lastUpdated: '上次更新', // string | boolean
     valineConfig: {
      appId: 'Ky8Em5FsYCrnwNJzVmfVnEEH-gzGzoHsz',
      appKey: 'LseTwwEsGqMOyyui7aOAdfcW',
      placeholder: '填写邮箱可以收到回复哦!',
      notify: true, // 邮件提醒
      verify: true, // 验证码
      recordIP: true,
    },
     subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏
     mode: 'dark',
     modePicker: true,
     logo: "https://cdn.jsdelivr.net/gh/hsuehly/blogimg/logo/bs.png",
     search: true,
     searchMaxSuggestions: 10,
     lastUpdated: "Last Updated",
     author: "Hsueh",
     authorAvatar: "http://img.testw.top/logo/avatar.gif",
     record: "豫ICP备2020026772号",
     recordLink: 'https://beian.miit.gov.cn/',
     startYear: "2020",

  },
  
  plugins,
   markdown: {
    lineNumbers: true
  },
}