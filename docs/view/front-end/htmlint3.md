---
title: HTML初识③
date: 2020-12-09
isFull: true
tags:
- 前端知识
- HTML
categories:
- WEB前端
---
## 认识表单标签

### 1、表单概述

（1）、表单功能
表单是浏览器客户端与服务器端交互的重要手段，在网页中负责数据采集功能。

（2）、表单由三部分组成
表单标签：用于描述表单处理程序的URL地址，数据提交的方式等表单的相关信息
表单域：包括文本框、密码框、隐藏域、多行文本框、文件上传框、下拉选择框、单选框、多选框
表单按钮：包括提交按钮、重置按钮、一般按钮。

### 2、表单标签`<form>`

（1）、表单语法：

```html
<form action="URL" method="get/post" enctype="MIME" target="打开方式">
…
</form>
```

（2）、表单属性

- id：表单名称
- name：表单名称
- action：用来定义表单处理程序(ASP、JSP、PHP等),使用相对地址或绝对地址
- method：定义表单数据从浏览器传送到服务器的方式，一般有两种：get和post
- enctype：用于指定表单提交数据时所采用的编码方式，默认值：application/x-www-form-urlencoded
- target：指定提交的结果文档显示的位置，很少使用。取值：_blank、_parent、_self、_top

### 3、表单form的enctype属性各取值

text/plain：以纯文本的形式传送
application/x-www-form-urlencoded：默认的编码形式，即url编码形式
multipart/form-data：MIME编码，上传文件的表单必须选择该项

## 与用户交互,表单域

### 1、单行文本框

解释：文本框是一种让访问者自己输入内容的表单对象，通常被用来填写简短的内容和回答
语法：`<input type="text" name="名称" value="值" size="宽度" maxlength="输入最大长度" readonly="readonly"/>`

### 2、密码文本框

解释：密码框是为了隐藏用户输入密码信息
语法：`<input type="password" name="名称" value="值" size="宽度" maxlength="输入最大长度" readonly="readonly"/>`

### 3、单行文本框与密码框属性说明：

- type：定义文本框类型，text(文本框)、password(密码框)、hidden(隐藏域)
- name：文本框名称，为了保证数据采集准确性，必须唯一
- id：文本框的id，常用于jquery验证或采集数据
- size：定义文本框的长度，单位是单个字符的宽度
- maxlength：定义文本框最多输入的字符数
- value：文本框的初始值(默认值)
- readonly：设置文本框是否只读

### 4、隐藏域

解释：隐藏域是用来收集或发送信息的不可见元素，对于网页访问者，隐藏域是看不见的。当表单被提交时，隐藏域就会将信息用你设置定义的名称和值发送到服务器上
语法：`<input type="hidden" name="名称" value="值"/>`
隐藏域的优点：
（1）不需要任何服务器资源。
（2）支持广泛，任何客户端都支持隐藏域
（3）实现简单，隐藏域属于HTML控件，无需像服务器控件那样有需要编程知识
隐藏域的缺点：
（1）具有较高的安全隐患，因为客户端源码可以看见
（2）存储结构简单
（3）如果存储了较多的较大的值，则会导致性能问题
（4）如果隐藏域过多，则在某些客户端中被禁止
（5）隐藏域将数据存储在服务器上，而不存储在客户端

### 5、多行文本框

解释：一种让访问者自己输入内容的表单对象，能让访问者填写较长的内容
语法：`<textarea name="名称" rows="3" cols="20" wrap="virtual" />`…`</textarea>`
属性说明：

- name：定义多行文本框名称，为了保证数据采集准确性，必须唯一
- cols：定义多行文本框的宽度，单位是单个字符宽度
- rows：定义多行文本框的高度，单位是单个字符宽度
- wrap：定义输入内容大于文本域时显示的方式，可选值如下：

（1）默认值是文本自动换行,当输入内容超过右边界时会自动转到下一行,在数据被提交时自动换行的地方不会有换行符出现

（2）Off，用来避免文本换行，当输入的内容超过右边界时，文本将向左滚动，必须用Return才能将插入点移到下一行

（3）Virtual，允许文本自动换行。当输入内容超过右边界时会自动转到下一行，在数据被提交时自动换行的地方不会有换行符出现

（4）Physical，让文本换行，在数据被提交处理时换行符也将被一起提交处理

### 6、单选框

解释：用于唯一选择，比如单选题、状态选择等
语法：`<input type="radio" name="名称" value="值" checked="checked" disabled="disabled"/>`
属性说明：

- type：定义类型为单选按钮
- name：定义单选框名称，为了保证数据采集准确性，单选框都是以组为单位使用，在同一组中的单选项都必须用同一个名称
- value：定义单选框的值，在同一组中，它们的域值必须是不同的
- checked：定义单选框是否被选中，如不需要选中则去掉checked=”checked”
- disable：定义单选按钮不可用，不可点击

### 7、复选框

解释：复选框允许在待选项中选中一项以上的选项。每个复选框都是一个独立的元素，都必须有一个唯一的名称。
语法：`<input type="checkbox" name="名称" value="值" checked="checked" disabled="disabled"/>`
属性说明：

- type：定义类型为复选框
- name：定义复选框名称，为了保证数据采集准确性，必须唯一
- value：定义复选框的值
- checked：定义复选框是否被选中，如不需要选中则去掉checked=”checked”
- disable：定义复选框不可用，不可点击

### 8、下拉选择框

解释：下拉选择框允许你在一个有限的空间设置多种选项，比如城市级联选择等
语法：

```html
<select name="名称" size="数字" >
    <option value="选项值 " selected="selected" multiple="multiple">
    <option value="选项值">
    <option value="选项值">
</select>
```

属性说明：

- name：定义下拉选择框的名称
- size：定义下拉列表中可见选项的数目
- value：定义选择项的值
- selected：表示默认已经选择本选项
- multiple：表示可以多选，如果不设置本属性，那么只能单选，默认单选。
- optgroup：定义下拉选项组

optgroup属性：
（1）label：选项组的标签描述
（2）disabled：禁止改选项组，灰色显示
optgroup示例如下：

```html
<select>
    <optgroup label="Swedish Cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
    </optgroup>
    <optgroup label="German Cars">
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
    </optgroup>
</select>
```

### 9、文件上传框

解释：用于用户在客户端上传文件。
语法：`<input type="file" name="名称" size="15" maxlength="100"/>`
属性说明：

- type：定义文件上传框
- name：定义文件上传框名称，为了保证数据采集准确性，必须唯一
- size：定义文本框的长度，单位是单个字符的宽度
- maxlength：定义文本框最多输入的字符数

### 10、按钮

（1）提交按钮：`<input type="submit" value="提交"/>`

（2）重置按钮：`<input type="reset" value="重置"/>`

（3）一般按钮：`<input type="button" value="Click me" onclick="msg()"/>`

（4）图像按钮：`<input type="image" src="submit.gif" alt="Submit"/>`

（5）按钮图片：`<button name=”提交” type=”button”><img src=”URL”/></button>`

### 11、表单fieldset与legend

说明：fieldset定义表单外边框，legend定义表单标题
示例如下：

```html
<form>
    <fieldset>
        <legend>标题</legend>
          height: <input type="text" />
          weight: <input type="text" />
    </fieldset>
</form>
```

### 12、form完整用户注册示例

```html
<form action="User.php" method="post" enctype="MIME">
    用户名：<input type="text" name="username" value="" size="20" maxlength="10"/>
        <br/>
    密码：<input type="password" name="password" value="" size="20" maxlength="10"/>
        <br/>
    性别：
        <input type="radio" name="sex" value="boy" checked="checked"/>男
        <input type="radio" name="sex" value="gril"/>女
        <br/>
    爱好：
        <input type="checkbox" name="ins" value="basketball"/>篮球
        <input type="checkbox" name="ins" value="football" checked="checked"/>足球
        <input type="checkbox" name="ins" value="badminton"/>羽毛球
        <br/>
    家乡：
        <select name="home">
            <option value="四川" selected="selected">四川</option>
            <option value="重庆">重庆</option>
            <option value="北京">北京</option>
        </select>
        <br/>
    头像:<input type="file" name="icon" size="15" maxlength="100"/>
        <br/>
    备注：<textarea rows="3" cols="20" name="remark"></textarea>
        <br/>
        <input type="hidden" name="id" value="1">
        <input type="submit" value="提交"/>
        <input type="reset" value="重置"/>
</form>
```

::: tip
以上基本上就是form表单常用的属性，示例效果请复制粘贴运行即可。
:::

## frame和iframe框架

### 1、框架概念

将浏览器的主窗口分成几个独立的窗口框架，每个框架会同时显示一个不同的网页。框架主要用于后台框架与文档浏览器

### 2、框架基本结构

框架由框架集(frameset)和框架(frame)组成

### 3、框架结构语法：

```html
<frameset cols="25%,50%,25%">
    <frame src="frame_a.htm" />
    <frame src="frame_b.htm" />
    <frame src="frame_c.htm" />
</frameset>
```

### 4、框架集`frameset`标签属性

- cols：定义框架集中列的数目和尺寸
- rows：定义框架集中行的数目和尺寸
- border：设置框架集的边框厚度，单位像素
- bordercolor：设置框架集的边框颜色(英文或十六进制颜色)
- frameborder：设置框架集边框是否显示，值只有0和1,0表示不显示边框，1表示显示边框
- framespacing：设置框架集的边框厚度，单位像素
- scrolling：设置是否在框架集中显示滚动条，取值：auto(需要时自动显示)、yes(始终显示)、no(从不显示)
- noresize：设置无法调整框架集的大小，如果没有该属性，使用者可以随意拉动框架改变大小

### 5、框架`frame`标签属性

- src：设置显示在框架`<frame>`中的网页文件URL路径
- name：定义框架名称
- frameborder：设置框架边框是否显示，值只有0和1,0表示不显示边框，1表示显示边框
- scrolling：设置是否在框架中显示滚动条，取值：auto(需要时自动显示)、yes(始终显示)、no(从不显示)
- noresize：设置无法调整框架的大小，如果没有该属性，使用者可以随意拉动框架改变大小
- marginheight：设置框架的上方和下方的边距
- marginwidth：设置框架的左侧和右侧的边距
- longdesc：设置一个包含有关框架内容的长描述的页面

### 6、不支持框架标签`<noframes>`

虽然框架技术是一种比较早的一种技术，但是仍然有一些早期版本的浏览器不支持框架。使用`<noframes>`可以让浏览器不支持框架

## iframe框架

### 1、定义

iframe元素会创建包含另外一个文档的内联框架(即行内框架)

### 2、HTML 与 XHTML 之间的差异

在 HTML 4.1 Strict DTD 和 XHTML 1.0 Strict DTD 中，不支持 iframe 元素

### 3、提示与注解

可以把需要的文本放置在`<iframe>`和`</iframe>`之间，这样就可以应对无法理解iframe的浏览器
iframe标签是成对出现的,以`<iframe>`开始,`</iframe>`结束
iframe标签内的内容可以做为浏览器不支持iframe标签时显示

### 4、常用属性

- src：定义在iframe中显示的文档的 URL
- name：定义iframe的名称
- frameborder：定义iframe边框是否显示，值只有0和1,0表示不显示边框，1表示显示边框
- scrolling：定义是否在iframe中显示滚动条，取值：auto(需要时自动显示)、yes(始终显示)、no(从不显示)
- marginheight：定义iframe的顶部和底部的边距
- marginwidth：定义iframe的左侧和右侧的边距
- longdesc：定义一个包含有关iframe的较长描述
- align：对齐方式，已废弃,取值：top(顶部)、middle(居中)、bottom(底部)、left(左边)、right(右边)
- height：定义iframe的高度
- width：定义iframe宽度

### 5、使用示例

`<iframe src="URL" width="20%" height="50%"></iframe>`

## `frame`和`iframe`总结

### 1、`frame`不能脱离`frameset`单独使用，`iframe`可以。

### 2、`frame`不能放在`body`中。

正确用法，如下可以正常显示：

```html
<!--<body>-->
<frameset rows="50%,*">
    <frame name="frame1" src="test1.htm"/> 
    <frame name="frame2" src="test2.htm"/> 
</frameset>
<!--<body>-->
```

::: danger
错误用法，如下不能正常显示：
:::

```html
<body>
<frameset rows="50%,*">
    <frame name="frame1" src="test1.htm"/> 
    <frame name="frame2" src="test2.htm"/> 
</frameset>
<body>
```

### 3、嵌套在`frameset`中的`iframe`必需放在body中。

正确用法，如下可以正常显示

```html
<body>
    <frameset> 
        <iframe name="frame1" src="test1.htm"/> 
        <iframe name="frame2" src="test2.htm"/> 
    </frameset> 
</body>
```

::: danger
错误用法，如下不能正常显示：
:::

```html
<!--<body>-->
    <frameset> 
        <iframe name="frame1" src="test1.htm"/> 
        <iframe name="frame2" src="test2.htm"/> 
    </frameset> 
<!--</body>-->
```

### 4、不嵌套在`frameSet`中的`iframe`可以随意使用。

如下都可以正常显示

```html
<body>
    <iframe name="frame1" src="test1.htm"/> 
    <iframe name="frame2" src="test2.htm"/> 
</body>

<!--<body>-->
<iframe name="frame1" src="test1.htm"/> 
<iframe name="frame2" src="test2.htm"/> 
<!--</body>-->
```

### 5、`frame`的高度只能通过`frameSet`控制；`iframe`可以自己控制，不能通过`frameSet`控制。

如下：

```html
<!--<body>-->
<frameset rows="50%,*">
    <frame name="frame1" src="test1.htm"/> 
    <frame name="frame2" src="test2.htm"/> 
</frameset>
<!--</body>-->

<body>
<frameset>
    <iframe height="30%" name="frame1" src="test1.htm"/> 
    <iframe height="100" name="frame2" src="test2.htm"/> 
</frameset>
</body>
```

### 6、如果在同一个页面使用了两个以上的iframe，在IE中可以正常显示，在firefox中只能显示出第一个。使用两个以上的`frame`在IE和firefox中均可正常
### 7、`frame`是整个页面的框架，`iframe`是内嵌的网页元素，也可以说是内嵌的框架。
### 8、嵌套区别

iframe标记又叫浮动帧标记，可以用它将一个HTML文档嵌入在一个HTML中显示，iframe和frame最大区别是在网页中嵌入 的`<iframe></iframe>`所包含的内容与整个页面是一个整体，而`<frame>< /frame>`所包含的内容是一个独立的个体，是可以独立显示的

### 10、`iframe`放在网页的任何地方，`f`rame`只能放到上下左右四个方向
### 11、`frame`用于全部页面，通常用在后台框架中，`iframe`只用于局部，比如需要嵌套一个百度地图页面等