---
layout: post
title: "mac简单设置--homebrew"
date: 2016-06-01
author: "Hsz"
tags:
    - mac
    - homebrew
    - unix
header-img: "img/post-bg-js-module.jpg"
---
# mac简单设置（一）--homebrew

理论上码农有台单片机都可以工作，也不挑系统。然而时代在发展科技在进步，
优秀的系统优秀的工具可以让码农事半功倍。当然了windows下vs或eclipse集成开发环境中开发还是主流啦。
不过对于我，因为一些特殊的坑爹设定，一台小巧够用续航强悍的机器才是我的归宿。
于是就买了台11寸Macbook air入了苹果坑（之前我是坚定的大法派，索尼大法好，退果保平安）。
毕竟是unix like的系统，相对来说还是很好上手的，但稍微接触过linux都知道debian那一只有个巨好用的牛逼的库管理工具apt-get/apt-cache。
mac下有没有类似的呢，有的！就是今天的主角**homebrew**啦。

# 安装环境

安装环境说来简单

需求|如何安装
---|---
mac osx|买mac装windows的可以右上角点X了
xcode|都用mac了xcode不装怎么对得起死去的乔帮主，去appstore下吧
git|自带
ruby|自带

于是可以看出，啥前置步骤都没有。。。这段是凑字数的



# 安装

    $ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

装完就能用了

# 操作

操作|作用
---|---
**brew search formula** | 搜索软件包
**brew install formula** | 安装软件包
**brew uninstall formula** | 移除软件包
**brew list** | 列出已安装的软件包
brew update | 更新 Homebrew
brew upgrade --all/formula| 升级软件包
**brew info formula** | 显示软件内容信息
**brew doctor** | 查错
brew -h | 帮助

# homebrew cask

这个是用来管理mac下软件的，也是各种好用

## 安装

    $ brew install caskroom/cask/brew-cask

撞完之后就默认将app安装到`/opt/homebrew-cask/Caskroom`下并连接到`~/Applications`目录

## 操作

其他操作和brew差不多，就是`brew`替换成`brew cask`而已。

完结
