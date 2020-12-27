module.exports = [
       [ "@vuepress-reco/vuepress-plugin-kan-ban-niang",{
        
         theme: ["koharu"],
         clean: true,
         modelStyle:{
           left: '50px',
           bottom: '-20px',
           opacity: '0.9'
         
        }
       },
      ],
      ["@vuepress/medium-zoom", {
         selector: 'img.custom',
       },
      ],
      [
        "cursor-effects",
        {
          size: 2,                    
          shape: 'star',  
                   
        }
      ],
      [
        "ribbon",
        {
          size: 40,     // width of the ribbon, default: 90
          opacity: 0.3, // opacity of the ribbon, default: 0.3
          zIndex: -1    // z-index property of the background, default: -1
        }
      ],
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
    }],
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
          content: "复制成功!"
      }
    }],
       
     
]
