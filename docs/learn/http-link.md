# 网络 / 服务端

## http
- http`HyperText Transfer Protocol`
- 使用udp协议，通过浏览器/网络爬虫等工具，客户端发起请求
- 请求方式
    - `GET`: url带queryString，有长度限制
        - 浏览器
            - IE: 2083byte - 2k+53
            - Firefox: 100000字符
            - Safari: 190000字符
            - Chrome: 8182字符
        - 服务器
            - Apache: 8291字符
            - IIS: 默认16384字符，新版可通过`<requestLimits maxQueryString="length"/>`配置修改
            - Nginx: 默认最大8k，可通过参数`client_header_buffer_size`/`large_client_header_buffers`修改
    - `POST`: 数据被包含在请求本文中，浏览器发出的POST请求的body主要有有两种格式
        - `application/x-www-form-urlencoded`传输简单数据`key1: value1; key2: values`
        - `multipart/form-data`文件格式
    - `OPTIONS`: 非简单请求预检查，使服务器传回该资源所支持的所有HTTP请求方法
    - `PUT`: 向指定资源位置上传其最新内容
    - `DELETE`: 请求服务器删除Request-URI所标识的资源
- http状态码
    - 1xx: 请求已被服务器接收，继续处理
    - 2xx: 请求已被服务器接收，成功
        - 200: 成功并返回数据
        - 201: 成功，已创建
        - 202: 成功，已接收
        - 203: 成功，但未授权
        - 204: 成功，但无内容
        - 205: 成功，重置内容
        - 206
    - 3xx: 重定向
        - 301: 永久重定向
        - 302: 临时重定向
        - 304: 内容未改动，缓存
    - 4xx: 有词法错误或无法被执行
        - 400: 请求出错
        - 401: 未授权，OPTIONS
        - 403: 服务端拒绝请求/请求方法有误
        - 404: 
        - 421: 请求过于频繁
    - 5xx: 服务端错误
        - 500: 服务端内部出错，无法完成请求
        - 502: 网关错误
        - 503: 系统正在重启，服务暂不可用
        - 504: 网关超时


## https
- https`HyperText Transfer Protocol Secure，常称http over TLS/http over SSL`，提供对网站服务器的身份认证，保护数据的隐私和完整性。
- 操作系统中安装了正确且受信任的证书颁发机构
- 证书颁发机构仅信任合法的网站
- 被访问网站提供有效证书，不然浏览器会对无效证书发出警告
- 证书能被正确验证


## http & https区别
    - 默认端口http(80)、https(443)
    - https需要证书(CA)
    - https具有安全性的SSL加密传输


## 3次握手 & 4次挥手
- 3次握手
    - 客户端主动发送`SYN包`请求，进入SYN_send状态，等待服务端确认
    - 服务端接收`SYN包`并确认，并发送`SYN+ACK包`，进入SYN_res状态
    - 客户端接收`SYN+ACK包`后，发送`ACK包`，双方进入连接(`established`)状态
    - ![服务器-三次握手](/三次握手.png)
- 4次挥手
    - 客户端发送一个`FIN包`，用来关闭到服务器的数据传输，客户端进入`FIN-wait`状态 
    - 服务器接收到`FIN包`并确认，并发送`ACK包`到客户端
    - 服务器关闭和客户端的连接，并发送`FIN包`给客户端，服务端进入`close-wait`
    - 客户端发回`ACK包`确认，客户端进入`time-wait`，服务端进入`closed`状态
    - ![服务器-四次挥手](/四次挥手.png)
