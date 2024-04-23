# 开发杂记

## 2024-04-09

ListLee 在群里说
> 刚试了试 `xtemplate`，完全不会用，鱼羊玩会了教教我，`fdu`的包装太多了

我第一反应是，`xtemplate` 太复杂了，感觉用不上（以前稍微看过）。但我突然想，真的用不上吗，然后我打开了 `xtemplate` 的手册瞄了一眼。

`object`, `template`, `instance`, 最后 use

我最近在干的好像就是这三个？

比如 `cover` 库
- cover：代表了对象是封面
- template：其实就是设定的一系列 cs
- instance：其实就是几种模板类型（开题报告，本科，硕士，博士）下的设置
- use：其实就是设置这些模板里的一系列参数

我竟然独自摸索出了 `xtemplate` 的原理？（bushi）

刚在想对象应该是每个模块还是模板类型，应该是模块，因为如果是模板类型的话，template 是模块，但是 instance 就没了。



## 2024-04-13

难顶，我本来想把模板迁移到我的论文上，结果发现一堆报错。果然 `main` 分支还是不要轻易 push，还是得确保能用再 push。而且能用的版本可能还是需要发个 release 啥的存档。

好在用 `git` 管理了，退回到好几个版本之前，还好当时改完黄正华老师的硕士模板的时候 `commit` 了一下。不过还是有一些小问题，比如
- `section` 类命令里出现数学公式就报错，只能用 `\textorpdfstring` 来处理
- `cus` 好像处理了 `backmatter`，导致我的 `backmatter` 后面的章节标题变了，而且打 `hook` 好像还不起作用，只能直接改，这个之后得完善一下。
- `biblatex` 的调用如果是放在 `bib` 库然后通过 `math.master` 的 `WHUDependency` 加载的话，`\parencite` 编译出来的就没有了超链接，只能手动放在 `hyperref` 的后面用显式的 `WHULoadLibrary` 加载。去 `biblatex-gb7714-2015` 仓库[提了个问](https://github.com/hushidong/biblatex-gb7714-2015/issues/195)。

不过参考文献增加一个域来链接到本地文件的需求[终于实现了](https://github.com/hushidong/biblatex-gb7714-2015/issues/194)。后续可以把这个功能写到 `bib` 库的说明里。