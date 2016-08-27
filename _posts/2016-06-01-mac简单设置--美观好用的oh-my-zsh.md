---
layout: post
title: "mac简单设置--美观好用的oh-my-zsh"
date: 2016-06-01
author: "Hsz"
tags:
    - mac
    - zsh
    - unix
header-img: "img/post-bg-js-module.jpg"
---
# mac简单设置(二)--美观好用的oh-my-zsh

# zsh

Shell是Linux/Unix的一个外壳，你理解成衣服也行。它负责外界与Linux内核的交互，
接收用户或其他应用程序的命令，然后把这些命令转化成内核能理解的语言，传给内核，
内核是真正干活的，干完之后再把结果返回用户或应用程序。

Linux/Unix提供了很多种Shell，为毛要这么多Shell？难道用来炒着吃么？那我问你，
你同类型的衣服怎么有那么多件？花色，质地还不一样。写程序比买衣服复杂多了，
而且程序员往往负责把复杂的事情搞简单，简单的事情搞复杂。牛程序员看到不爽的Shell，
就会自己重新写一套，慢慢形成了一些标准，常用的Shell有这么几种，sh、bash、csh等，
想知道你的系统有几种shell，可以通过以下命令查看：

    cat /etc/shells

在mac下会显示:

    /bin/bash
    /bin/csh
    /bin/ksh
    /bin/sh
    /bin/tcsh
    /bin/zsh

目前常用的 Linux 系统和 OS X 系统的默认 Shell 都是 bash，但是真正强大的Shell是深藏不露的zsh.

要使用zsh,只要:

    chsh -s /bin/zsh

# oh-my-zsh

但光用zsh并不好用,为了更傻瓜的用它,我们需要安装`oh-my-zsh`

    wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh

但mac下没有wget,所以先用homebrew安装

    brew install wget

# 安装主题

我们用一个叫 `bullet train`<https://github.com/caiogondim/bullet-train-oh-my-zsh-theme>

## 安装字体

安装这边的字体<https://github.com/powerline/fonts>,可以下载也可以
`git clone https://github.com/powerline/fonts.git`下来,然后按照说明里的做法

    cd fonts-master
    ./install.sh

安装好后,字体就安装到`/Users/huangsizhe/Library/Fonts`了,

## 安装主题

把下载的[主题](https://raw.githubusercontent.com/caiogondim/bullet-train-oh-my-zsh-theme/master/bullet-train.zsh-theme)拷贝到`/Users/huangsizhe/.oh-my-zsh/themes` 目录下

然后打开~目录下的`.zshrc`编辑

ZSH_THEME="bullet-train"

## 在terminal偏好设置中美化

装好了以后看看还是丑..原因是我们必须使用刚刚安装的字体

开一个terminal,进入`偏好设置==>描述文件==>文本==>字体==>字体集==>固定宽度`,之后找个后面带
`for powershell`的字体即可,我推荐`Liberation Mono for powershell`

## 设置terminal主题

实话说mac自带的主题都略丑,我们换个好看的

下载<https://github.com/altercation/solarized>中的内容,然后解压找到
`osx-terminal.app-colors-solarized`,选其中的双击安装即可,然后在偏好设置中设为默认即可.

注意换主题会改变字体设置,需要注意


## 安装autojump

autojump是一个插件,支持在曾经访问过的路径之间跳转

可以用Homebrew安装

    brew install autojump

解压缩后进入目录，执行

    ./install.sh

之后再编辑`.zshrc`,添加一句

    [[ -s $(brew --prefix)/etc/profile.d/autojump.sh ]] && . $(brew --prefix)/etc/profile.d/autojump.sh


并修改

    plugins=(git autojump)

如此一来就安装好了一个美观好用的shell了,更多的美化和插件可以自己再研究
