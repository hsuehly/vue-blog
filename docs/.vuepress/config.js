const head = require("./config/head");
const nav = require("./config/nav");
const sidebar = require("./config/sidebar");
const plugins = require("./config/plugins");
module.exports = {
   title: "Hsueh",
   description: "记录学习的个人博客",
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
    ],
    //    // 
    displayAllHeaders: false,
     // 最后更新时间
     lastUpdated: true,
     lastUpdated: '上次更新', // string | boolean
     valineConfig: {
      appId: '',   //  在https://www.leancloud.cn/ 注册 获取id key 填入
      appKey: '',
      placeholder: '填写邮箱可以收到回复哦!',
      notify: true, // 邮件提醒
      verify: true, // 验证码
      recordIP: true,
    },
     subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏
     mode: 'dark',// 主题选择 dark light
     modePicker: true,
     logo: "",// logo
     search: true,
     searchMaxSuggestions: 10,//最大搜索数
     lastUpdated: "Last Updated",//最后上传时间
     author: "Hsueh",// 作者名字
     authorAvatar: "",//作者头像
     record: "", //备案号
     recordLink: '',//备案网站
     startYear: "",//博客创建时间

  },
  
  plugins,
   markdown: {
    lineNumbers: true
  },
}