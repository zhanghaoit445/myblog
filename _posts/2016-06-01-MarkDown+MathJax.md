---
layout: post
title: "MarkDown+MathJax"
date: 2016-06-01
author: "Hsz"
tags:
    - latex
    - markdown
header-img: "img/post-bg-js-module.jpg"
---

# MarkDown+MathJax

## MarkDown

简明强大的markdown文本标记语言是做笔记的好帮手,相比起word文档,你不用双手离开键盘来影响你的速记效率,
相比起tex你不用费心码一堆代码来维护格式.
当然了,markdown是为速记而生的,它的最大好处是内容与形式分离,因此不要对齐排版有过多期待,
它的特点便是可以用最简单最统一的形式清楚的表达.废话不多说,开始介绍语法

### 基本语法

markdown中换行是两个回车

如果一个回车,会接在后面继续写.


你可以是试试,
上面这段的代码如下:


    markdown中换行是两个回车

    如果一个回车,会接在后面继续写.


    你可以是试试,
    上面这段的代码如下:


### html支持

markdown是html的子集,所以对于一些html标签和样式可以直接插入,但js无效.

---

    <table border="1">
    <tr>
    <th>姓名</th>
    <td>Bill Gates</td>
    </tr>
    <tr>
    <th rowspan="2">电话</th>
    <td>555 77 854</td>
    </tr>
    <tr>
    <td>555 77 855</td>
    </tr>
    </table>



<table  class = "zebra">
<tr>
<th>姓名</th><td>Bill Gates</td>
</tr>
<tr>
<th rowspan="2">电话</th>
<td>555 77 854</td>
</tr>
<tr>
<td >555 77 855</td>
</tr>
</table>


### 文章结构相关语法

#### 分割

就像你下面看到的一样

---

    ---

    ---

---

#### 标题

markdown的标题用复数个连续`#`表示,`#`越多标题层级越低,连续`#`后空一格再写标题内容即可

---

    # 第一级
    ## 第二级


#第一级

## 第二级

---

#### 区块引用 Blockquotes

区块引用可以嵌套表现层级

    > This is the first level of quoting.
    >
    > > This is nested blockquote.
    >
    > Back to the first level.
    >
    > ## 这是一个标题。
    >
    > 1.   这是第一行列表项。
    > 2.   这是第二行列表项。
    >
    > 给出一些例子代码：
    >
    >     return shell_exec("echo $input | $markdown_script");



> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.
>
> ## 这是一个标题。
>
> 1.   这是第一行列表项。
> 2.   这是第二行列表项。
>
> 给出一些例子代码：
>
>     return shell_exec("echo $input | $markdown_script");

#### 列表

Markdown 支持有序列表和无序列表。

---


    + Red

        蓝色

    + Green
    + Blue


    1. Bird

        鸟

    2. McHale

        >hi

    3. Parish

            print("hello")



+ Red

    蓝色

+ Green
+ Blue


1. Bird

    鸟

2. McHale

    >hi

3. Parish

        print("hello")

---

### 字形相关

---

    **这是斜体**

    *这是斜体*

    ***这是粗斜体***


**这是斜体**

*这是斜体*

***这是粗斜体***



---

### 页面元素

#### 代码块

代码块只要一个tab缩进即可

在文字中的代码块可以这样用`hi`

---

    在文字中的代码块可以这样用`hi`
    print("hello")

---

### 链接

---


    [Google](http://google.com/ "Google search")

    [Google](http://google.com/)

    <http://google.com/>

    [利用github建立blog](./利用github建立blog.md)

[Google](http://google.com/ "Google search")

[Google](http://google.com/)

<http://google.com/>

[利用github建立blog](./利用github建立blog.md)


---

### 表格

    名字|电话
    ---|---
    小马哥|0987
    小黑|9870

名字|电话
---|---
小马哥|0987
小黑|9870



### 图片

![Alt google](https://lh4.googleusercontent.com/-v0soe-ievYE/AAAAAAAAAAI/AAAAAAAAAAA/OixOH_h84Po/photo.jpg)
![](https://lh4.googleusercontent.com/-v0soe-ievYE/AAAAAAAAAAI/AAAAAAAAAAA/OixOH_h84Po/photo.jpg)

### 插入代码

插入代码也很简单,有3种方式

+ 使用\`符号包裹,一般这种事嵌入在一段文字中

    你好\`s=hello\`

    对应的结果是:

    你好`s=hello`



+ 通过tab键缩进

tab $ git clone xxxxx

    $ git clone xxxxx

+ 使用三个\`符号包裹,就像python中的长字符串差不多

\`\`\`python

sssss
sssss
sssss

\`\`\`

对应的结果:

```python

sssss
sssss
sssss

```

### 视屏

可以通过html标签实现(github不可以)

<video width="640" height="360" preload="auto" poster="http://media.w3.org/2010/05/sintel/poster.png" controls >
  <source src="http://media.w3.org/2010/05/sintel/trailer.mp4">
</video>

### 音频

可以通过html标签实现(github不可以)

<audio controls>
  <source src="../source/markdown/utf.mp3">
</audio>




#### 数学公式的支持
本来markdown是不支持数学公式的,
但如果和mathjax结合使用便可以利用"tex"的公式编辑语言在markdown中编写公式了.

---

    $a \ne b$

$a \ne b$


太多了,具体可以看[这篇总结](http://blog.163.com/goldman2000@126/blog/static/167296895201221242646561/)和[这篇总结](http://mlworks.cn/posts/introduction-to-mathjax-and-latex-expression/
    )

---
