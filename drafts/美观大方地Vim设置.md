
# 美观大方地Vim设置


除了atom外,最好用最顺手的编辑器应该就是vim了(emacs党退散),但大家都知道vim没有插件没有配置基本就是个残废这边推荐一个好用的vim配置

[k-vim](https://github.com/wklken/k-vim)国内某位大大地杰作,一键式安装,注意mac osx下vim版本略低,先用brew 安装好最新版vim再安装k-vim

同时k-vim还有个子项目,服务器端用的vim配置,只保留了设置而没有插件,同样推荐~

不过安装好后会报个错,是`YouCompleteMe`的错误,原因是需要编译安装.

只要继续完成以下步骤

+ 确保有cmake

mac下默认是没有的,可以brew安装之

+ 进入所在文件夹:`cd ~/.vim/bundle/YouCompleteMe`,之后运行:`./install.py --clang-completer`即可


```python

```
