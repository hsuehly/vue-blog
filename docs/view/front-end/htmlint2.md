---
title: HTML初识②
date: 2020-12-08
isFull: true
tags:
 - 前端知识
 - HTML
categories:
 - WEB前端
---
## 1、网页中插入图片标签`<img/>`

格式：`<img src="URL" alt="名称" />`
示例：`<img src="img/1.jpg" alt="荷花" />`
属性：

- src：图片的url路径，也就是来源，包含路径与名称
- alt：提示文字，用于鼠标悬停或者图片加载不出来的时候显示，常用于SEO
- width：图片宽度，绝对宽度像素表示，相对宽度百分比表示，为了不失真，通常只设置实际宽度像素
- height：图片高度，绝对高度像素表示，相对高度百分比表示，为了不失真，通常只设置实际高度像素
- border：边框
- align：对齐方式，取值：top(顶)、right(右)、bottom(底)、left(左)、middle(中间)
- vspace:垂直边距，即定义图片顶部与底部的空白
- hspace：水平边距，即定义图片左侧与右侧的空白

## 2、超链接—网页的灵魂

### (1)基本格式

`<a href="URL" target="窗口名称" title="指向连接显示的文字">`超链接名称`</a>`

### (2)属性

href：链接指向的目标地址
target:用于指定打开链接的目标窗口,取值如下：

- _blank：在新窗口中打开
- _parent：在上一级窗口，即父窗口中打开，框架中常用
- _self：当前窗口中打开，一般不设置，默认选项
- _top：最顶级的浏览器窗口中打开，忽略任何框架

### (3)链接路径分析

URL(Uniform Resource Locator)中文名字为“统一资源定位器,即请求资源的地址。
链接路径分类：
- 绝对路径 如：`http://yh.testw.top`
- 相对路径 如：new/index.html
- 根路径 如：file：根文件夹

### (4)链接种类

- 文字链接 例如：`<a href="网站">`Hsueh`</a>`
- 图像链接 例如：`<a href=”网站><img src="img/logo.png" /></a>`
- 锚点链接：链接到当前网页的任意位置,指向锚时需加“#”

```html
<a href="#one">第一段</a>

<a name="#one">第一段内容</a>

//E-mail链接 例如：
<a href="mailto:207195095@qq.com">联系站长</a>

// FTP链接 例如：
<a href="ftp://主机地址">进入</a>

```

## 3、列表

### (1)无序列表 `<ul>`和`<li>`

```html
<ul>
    <li>列表项</li>
    <li>列表项</li>
</ul>
```

属性：名称：type，取值：dise(实心圆、默认)、circle(空心圆)、square(实心方块)

### (2)有序列表 `<ol>`和`<li>`

解释：按照数字或字母等顺序来排列列表项
格式：

```html
<ol>
    <li>列表项</li>
    <li>列表项</li>
</ol>
```

属性1：名称type
取值：

- 1：数字顺序 1,2,3,4…默认项
- a：小写字母 a,b,c,d…
- A：大写字母 A,B,C,D…
- i：小写罗马数字 i,ii,iii…
- I: 大写罗马数字 I,II,III…

属性2：start属性，用于调整数字开始值

### (3)定义列表 dl dt dd

解释：用于解释名词，不包含项目符号
格式：

```html
<dl>
    <dt>列表标题</dt>
    <dd>列表内容</dd>
    <dd>列表内容</dd>
</dl>
```

::: tip
说明：dt和dd是放于dl标签内，标签dt与dd处于dl下相同级。dt不能放入dd内，dd不能放入dt内，不能单独使用。
:::

## 4、网页表格Table标签

### (1)表格基本格式

格式：

```html
<table>
    <tr>
        <th>表头1</th>
        <th>表头2</th>
    </tr>
    <tr>
        <td>内容1</td>
        <td>内容2</td>
    </tr>
</table>
```

::: tip

`<table>`…`</table>` 用来声明表格开始与结束

`<tr>`…`</tr>` 用来设置表格的行

`<th>`…`</th>` 用来设置表格标题栏位,默认字体加粗

`<td>`…`</td>` 用来设置表格的列

:::

### (2)表格完整格式

格式：

```html
<table>
    <caption>表格标题</caption>
    <thead>
        <tr>
            <th>表头1</th>
            <th>表头2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>主体1</td>
            <td>主体2</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>页脚1</td>
            <td>页脚2</td>
        </tr>
    </tfoot>
</table>
```

::: tip
`<caption>`…`</caption>` 定义表格标题，每个表格只能定义一个标题，通常居中显示于表格之上

`<thead>`…`</thead>` 定义表格的表头

`<tbody>`…`</tbody>` 定义表格主体(正文)

`<tfoot>`…`</tfoot>`定义表格页脚(脚注或表注)
:::

::: warning
表格的标签必须成对使用
:::

### (3)`<table>`标签属性

- border：设置表格边框的宽度 (取整数值，单位像素)
- bordercolor：设置表格边框的颜色 (取英文或十六进制颜色)
- bordercolorlight：设置表格亮边框颜色 (取英文或十六进制颜色)
- bordercolordark：设置表格暗边框颜色 (取英文或十六进制颜色)
- bgcolor：设置表格的背景颜色 (取英文或十六进制颜色)
- background：设置表格的背景图片 (URL)
- width：设置表格的宽度 (像素或百分比)
- height：设置表格的高度 (像素或百分比)
- cellspacing：设置单元格之间的间距 (像素或百分比)
- cellpadding：设置表格单元格边框与单元内容之间的间距 (像素或百分比)
- align：设置对齐方式，取值left(左对齐)、center(居中对齐)、right(右对齐)，建议不使用
- summary：定义表格内容摘要 (字符串)

### (4)`<table>`标签内部分割线与外部分割线的属性

A.外部分隔线frame属性

- void：不显示表格边框，默认项
- above：只显示表格上边框
- below：只显示表格下边框
- hsides：只显示表格上下边框
- vsides：只显示表格左右边框
- lhs：只显示表格左边框
- rhs：只显示表格右边框
- box/border：显示表格四个边上的边框

B.内部分隔线rules属性

- rows：只显示横向分隔线
- cols：只显示纵向分隔线
- none：不显示任何边框
- all：显示所有边框
- groups：显示行组与列组之间的线条,即在`<thead><tbody><tfoot>`之间显示横线

## 5、单元格`<tr><th><td>`标签属性

(1)`<th>`和`<td>`都是插入单元格的标签，这两个标签必须嵌套在`<tr>`标签内,成对出现。
(2)`<th>`用于表头标签，表头标签一般位于首行或首列，标签之间的内容就是位于该单元格内的标题内容,以粗体居中显示。
(3)`<tr><th><td>`以下属性必须在border不等于0的情况下生效。

- width：设置表格的宽度 (像素或百分比)
- height：设置表格的高度 (像素或百分比)
- bgcolor：设置表格的背景颜色 (取英文或十六进制颜色)
- background：设置表格的背景图片 (URL)
- align：设置水平方向对齐，取值left(左对齐)、center(居中对齐)、right(右对齐)
- valign：设置垂直方向对齐，取值top(顶端)、middle(居中)、bottom(底部)、baseline(基线)

(4)`<th>`和`<tr>`标签合并属性

- colspan：横向向右合并单元格的列
- rowspan：纵向向下合并单元格的行

## 6、`<colgroup>`标签

(1)定义与用法

`<colgroup>`标签用于对表格中的列进行组合，以便对其进行格式化。
如需对全部列应用样式，`<colgroup>` 标签很有用，这样就不需要对各个单元和各行重复应用样式了。

`<colgroup>` 标签只能在 table 元素中使用。

(2)属性

- align：设置水平方向对齐，取值left(左对齐)、center(居中对齐)、right(右对齐)
- valign：设置垂直方向对齐，取值top(顶端)、middle(居中)、bottom(底部)、baseline(基线)
- width：设置表格的宽度 (像素或百分比)
- span：设置列组应该横跨的列数，就是控制那几列生效。
经过测试：align和valign基本不生效
(3)colgroup和col区别
colgroup和col标签必须出现在表格当中，定义表格单独列的任意属性，col必须在colgroup中使用。col能覆盖colgroup定义的属性

(4)示例

```html
<table border="1">
    <colgroup span="3" style="background-color:red" width="30px;">
        <col style="background-color:#FFF">
        <col width="50px">
        <col span="1" width="100px">
    </colgroup>
    <tr>
        <th>table</th>
        <th>colgroup</th>
        <th>col</th>
    </tr>
    <tr>
        <td>html</td>
        <td>table</td>
        <td>css</td>
    </tr>
    <tr>
        <td>html2</td>
        <td>table2</td>
        <td>css2</td>
    </tr>
</table>
```

::: tip
colgroup 中的 span=”3” 是控制style给表格中的前3列(如果后面无col则有效)，背景色为红色，宽度为30。
以上例子如果内部没有col，结果为表格所有列的背景色为红色，宽度为30。
第一个col定义表格第一列，col的白色背景色覆盖了colgroup中的红色，结果第一列背景色为白色。
第二个col定义表格第二列，结果第二列宽度为50。
第三个col中span=”1”,表示从第三列开始的1列长度为100，如果span=”2”,则表示第三列开始的2列。
:::

## 7、表格的嵌套

一个大表格可以嵌套一个或者多个小的表格，由于CSS+DIV的出现，目前table常用于后台管理系统中。
示例：

```html
<table border="1" width="500">
    <tr>
        <th>表头1</th>
        <th>表头2</th>
    </tr>
    <tr>
        <td>外围表格</td>
        <td>
            <table width="100%" border="0">
                <tr>
                    <td>嵌套表格</td>
                    <td>嵌套表格</td>
                </tr>
                <tr>
                    <td>嵌套表格</td>
                    <td>嵌套表格</td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td>外围表格</td>
        <td>外围表格</td>
    </tr>
</table>
```

以上基本上就是table表格常用的属性了，示例效果请复制粘贴运行即可。

