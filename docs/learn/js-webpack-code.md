# webpack源码
----
webpack@5.0.0-beta.11源码粗略解读

## cli / webpack-cli
- isInstalled判断是否安装了某个模块，
- 若没有则重新安装webpack-cli（执行`yarn add/npm install`webpack-cli的一系列选项）

## lib
- webpack
``` JavaScript
# 简易结构
module.exports = webpack = (options)=>{
    validateSchema(); // 校验传进来的格式结构
    compiler = createCompiler(options) =>{
        compiler.options = options;
        plugin.call(compiler, compiler); // compiler plugins
        compiler.hooks.environment.call(); // callback hooks
	    compiler.hooks.afterEnvironment.call();
        return compiler;
    }
    watchOptions = options.watchOptions || {};

    compiler.watch(); // 运行监听
    compiler.run(); // 执行run开始编译
}
```
- `Compiler`模块
    - 构造函数记录下`hooks`，初始化各种值并赋值到`this`，
    - watch()
    - run()
        - 使用`this.running`进行节流，
    - compile
        - `newCompilationParams`new参数
        - `hooks.beforeCompile`时开始调用函数并进行编译
        - `newCompilation`编译当前代码并监听具体状态`callback`不同的状态，log相应时间

## hot


## tooling


## schemas


## Chunk
- `constructor`记录下配置的ids、name、hash等参数
- 