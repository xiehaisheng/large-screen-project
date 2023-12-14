## 快速开始

#### 本地

1. 安装依赖， npm install
2. 本地编译， npm run dev

#### 线上

1. 编译， npm run build
2. 项目根目录 /dist

## 约定

* api接口直接写到页面中，不要搞service目录
* 资源在用的地方通过require引入
* 文件名采用小写，多个单词用-连接

### 文件规范

页面级别约定如下

```
|-- common
|   |-- assets
|   |   |-- activity
|   |       |-- a.png
|   |-- component-x
|   |   |-- index.tsx
|   |   |-- style.module.less
|   |-- component-y
|   |   |-- index.tsx
|   |   |-- style.module.less
|   |-- utils
|   |   |-- request.ts
|   |   |-- time.ts
|   |-- context
|   |   |-- setting.ts
|   |   |-- user.tsx
|-- pages
|   |-- a
|   |   |-- detail.tsx
|   |   |-- list.tsx
|   |   |-- style.module.less
|   |   |-- common
|   |   |   |-- assets
|   |   |   |-- component-x
|   |   |   |   |--index.tsx
|   |   |   |-- utils
|   |-- b
|   |   |-- index.tsx
|   |   |-- style.module.less
```
