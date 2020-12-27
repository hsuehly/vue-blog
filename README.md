# Hsueh

## 演示 https://hsuehly.github.io

# 项目运行

- clone 到本地仓库
- cd 到目录文件夹
- 执行以下命令  安装依赖

```bash
npm install # yarn install

```

- 依赖安装好之后执行以下命令

```bash
npm run docs:dev # yarn docs:dev

```

- 然后访问 http://localhost:8080

## 评论系统

- 在 https://www.leancloud.cn/ 注册，注册之后获取appId appKey

- 在config.js修改为自己的 appId appKey


# 项目架构


- 采用vuepress 构建

## 图片修改方法

- 通过自建图床 调用接口实现,这里推荐使用cdn加速

- 博客首页图片在声明为首页背景图的`readme.md `文件修改

- 其他图片在.vuepress/theme/mixins/posts.js文件修改

## 开始编写markdown

- Front Matter参考

```yaml
--- 
title: 文章标题
date: 编写时间 //格式 YY-MM-DD
categories:
- 分类
- 可以多个
tags:
- 标签
- 可以多个
keys: 
- 123456 //文章加密
sticky: 1 // 文章置顶 1,2,3,... 依次递减
isShowComments: false //是否开启评论功能
---
[[toc]]  //目录前面连接

<!--more--> //在这之前的所有内容都会展示为文章摘要


内容部分...

![文字](图片链接地址) // 插入图片


```

# 打包

- 执行以下打包命令

```bash

npm run docs:build  # yarn docs:build

```

- 打包生成dist文件后上传到自己的服务器或者 github gitee coding 这些免费托管服务商


# 结语

- 喜欢的给个start，感谢

