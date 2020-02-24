# webpack打包原理

## 名词解释
- entry：构建入口文件，用来构建内部依赖图的开始
- output：打包输出位置、文件名以及结构
- module：模块，一个模块对应一个文件，会从entry开始递归找到所有依赖的模块
- chunk：代码块，打包好的原文件
- loader：通过loader转换成对应js或者相应模块
- plugin：插件，各种打包优化和压缩

## 构建流程
- 初始化，获取从shell上或者package上的参数，并同默认参数合并
- 获取参数之后，初始化`Compiler`对象，加载相关插件模块，执行编译对象的`run`并开始编译
- 确定入口，根据配置的`entry`找到对应的入口文件
- 编译module，从`entry`出发，调用相关的`loader`对模块进行编译，再递归找到所有入口文件的依赖文件并处理
- 编译完所有模块后，得出各个模块的最终内容及他们之间的依赖关系
- 根据各个模块的依赖关系，组装成一个个的包含多模块的`Chunk`文件，再把每个`chunk`转换成文件输出
- 根据配置的文件名及路径，输出到文件系统

## 代码结构
```JavaScript
class Compile() {
    constructor(options) {
        const { entry, output } = options;
        this.entry = entry; // 定义入口
        this.output = output; // 输出路径
        this.modules = []; // 记录当前需要的模块
    }

    run() {
        // 开始编译
    }
    generate() {
        // 构建
    }
}

```

## 参考
- [juejin](https://juejin.im/post/5e116fce6fb9a047ea7472a6)
