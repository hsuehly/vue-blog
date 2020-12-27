---
title: HTML初识④
date: 2020-12-11
isFull: true
tags:
 - 前端知识
 - HTML
categories:
 - WEB前端
---


## 多媒体和跑马灯

### 1、音频、视频、动画等

用法：`<embed src="URL" width="500" height="400"></embed>`

### 2、`<embed>`属性说明

- src：嵌入内容的url路径，可以是相对路径或绝对路径
- width：设置嵌入内容的宽度
- height：设置嵌入内容的高度
- units：设置指定高和宽的单位为pixels或en
- autostart：设置音频或视频文件是否在下载完之后就自动播放，取值如下：
- true：音乐文件在下载完之后自动播放
- false：音乐文件在下载完之后不自动播放
- loop：设置音频或视频文件是否循环及循环次数，取值如下：正整数：音频或视频文件的循环次数与正整数值相同
- true：音频或视频文件循环
- false：音频或视频文件不循环

示例：

```html
<embed src="your.mid" autostart=true loop=2>
<embed src="your.mid" autostart=true loop=true>
<embed src="your.mid" autostart=true loop=false>
```

- hidden：设置控制面板是否显示，默认值为false
- true：隐藏面板
- false：显示面板

示例：

```html
<embed src="your.mid" hidden="true">
<embed src="your.mid" hidden="false">
```

- starttime：设置音频或视频文件开始播放时间.未定义则从文件开头播放,格式:starttime=mm:ss(分:秒)
- volume：设置音量大小，未定义则使用系统本身的设定。取值：0是最大值，可以使用负值使音量变小
- controls：设置控制面板的外观。默认值是console

| 属性         | 取值             |
| ------------ |----------------:|
| console      | 一般正常面板     |
| smallconsole | 较小的面板       |
| playbutton   | 只显示播放按钮   |
|pausebutton   | 只显示暂停按钮   |
|stopbutton    | 只显示停止按钮   |
|volumelever   |只显示音量调节按钮 |

示例：`<embed src="your.mid" controls=smallconsole>`

- `name`：设置对象的名称
- `title`：设置说明的文字。该属性规定音频或视频文件的说明文字

示例：`<embed src="your.mid" title="第一首歌">`

- `palette`：设置前景色和背景色，第一个值为前景色，第二个值为背景色，中间用|隔开
- `align`：设置控制面板和当前行中的对象的对齐方式


|属性	|说明               |
|-------|------------------------------------:|
|left	 |控制面板居左 |
|right	|控制面板居右|
|top	|控制面板的顶部与当前行中的最高对象的顶部对齐|
|bottom	|控制面板的底部与当前行中的对象的基线对齐|
|baseline	|控制面板的底部与文本的基线对齐|
|texttop	|控制面板的顶部与当前行中的最高的文字顶部对齐|
|middle	|控制面板的中间与当前行的基线对齐|
|absmiddle|	控制面板的中间与当前文本或对象的中间对齐|
|absbottom	|控制面板的底部与文字的底部对齐|

`type`：设置播放器类型

- `Flash：type="application/x-shockwave-flash"`
- `Windows media player：type="application/x-mplayer2"`
- `Realplayer：type="audio/x-pn-realaudio-plugin"`

### 3、`bgsound`背景音乐

解释：bgsound(background sound),Internet Explorer(ie)专用标签，打开网页的时候自动播放背景音乐

属性如下：

- balance：调整左右声道的音量平衡，取值范围 -10000～10000
- loop：指定播放回数。当指定为infinite或-1时无限循环播放
- src：指定音乐文件的地址。支持 .wav, .au, .mid, .aif 等格式
- volume：调整音量，取值范围 -10000～0 。0 是最大音量

### 4、applet标签

解释：需要额外的插件和安装过程才能起作用(一般不建议使用)

## marquee标签

### 1、作用

创建一个滚动的文本字幕

### 2、属性

- direction：设置滚动方向
- left：向左
- right：向右
- up：向上
- down：向下（示例：`<marquee direction="down">`向下`</marquee>`）
- behavior：文字滚动方式
- scroll：连续滚动，重复由一段滚动到另一端
- slide：滑动一次，不重复
- alternate：表示两端之间来回滚动
- loop：循环次数（-1：无限循环（默认），正整数：循环几次）
- scrollamount：滚动速度，值取正整数，默认是6
- scrolldelay：停顿时间，值取正整数，默认为0，单位毫秒
- valign：垂直对齐方式
- top：顶部对齐
- middle：居中对齐（默认）
- bottom：底部对齐
- align：水平对齐方式


|属性	|说明|
|----------|---------------------:|
|absbottom	|绝对底部对齐（与g、p等字母的最下端对齐）|
|absmiddle	|绝对中央对齐|
|baseline	|底线对齐|
|bottom	|底部对齐（默认）|
|left	|左对齐|
|middle	|中间对齐|
|right	|右对齐|
|texttop	|顶线对齐|
|top	|顶部对齐|

- bgcolor：设置活动字幕的背景色，默认白色
- height：设置活动字幕高度，值取正整数或百分比
- width：设置活动字幕宽度，值取正整数或百分比
- hspace：设置活动字幕元素到区域边界的水平距离，值取正整数，单位是像素
- vspace：设置活动字幕元素到区域边界的垂直距离，值取正整数，单位是像素
- onmouseover=this.stop() onmouseout=this.start() 表示当鼠标移上区域的时候滚动停止，当鼠标移开的时候又继续滚动。

示例：

```html
<marquee id="scrollarea" direction="up" scrolldelay="10" 
  scrollamount="1" width="150" height="80" 
  onmouseover="this.stop();" 
  onmouseout="this.start();">Hsueh
</marquee>
```

### 3、常见跑马灯

```html
<marquee>跑马灯</marquee>普通
<marquee behavior=slide>跑马灯</marquee>滑动 一次
<marquee behavior=scroll>跑马灯</marquee>连续滚动
<marquee behavior=alternate>跑马灯</marquee>来回滚动
<marquee direction=down>跑马灯</marquee>向下滚动
<marquee direction=up>跑马灯</marquee>向上滚动 
<marquee direction=right>跑马灯</marquee>向右滚动 
<marquee direction=’left’>跑马灯</marquee>向左滚动 
<marquee loop=2>跑马灯</marquee>滚动次数 
<marquee width=180>跑马灯</marquee>设定宽度 
<marquee height=30>跑马灯</marquee>设定高度 
<marquee bgcolor="red">跑马灯</marquee>设定背景颜色 
<marquee scrollamount=30>跑马灯</marquee>设定滚动速度 
<marquee scrolldelay=300>跑马灯</marquee>设定滚动时间 
<marquee onmouseover="this.stop()">跑马灯</marquee>鼠标经过上面时停止滚动 
<marquee onmouseover="this.start()">跑马灯</marquee>鼠标离开时开始滚动
<marquee direction=left loop=2 width=960 height=30 scrollamount=30 scrolldelay=300 
onmouseover="this.stop()" onmouseover="this.start()">跑马灯</marquee>
```

## 特殊字符

### 一、HTML字符实体(Character Entities)

## 1、实体

在 HTML 中，某些字符是预留的。
在 HTML 中不能使用小于号（<）和大于号（>），这是因为浏览器会误认为它们是标签。
如果希望正确地显示预留字符，我们必须在 HTML 源代码中使用字符实体(character entities)。

### 2、字符实体组成

字符实体由三部分组成：
第一部分：& 符号，英文叫ampersand
第二部分：实体(Entity)名字或 # 加上实体(Entity)编号
第三部分：; 分号
示例：小于符号—- < 或 <
注意：Entity区分大小写

## 二、不间断空格(non-breaking space)

1、Html中的不间断空格其实就是空格

2、HTML会自动截去多余的空格。不管你加多少空格，都被看做一个空格。比如你在两个字之间加了10个空格，HTML会截去9个空格，只保留一个。为了在网页中增加空格，你可以使用 表示空格。

3、常用实体特殊符号如下：

![http-image](https://cdn.jsdelivr.net/gh/hsuehly/blogimg/front-end/html.jpg)


## DOCTYPE彻底掌握

## 一、DOCTYPE

### 1、什么是DOCTYPE?

DOCTYPE是Document Type（文档类型）的简写，它是一种标准通用标记语言的文档类型声明。目的是要告诉标准通用标记语言解析器，它应该使用什么样的文档类型定义（DTD）来正确解析文档。

### 2、定义与用法

`<!DOCTYPE> `必须声明，否则效果或出现差异。
`<!DOCTYPE> `声明必须是 HTML 文档的第一行，位于 `<html> `标签之前。
`<!DOCTYPE>` 声明不是 HTML 标签，它是指示 web 浏览器关于页面使用哪个 `HTML` 版本进行编写的指令。
`<!DOCTYPE>` 声明没有结束标签。
`<!DOCTYPE>` 声明对大小写不敏感。
在 HTML 4.01 中，`<!DOCTYPE> `声明引用 DTD，因为 HTML 4.01 基于 SGML。DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容。

### 3、官方定义-DOCTYPE语法

HTML 顶级元素 可用性 “注册//组织//类型 标签//定义 语言””URL”

### 4、官方定义-可能值

（1）顶级元素：指定 DTD 中声明的顶级元素类型。这与声明的 SGML 文档类型相对应。 HTML 默认。HTML。

可用性：指定正式公开标识符(FPI)是可公开访问的对象还是系统资源。 PUBLIC 默认。可公开访问的对象。SYSTEM 系统资源，如本地文件或 URL。

（2）注册：指定组织是否由国际标准化组织(ISO)注册。 + 默认。组织名称已注册。- 组织名称未注册。Internet 工程任务组(IETF)和万维网协会(W3C)并非注册的 ISO 组织。

（3）组织：指定表明负责由 !DOCTYPE 声明引用的 DTD 的创建和维护的团体或组织的名称，即 OwnderID。 IETF IETF。 W3C W3C

（4）类型：指定公开文本类，即所引用的对象类型。 DTD 默认。DTD。

（5）标签：指定公开文本描述，即对所引用的公开文本的唯一描述性名称。后面可附带版本号。 HTML 默认。HTML。

（6）定义：指定文档类型定义。

- Frameset 框架集文档
- Strict 排除所有 W3C 专家希望逐步淘汰的代表性属性和元素，因为样式表已经很完善了
- Transitional 包含除 frameSet 元素的全部内容

（7）语言：指定公开文本语言，即用于创建所引用对象的自然语言编码系统。该语言定义已编写为 ISO 639 语言代码(大写两个字母)。 EN 默认。英语。

（8）URL：指定所引用对象的位置

## 二、常用的 DOCTYPE 声明

### 1、HTML5(只有一种)

```html
<!DOCTYPE html>
```

### 2、HTML 4.01 Strict (严格的)

该DTD包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

### 3、HTML 4.01 Transitional (过渡的)

该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

### 4、HTML 4.01 Frameset (框架的)

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

### 5、XHTML 1.0 Strict (严格的)

该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

### 6、`XHTML` 1.0 `Transitiona`(过渡的)

该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

### 7、`XHTML` 1.0 `Frameset` (框架的)

该 DTD 等同于 XHTML 1.0 Transitional，但允许框架集内容

```htmml
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```

### 8、`XHTML` 1.1

该 DTD 等同于 XHTML 1.0 Strict，但允许添加模型（例如提供对东亚语系的 ruby 支持）

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
```

## `meta`标签使用

## 一、定义

1、meta标签是用来描述一盒HTML网页文档的属性，例如作者、时间、网页描述、关键词、页面刷新等
2、meta标签位于文档的头部，不包含任何内容
3、meta标签的属性定义了与文档相关联的名称/值对，是一个辅助标签
4、示例：

```html
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="keywords" content="关键词" />
    <meta name="description" content="描述" />
</head>
```

5、组成
meta标签共有两个属性，它们分别是http-equiv属性和name属性，不同的属性又有不同的参数值

## 二、name属性

### 1、Keywords（关键字）

说明：向搜索引擎说明你网页的关键词
用法：`<meta name ="keywords" content="Hsueh,经验分享">`

### 2、description（网站内容描述）

说明：向搜索引擎说明你网站的主要内容
用法：`<meta name ="description" content="Hsueh,经验分享">`

### 3、author（作者）

说明：告诉搜索引擎你网站的作者，网页版权信息
用法：`<meta name="author" contect="你的姓名">`

### 4、Robots（机器人向导）

说明：用来告诉搜索引擎机器人抓取哪些页面
Robots属性说明如下：

- all：文件将被检索，且页面上的链接可以被查询
- none：文件将不被检索，且页面上的链接不可以被查询
- index：文件将被检索
- follow：页面上的链接可以被查询
- noindex：文件将不被检索，但页面上的链接可以被查询
- nofollow：文件将不被检索，页面上的链接可以被查询

用法：`<meta name="robots" content="none">`

### 5、generator

说明：用以说明网站是什么软件制作的
用法：`<meta name="generator" content="eclipse" />`

## 三、http-equiv属性

### 1、Expires（期限）

说明：用于设定网页的到期时间。一旦网页过期，必须到服务器上重新传输
用法：`<meta http-equiv="expires" content="Fri,12 Jan 2001 18:18:18 GMT">`

::: warning
注意：必须使用GMT的时间格式
:::

### 2、Pragma(cache模式）

说明：禁止浏览器从本地计算机的缓存中访问页面内容
用法：`<meta http-equiv="Pragma" content="no-cache">`
::: warning
注意：这样设定，访问者将无法脱机浏览
:::

### 3、Refresh（刷新）

说明：自动刷新并指向新页面
用法：`<meta http-equiv="Refresh" content="2;URL"> `(注意后面的引号,分别在秒数的前面和网址的后面)
::: warning
注意：其中的2是指停留2秒钟后自动刷新到URL网址
:::

### 4、Set-Cookie(cookie设定）

说明：如果网页过期，那么存盘的cookie将被删除
用法：`<meta http-equiv="Set-Cookie" content="cookievalue=xxx; expires=Friday,12-Jan-2001 18:18:18 GMT; path=/">`
::: warning
注意：必须使用GMT的时间格式
:::

### 5、Window-target（显示窗口的设定）

说明：强制页面在当前窗口以独立页面显示
用法：`<meta http-equiv="Window-target" content="_top">`
::: warning
注意：用来防止别人在框架里调用自己的页面
:::

### 6、content-Language（显示语言的设定）

说明：用以说明主页制作所使用的文字以及语言
用法：`<meta http-equiv="Content-Language" content="zh-cn" />`
解析：上面zh代表语言代码，cn代表国家版本，即primary-code为语言代码,subcode为国家代码这两部分组成
常见的语言代码：

- zh (Chinese)中国
- fr (French)法国
- de (German)德国
- it (Italian)意大利
- nl (Dutch)荷兰
- el (Greek)希腊
- es (Spanish)西班牙
- pt (Portuguese)葡萄牙
- ar (Arabic)阿拉伯
- ru (Russian)俄罗斯
- ja (Japanese)日本

### 7、content-Type（显示字符集的设定）

说明：设定页面使用的字符集
用法：`<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">`
常用字符编码：

- GB2312：简体中文
- BIG5：繁体中文
- iso-2022-jp：日文
- ks_c_5601：韩文
- ISO-8859-1：英文
- UTF-8：世界通用语言编码（最常用的）

## 四、示例总结

```html
<head>
    <!-- 关键词 -->
    <meta name ="keywords" content="Hsueh,经验分享">
    <!-- 描述 -->
    <meta name ="description" content="Hsueh,经验分享">
    <!-- 描作者-->
    <meta name="author" contect="你的姓名">
    <!-- 制作工具-->
    <meta name="generator" content="eclipse" />
    <!-- 机器人向导-->
    <meta name="robots" content="none">
    <!-- 有效时间-->
    <meta http-equiv="expires" content="Fri,12 Jan 2001 18:18:18 GMT">
    <!-- 禁用缓存 -->
    <meta http-equiv="Pragma" content="no-cache">
    <!-- 2秒刷新-->
    <meta http-equiv="Refresh" content="2;URL">
    <!-- cookie设定 -->
    <meta http-equiv="Set-Cookie" content="cookievalue=xxx; expires=Friday,12-Jan-2001 18:18:18 GMT; path=/">
    <!-- 显示顶层窗口-->
    <meta http-equiv="Window-target" content="_top">
    <!-- UTF-8编码 -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- 中文-->
    <meta http-equiv="Content-Language" content="zh-cn" />
</head>
```