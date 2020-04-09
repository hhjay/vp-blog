# css阴影

## box-shadow

- `box-shadow: x y width color`，可以定义多级阴影，引用为`box-shadow: x1 y1 width1 color1,x2 y2 width2 color2...`

- 内阴影`box-shadow: 0 0 width color inset`

- 外发光`box-shadow: 0 0 width color inset`

- 和`::after`/`::befor`一起使用


## `filter:drop-shadow`阴影滤镜

- `filter: drop-shadow(x, y, width, color)`


## 区别

- `box-shadow`是针对盒子级别的阴影

- `drop-shadow`是针对元素级别的阴影，例如图片/icon级别的阴影

- `drop-shadow`没有内阴影