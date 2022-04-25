## 部分页面展示

登录页面
<img src="./img-example/login.png">
用户管理页面
<img src="./img-example/users.png">
商品管理
<img src="./img-example/goodsAdd.png">
角色列表
<img src="./img-example/roles.png">
分配权限
<img src="./img-example/roles1.png">
数据报表
<img src="./img-example/reports .png">

# 一、电商项目概述

### **`1. 后台管理系统`**:

- 用户登录模块
- 退出登录模块
- 用户管理模块
- 权限管理模块
  - 角色列表
  - 权限列表
- 商品管理
  - 商品列表
  - 分类管理
  - 参数管理
- 订单管理
- 数据统计

### 2. 开发模式

采用前后端分离的开发模式，前端是基于 Vue 技术栈的 SPA 项目。

用户 ==> 前端项目（SPA）==> 后端项目 ==> 数据库

### 3. 技术选型

1. 前端项目技术栈

- Vue
- Vue-router
- Element-UI
- Axios
- Echarts

2. 后端项目技术栈（了解）

- Node.js
- Express
- Jwt
- Mysql
- Sequelize

## 二、项目初始化

`前端项目初始化`

1. 安装 vue 脚手架
2. 通过 vue 脚手架创建项目，通过可视化的形式创建 vue 项目
   - windows 中，w+r 运行，输入 cmd，打开 Windows 管理，输入 vue ui
3. 配置 vue 路由
4. 配置 Element-UI 组件库
5. 配置 axios 库
6. 初始化 git 远程仓库
7. 本地项目托管到 GitHub 或码云中

`后端项目初始化`

1. 安装 MySQL 数据库
2. 安装 Node.js 环境
3. 配置项目相关信息
4. 启动项目
5. 使用 Postman 测试后台项目接口是否正常

## 三、登录、退出功能 -- Login

1. 登录业务流程

   1. 在登录页面输入用户名和密码
   2. 调用后台接口进行验证
   3. 通过验证之后，根据后台的响应状态跳转到项目主页

2. 登录业务相关技术点
   - http 是无状态的
   - 通过 cookie 在客户端记录状态
   - 通过 session 在服务器记录状态
   - 通过 token 方式维持状态

`token原理分析：客户端 <====> 服务器`

- 客户端：登录页面输入用户名和密码进行登录
- 服务器：验证通过之后生成该用户的 token 并返回
- 客户端：存储该 token
- 后续所有的请求都携带该 token 发送请求
- 服务器验证 token 是否通过

3. 登录页面的布局----通过 Element-UI 组件实现布局

   - el-form
   - el-form-item
   - el-input
   - el-button
   - 字体图标

4. 实现登录

   - 通过 axios 调用登录验证接口
   - 登录成功之后保持用户 token 信息
   - 跳转到项目主页

5. 路由导航守卫控制访问权限

   如果用户没有登录，不能访问/home，但是直接通过 URL 访问特定页面，则强制跳转到登录页面。

6. 退出功能实现原理

   基于 token 的方式实现退出比较简单，只需要销毁本地的 token 即可。这样，后续的请求就不会携带 token，必须重新登录一个新的 token 之后才可以访问页面。

## 四、主页左侧布局 -- Home

1. 整体布局：先上下划分，在左右划分

   - 头部区域 ===> el-header
   - 侧边栏区域 ===> el-aside
   - 右侧主体区域 ===> el-main

2. 左侧菜单布局

   菜单分为二级，并且可以折叠

   - el-menu
   - el-submenu
     - el-menu-item

3. 通过接口获取菜单数据

   通过 axios 请求拦截器添加 token，保证拥有获取数据的权限。

4. 发起请求左侧菜单数据

5. 左侧菜单栏 UI 绘制

   - 通过 v-for 双层循环分别进行一级菜单和二级菜单的渲染
   - 格式美化，一级菜单使用自定义图标（第三方字体图标库）
   - 折叠与展开功能
   - 实现首页路由的重定向，welcome 作为 home 的子路由，重定向到 welcome 上
   - 通过路由相关属性启用菜单的路由功能

## 五、完成 用户管理 主体区域 -- User

通过后台管理用户的账号信息，具体包括用户信息的展示、添加、修改、删除、角色分配、账号启用/注销等功能。

- 1.用户信息列表展示
  - 用户列表布局
    - 面包屑导航 el-breadcrumb
    - Element-UI 栅格系统基本使用 el-row/el-col
    - 表格布局 el-table、el-pagination
- 2.添加用户
  - 用户状态列和操作列处理
    - 作用域插槽
    - 启用或禁用用户
      - userStateChanged 监听 switch 开关的 change 事件
      - 拿到最新的状态后，发起 ajax 请求，调用接口把状态同步到服务器
  - 表格数据填充
    - 调用后台接口
    - 表格数据初填充
  - 表格数据分页----分页组件用法 pagination
    - ① 当前页码：pagenum
    - ② 每页条数：pagesize
    - ③ 记录总数：total
    - ④ 页码变化事件
    - ⑤ 每页条数变化事件
    - ⑥ 分页条菜单控制
  - 搜索功能
    - 将搜索关键字，作为参数添加到列表查询的参数中。
    - clearable 属性可得到一个可清空的输入框
    - 点击由 clearable 属性生成的清空按钮
  - 用户状态控制
    - 开关组件的用法
    - 接口调用更改用户的状态
  - 添加用户表单弹窗布局
    - 弹窗组件用法
    - 控制弹窗显示和隐藏
  - 表单验证
    - 内置表单验证规则
    - 自定义表单验证规则
  - 表单提交
    - 将用户信息作为参数，并调用后台接口添加用户。
- 3.修改用户
  - 根据 ID 查询用户信息
  - 编辑提交表单
- 4.删除用户
- 5.用户权限管理开发--六
- 6.用户角色分配
  - 完成分配权限功能之后
  - 展示分配角色对话框
  - 拿到需要被分配角色的用户信息
  - 在展示对话框之前，获取所有角色的列表
  - 拿到所有角色的数据列表 & 已选中的角色 Id 值
    - el-select 通过 v-model 双向绑定到一个具体的值上，里面的所有选项通过 for 循环展示
  - 点击按钮，分配角色（1.3.7）
  - 监听分配角色对话框的关闭事件

## 六、权限管理模块

**`权限列表 === Rights `**

1. 创建文件夹 power ===> Rights.vue

   - 初始化页面结构
   - 通过路由加载 rooter.js（导入，作为 home 的子路由使用）

2. 权限列表页面布局

   - 面包屑导航
   - 卡片视图

3. 请求权限列表数据（1.4.1）

   - 获取权限列表
   - 美化表格--Tag 标签

4. 权限管理业务分析

   通过权限管理模块控制不同的用户可以进行哪些操作，具体可以通过角色的方式进行控制，即每个用户分配一个特定的角色，角色包括不同的功能权限。

**`角色列表 === Roles `**

1. 角色列表创建 & 路由切换
2. 获取角色列表数据（1.5.1）
3. 角色列表数据渲染
   - ① 实现用户角色对话框布局
   - ② 控制角色对话框显示和隐藏
   - ③ 角色对话框显示时，加载角色列表数
     - 展开列
       - 通过 el-table-column 组件的 type =“expand” 方式实现表格行展开效果
     - 索引列
     - 角色名称
     - 角色描述
     - 操作区域
4. 角色下权限数据的渲染
   - 展开行中拿到当前角色对应的所有权限
   - 三层 for 循环嵌套渲染权限
     - 类型确定
     - 顶部底部边框线
     - 三角指示
     - 居中显示
5. 删除角色指定权限（1.5.7）
   - 点击权限菜单的删除按钮后，调用后台接口删除对应权限和其下的子权限。
6. 分配权限功能

   - ① 实现角色分配权限对话框布局
     - 分配权限对话框的弹出
     - 把所有权限以树形结构的形式加载
   - ② 控制对话框的显示和隐藏
     - 实现对话框布局效果
     - 控制对话框显示和隐藏
   - ③ 对话框显示时调用后台接口加载权限列表数据
   - ④ 完成树形权限菜单的展示
     - 全局注册 tree 组件
     - 绑定数据源
     - 指定属性绑定对象
     - 在每一个树形结构前添加复选框
       - node-key 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的
       - default-expand-all 是否默认展开所有节点
       - default-checked-keys 默认勾选的节点的 key 的数组
       - 递归函数获取所有三级权限的 ID
         - 遍历每一个权限节点，如果当前节点是三级节点就保存到数组 arr
         - （递归就是反复调用自身这个方法）
   - ⑤ 选中默认的权限
     - 获取所有叶子节点的 id
     - 设置权限节点选中
   - ⑥ 保存选中的权限，调用后台接口完成角色权限的分配
     - 获取所有选中的权限节点 id
       - getCheckedKeys 若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点的 key 所组成的数组
       - getHalfCheckedKeys 若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点的 key 所组成的数组
     - 调用接口完成角色权限的分配

## 七、商品分类 管理模块 -- Cate

商品分类用于在购物时，快速找到所要购买的商品，可以通过电商平台主页直观的看到。

0. 准备工作

   - 商品分类分支创建
   - 商品分类路由组件加载
   - 绘制商品页面基本结构

1. 商品分类数据列表（1.6.1）

   - 基本布局与数据获取
     - 实现基本布局
     - 实现分类列表数据加载

1. 树形表格

   - 第三方树形表格的基本使用
     - 安装依赖包 （地址： https://github.com/MisterTaki/vue-table-with-tree-grid）
     - 基本使用：在 main.js 注册使用
   - 实现分类树形列表

     - 实现树形列表布局并进行数据填充
       - data 表格各行的数据
       - columns 表格各列的配置
       - expand-type 是否为展开行类型表格
       - selection-type 是否为多选类型表格
       - show-index 是否显示数据索引
       - index-text 数据索引名称
       - border 是否显示纵向边框
       - show-row-hover 鼠标悬停时，是否高亮当前行
     - 自定义表格列
       - 作用域插槽:拿到子组件的数据
       - 是否有效
       - 排序
         - 根据对应的属性值渲染出不同的等级标签---el-tag
       - 操作

1. 分页功能---pagenum、pagesize

   - 实现分页组件效果
   - 分页组件数据处理

1. 商品分类数据列表（1.6.1）

   - options 可选项数据源，键名可通过 Props 属性配置
     - props 配置选项
     - value / v-model 选中项绑定值
     - clearable 是否支持清空选项
     - change-on-select 是否严格的遵守父子节点不互相关联

1. 添加分类(1.6.2)

   - 实现分类树形列表
     - 实现添加分类对话框布局
     - 控制对话框显示和隐藏
   - 实现分类级联菜单效果
     - 实现级联菜单效果
     - 级联菜单数据加载与填充
   - 控制父级分类的选择
     - 父级分类选择时，获取对应的分类 id
   - 完成分类添加
     - 将分类名称、分类等级和父分类 id 提交到后台，完成分类添加

## 八、商品分类 管理模块 -- Params

商品参数用于显示商品的固定的特征信息，可以通过电商平台商品详情页面直观的看到。

- 动态参数
- 静态属性

1. 商品分类选择

   - 选择商品分类
     - 页面基本布局
       - show-icon 来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图
       - closable 属性决定是否可关闭，接受 boolean，默认为 true
     - 加载商品分类数据(1.6.1)
       - 只需要发起 get 请求，不需要传递任何参数，就可以将所有分类数据获取到
     - 实现商品分类的级联选择效果
       - 拿到级联选择框的配置对象
       - 级联选择框双向绑定到的数组
       - 级联选择框选中项变化会触发 handleChange 函数
   - 控制级联菜单分类选择
     - 只允许选择三级分类--新版的 elementUI 默认选择到最后一级
     - 通过计算属性的方式获取分类 ID

2. 实现参数列表

   - 根据选择的商品分类加载对应的参数数据
     - 参数列表布局
       - Tabs 分隔内容上有关联但属于不同类别的数据集合
       - 计算属性 isBtnDisabled 根据长度返回布尔值，控制按钮的禁用和启用
     - 根据分类 id 加载参数列表数据(1.7.1)
       - 计算属性 cateId
       - 动态参数 many，静态参数 only
       - 在选择项改变的 handleChange 事件处理函数发起请求
       - 通过 if、 else 判断得到的数据到底是那个表格的数据
     - 渲染动态参数和静态属性的 table 表格

3. 实现动态参数与静态属性添加（1.7.2）

   - 监听对话框的关闭事件 addDialogClosed
   - 动态参数与静态属性表单重用
   - 添加动态参数与静态属性使用的是同一个接口，参数是一样的
     - 添加参数的对话框
     - 将修改对话框添加的数据加载到表单中（1.7.4）
       - 点击编辑按钮后，将对应的 ID 传到处理函数，并且根据传入的 id 查询参数之前的数据，绑定到表单中
       - 编辑提交参数（1.7.5）

4. 实现标签的添加和删除操作（1.7.3）

   - 添加标签和删除标签使用的是同一个接口，参数是一样的

5. 渲染参数下的可选项

   - 处理标签数据格式
   - 将字符串形式的数据分隔为数组
     - 将服务器返回的数组中的每一项 for 循环，将参数项上的 attr_vals 上的字符串分割为数组
     - 在展开行中循环渲染每一个 tag 标签

6. 控制添加标签文本框的显示

   - \$nextTick 的执行时机： DOM 更新完毕之后
   - 实现标签动态添加的文本框控制逻辑
     - 控制标签输入域的显示和隐藏
       - tag 动态标签
     - 对输入的内容进行数据绑定
     - 文本框自动获得焦点
       - `this.$nextTick(_ => { this.$refs.saveTagInput.$refs.input.focus(); });`
         - \$nextTick 方法的作用：当页面上元素被重新渲染之后才会执行回调函数中的代码
         - 第一个 ref 拿到 el-input，第二个 ref 从 el-input 身上拿到原生 DOM 节点
   - 按钮与文本框的切换显示 handleInputConfirm
   - 参数项的添加操作 handleInputConfirm
   - 实现删除参数项的操作
   - 只要选择的不是三级项，就清空表格
     - `this.manyTableData = [] this.onlyTableData = []`

## 九、商品列表 功能模块 -- List

商品管理模块用于维护电商平台的商品信息，包括商品的类型、参数、图片、详情等信息。通过商品管理模块可以实现商品的添加、修改、展示和删除等功能。

1. 商品列表

   - 实现商品列表布局效果
   - 调用后台接口获取商品列表数据（1.8.1）
     - table 表格区域渲染出每一列的数据和样式
     - main.js 中定义全局格式化时间的过滤器
   - 商品列表底部分页功能
   - 搜索与清空功能 clearable @clear="getGoodsList"

2. 删除商品功能(1.8.5)

3. 添加商品 -- Add

   - 路由跳转到添加页面 goAddpage
   - 基本布局与分布条效果
     - 添加商品基本布局
       - el-alert
     - 分布条组件用法
       - Steps 步骤条
         - 上下的间距 margin
         - align-center 居中显示
         - active 设置当前激活步骤
           - 激活步骤条的第一项，在 data 中绑定 activeIndex，实现数据联动
   - 商品信息选项卡 Tab 布局效果
     - Tab 组件的基本使用
     - 步骤条与 tab 栏的数据联动效果
       - 让 el-steps 和 el-tabs 共用同一个数据项 activeIndex
   - 商品基本信息
     - 商品基本信息表单布局
       - label-position 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width
     - 表单数据绑定(1.8.2)
     - 表单验证
   - 商品分类信息(1.6.1) getCateList
     - 商品分类布局
     - 商品分类数据加载（1.8.2）
       - 绘制商品分类级联选择器
       - 控制级联选择器的选择范围，只允许选择三级，使用 if-else 判断(if(this.addForm.goods_cat.length !== 3))
   - 阻止标签页的切换
     - before-leave 切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。
   - 商品动态参数(1.7.1)
     - 获取商品动态参数数据
       - 在点击第二个面板的时候发起数据请求，获取对应的动态参数
         - tab-click tab 被选中时触发
     - 商品动态参数布局
       - for 循环渲染每一个 item 项
       - Checkbox 多选框组：适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。
         - 将获取到的数组 for 循环，拿到 item 项，将里面的 attr_vals 用空格分割
         - 将数组渲染为复选框
           - 通过 for 循环形式将数组里面的每一项循环渲染为 el-checkbox
           - 设置 border 属性可以渲染为带有边框的多选框；样式优化
   - 商品静态属性(1.7.1)
     - 获取商品静态属性数据
       - else if 判断
     - 商品静态属性布局
   - 商品图片上传
     - 图片上传组件基本使用
       - Upload 上传：通过点击或者拖拽上传文件。图片列表缩略图
       - 图片上传到后台的 API 地址--action（1.9）
       - 处理图片预览效果 :on-preview="handlePreview"
       - headers 设置上传的请求头部
       - on-success 文件上传成功时的钩子 function(response, file, fileList)
     - 图片删除
       - on-remove 文件列表移除文件时的钩子 function(file, fileList)
     - 图片预览
       - on-preview 点击文件列表中已上传的文件时的钩子 function(file)
     - 完成图片上传
   - 商品详情
     - 富文本编辑器基本使用
       - 安装依赖 vue-quill-editor
         - 导入、注册、使用
         - 美化页面
     - 添加商品按钮
   - 完成商品添加
     - 拿到表单的引用对象，进行预验证 在 add 函数中
     - 处理商品相关数据格式 -- 处理 goods_cat 、 attrs（1.8.2）
       - 安装 lodash 依赖包
       - 导入
       - 在操作 goods_cat 之前，把 addForm 对象做 深拷贝 ，使用 lodash 包，调用 cloneDeep(obj) 函数
     - 调用接口完成商品添加

## 十、订单列表 功能模块 -- Order

订单管理模块用于维护商品的订单信息，可以查看订单的商品信息、物流信息，并且可以根据实际的运营情况对订单做适当的调整。

1. 订单列表展示

   - 订单数据加载（1.10.1）
   - 订单列表布局
     - 作用域插槽
     - 分页功能

2. 查看订单地址信息

   - 省市区三级联动效果
     - 给修改按钮绑定单击事件
     - 点击按钮期间弹出对话框
   - 省市区数据格式分析
     - cityData

3. 查看订单物流信息（1.10.5）

   - 调用接口获取物流数据
   - 实现物流信息列表效果
     - 2.6.0 新版本之下的 Timeline 时间线：可视化地呈现时间流信息
     - plugins 文件夹里面 timeline；timeline-item

## 十一、数据报表 功能模块 -- List

数据统计模块主要用于统计电商平台运营过程的中的各种统计数据，并通过直观的可视化方式展示出来，方便相关
运营和管理人员查看。

1. 用户来源数据统计报表
   - Echarts 第三方可视化库的基本使用
   - 实现用户来源数据统计报表（1.11.1）
     - ① 调用接口获取后台接口数据
     - ② 通过 echarts 的 api 实现报表效果

<hr>

# 电商管理后台 API 接口文档

## 1.1. API V1 接口说明

- 接口基准地址：`http://127.0.0.1:8888/api/private/v1/`
- 服务端已开启 CORS 跨域支持
- API V1 认证统一使用 Token 认证
- 需要授权的 API ，必须在请求头中使用 `Authorization` 字段提供 `token` 令牌
- 使用 HTTP Status Code 标识状态
- 数据返回格式统一使用 JSON

### 1.1.1. 支持的请求方法

- GET（SELECT）：从服务器取出资源（一项或多项）。
- POST（CREATE）：在服务器新建一个资源。
- PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。
- PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。
- DELETE（DELETE）：从服务器删除资源。
- HEAD：获取资源的元数据。
- OPTIONS：获取信息，关于资源的哪些属性是客户端可以改变的。

### 1.1.2. 通用返回状态说明

| _状态码_ | _含义_                | _说明_                                              |
| -------- | --------------------- | --------------------------------------------------- |
| 200      | OK                    | 请求成功                                            |
| 201      | CREATED               | 创建成功                                            |
| 204      | DELETED               | 删除成功                                            |
| 400      | BAD REQUEST           | 请求的地址不存在或者包含不支持的参数                |
| 401      | UNAUTHORIZED          | 未授权                                              |
| 403      | FORBIDDEN             | 被禁止访问                                          |
| 404      | NOT FOUND             | 请求的资源不存在                                    |
| 422      | Unprocesable entity   | [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误 |
| 500      | INTERNAL SERVER ERROR | 内部错误                                            |
|          |                       |                                                     |

---

## 1.2. 登录

### 1.2.1. 登录验证接口

- 请求路径：login
- 请求方法：post
- 请求参数

| 参数名   | 参数说明 | 备注     |
| -------- | -------- | -------- |
| username | 用户名   | 不能为空 |
| password | 密码     | 不能为空 |

- 响应参数

| 参数名   | 参数说明    | 备注            |
| -------- | ----------- | --------------- |
| id       | 用户 ID     |                 |
| rid      | 用户角色 ID |                 |
| username | 用户名      |                 |
| mobile   | 手机号      |                 |
| email    | 邮箱        |                 |
| token    | 令牌        | 基于 jwt 的令牌 |

- 响应数据

```json
{
  "data": {
    "id": 500,
    "rid": 0,
    "username": "admin",
    "mobile": "123",
    "email": "123@qq.com",
    "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUwMCwicmlkIjowLCJpYXQiOjE1MTI1NDQyOTksImV4cCI6MTUxMjYzMDY5OX0.eGrsrvwHm-tPsO9r_pxHIQ5i5L1kX9RX444uwnRGaIM"
  },
  "meta": {
    "msg": "登录成功",
    "status": 200
  }
}
```

## 1.3. 用户管理

### 1.3.1. 用户数据列表

- 请求路径：users
- 请求方法：get
- 请求参数

| 参数名   | 参数说明     | 备注     |
| -------- | ------------ | -------- |
| query    | 查询参数     | 可以为空 |
| pagenum  | 当前页码     | 不能为空 |
| pagesize | 每页显示条数 | 不能为空 |

- 响应参数

| 参数名    | 参数说明     | 备注 |
| --------- | ------------ | ---- |
| totalpage | 总记录数     |      |
| pagenum   | 当前页码     |      |
| users     | 用户数据集合 |      |

- 响应数据

```json
{
  "data": {
    "totalpage": 5,
    "pagenum": 4,
    "users": [
      {
        "id": 25,
        "username": "tige117",
        "mobile": "18616358651",
        "type": 1,
        "email": "tige112@163.com",
        "create_time": "2017-11-09T20:36:26.000Z",
        "mg_state": true, // 当前用户的状态
        "role_name": "炒鸡管理员"
      }
    ]
  },
  "meta": {
    "msg": "获取成功",
    "status": 200
  }
}
```

### 1.3.2. 添加用户

- 请求路径：users
- 请求方法：post
- 请求参数

| 参数名   | 参数说明 | 备注     |
| -------- | -------- | -------- |
| username | 用户名称 | 不能为空 |
| password | 用户密码 | 不能为空 |
| email    | 邮箱     | 可以为空 |
| mobile   | 手机号   | 可以为空 |

- 响应参数

| 参数名   | 参数说明    | 备注 |
| -------- | ----------- | ---- |
| id       | 用户 ID     |      |
| rid      | 用户角色 ID |      |
| username | 用户名      |      |
| mobile   | 手机号      |      |
| email    | 邮箱        |      |

- 响应数据

```json
{
  "data": {
    "id": 28,
    "username": "tige1200",
    "mobile": "test",
    "type": 1,
    "openid": "",
    "email": "test@test.com",
    "create_time": "2017-11-10T03:47:13.533Z",
    "modify_time": null,
    "is_delete": false,
    "is_active": false
  },
  "meta": {
    "msg": "用户创建成功",
    "status": 201
  }
}
```

### 1.3.3. 修改用户状态

- 请求路径：users/:uId/state/:type
- 请求方法：put
- 请求参数

| 参数名 | 参数说明 | 备注                                        |
| ------ | -------- | ------------------------------------------- |
| uId    | 用户 ID  | 不能为空`携带在url中`                       |
| type   | 用户状态 | 不能为空`携带在url中`，值为 true 或者 false |

- 响应数据

```json
{
  "data": {
    "id": 566,
    "rid": 30,
    "username": "admin",
    "mobile": "123456",
    "email": "bb@itcast.com",
    "mg_state": 0
  },
  "meta": {
    "msg": "设置状态成功",
    "status": 200
  }
}
```

### 1.3.4. 根据 ID 查询用户信息

- 请求路径：users/:id
- 请求方法：get
- 请求参数

| 参数名 | 参数说明 | 备注                  |
| ------ | -------- | --------------------- |
| id     | 用户 ID  | 不能为空`携带在url中` |

- 响应参数

| 参数名  | 参数说明 | 备注 |
| ------- | -------- | ---- |
| id      | 用户 ID  |      |
| role_id | 角色 ID  |      |
| mobile  | 手机号   |      |
| email   | 邮箱     |      |

- 响应数据

```json
{
  "data": {
    "id": 503,
    "username": "admin3",
    "role_id": 0,
    "mobile": "00000",
    "email": "new@new.com"
  },
  "meta": {
    "msg": "查询成功",
    "status": 200
  }
}
```

### 1.3.5. 编辑用户提交

- 请求路径：users/:id
- 请求方法：put
- 请求参数

| 参数名 | 参数说明 | 备注                        |
| ------ | -------- | --------------------------- |
| id     | 用户 id  | 不能为空 `参数是url参数:id` |
| email  | 邮箱     | 可以为空                    |
| mobile | 手机号   | 可以为空                    |

- 响应参数

| 参数名  | 参数说明 | 备注 |
| ------- | -------- | ---- |
| id      | 用户 ID  |      |
| role_id | 角色 ID  |      |
| mobile  | 手机号   |      |
| email   | 邮箱     |      |

- 响应数据

```json
/* 200表示成功，500表示失败 */
{
  "data": {
    "id": 503,
    "username": "admin3",
    "role_id": 0,
    "mobile": "111",
    "email": "123@123.com"
  },
  "meta": {
    "msg": "更新成功",
    "status": 200
  }
}
```

### 1.3.6. 删除单个用户

- 请求路径：users/:id
- 请求方法：delete
- 请求参数

| 参数名 | 参数说明 | 备注                       |
| ------ | -------- | -------------------------- |
| id     | 用户 id  | 不能为空`参数是url参数:id` |

- 响应参数
- 响应数据

```json
{
  "data": null,
  "meta": {
    "msg": "删除成功",
    "status": 200
  }
}
```

### 1.3.7. 分配用户角色

- 请求路径：users/:id/role
- 请求方法：put
- 请求参数

| 参数名 | 参数说明 | 备注                       |
| ------ | -------- | -------------------------- |
| id     | 用户 ID  | 不能为空`参数是url参数:id` |
| rid    | 角色 id  | 不能为空`参数body参数`     |

- 响应参数

| 参数名  | 参数说明 | 备注 |
| ------- | -------- | ---- |
| id      | 用户 ID  |      |
| role_id | 角色 ID  |      |
| mobile  | 手机号   |      |
| email   | 邮箱     |      |

- 响应数据

```json
{
  "data": {
    "id": 508,
    "rid": "30",
    "username": "asdf1",
    "mobile": "123123",
    "email": "adfsa@qq.com"
  },
  "meta": {
    "msg": "设置角色成功",
    "status": 200
  }
}
```

## 1.4. 权限管理

### 1.4.1. 所有权限列表

- 请求路径：rights/:type
- 请求方法：get
- 请求参数

| 参数名 | 参数说明 | 备注                                                                        |
| ------ | -------- | --------------------------------------------------------------------------- |
| type   | 类型     | 值 list 或 tree , list 列表显示权限, tree 树状显示权限,`参数是url参数:type` |

- 响应参数

| 参数名   | 参数说明     | 备注 |
| -------- | ------------ | ---- |
| id       | 权限 ID      |      |
| authName | 权限说明     |      |
| level    | 权限层级     |      |
| pid      | 权限父 ID    |      |
| path     | 对应访问路径 |      |

- 响应数据 type=list

```json
{
  "data": [
    {
      "id": 101,
      "authName": "商品管理",
      "level": "0",
      "pid": 0,
      "path": null
    },
    {
      "id": 102,
      "authName": "订单管理",
      "level": "0",
      "pid": 0,
      "path": null
    }
  ],
  "meta": {
    "msg": "获取权限列表成功",
    "status": 200
  }
}
```

type=tree

```json
{
  "data": [
    {
      "id": 101,
      "authName": "商品管理",
      "path": null,
      "pid": 0,
      "children": [
        {
          "id": 104,
          "authName": "商品列表",
          "path": null,
          "pid": 101,
          "children": [
            {
              "id": 105,
              "authName": "添加商品",
              "path": null,
              "pid": "104,101"
            }
          ]
        }
      ]
    }
  ],
  "meta": {
    "msg": "获取权限列表成功",
    "status": 200
  }
}
```

### 1.4.2. 左侧菜单权限

- 请求路径：menus
- 请求方法：get
- 响应数据

```json
{
    "data":
        {
            "id": 101,
            "authName": "商品管理",
            "path": null,
            "children": [
                {
                    "id": 104,
                    "authName": "商品列表",
                    "path": null,
                    "children": []
                }
            ]
        }
    "meta": {
        "msg": "获取菜单列表成功",
        "status": 200
    }
}
```

## 1.5. 角色管理

### 1.5.1. 角色列表

- 请求路径：roles

- 请求方法：get

- 响应数据说明

  - 第一层为角色信息

  * 第二层开始为权限说明，权限一共有 3 层权限
  * 最后一层权限，不包含 `children` 属性

- 响应数据

```json
{
  "data": [
    {
      "id": 30,
      "roleName": "主管",
      "roleDesc": "技术负责人",
      "children": [
        {
          "id": 101,
          "authName": "商品管理",
          "path": null,
          "children": [
            {
              "id": 104,
              "authName": "商品列表",
              "path": null,
              "children": [
                {
                  "id": 105,
                  "authName": "添加商品",
                  "path": null
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "meta": {
    "msg": "获取成功",
    "status": 200
  }
}
```

### 1.5.2. 添加角色

- 请求路径：roles
- 请求方法：post
- 请求参数

| 参数名   | 参数说明 | 备注     |
| -------- | -------- | -------- |
| roleName | 角色名称 | 不能为空 |
| roleDesc | 角色描述 | 可以为空 |

- 响应参数

| 参数名   | 参数说明 | 备注 |
| -------- | -------- | ---- |
| roleId   | 角色 ID  |      |
| roleName | 角色名称 |      |
| roleDesc | 角色描述 |      |

- 响应数据

```json
{
  "data": {
    "roleId": 40,
    "roleName": "admin2",
    "roleDesc": "admin2Desc"
  },
  "meta": {
    "msg": "创建成功",
    "status": 201
  }
}
```

### 1.5.3. 根据 ID 查询角色

- 请求路径：roles/:id
- 请求方法：get
- 请求参数

| 参数名 | 参数说明 | 备注                  |
| ------ | -------- | --------------------- |
| :id    | 角色 ID  | 不能为空`携带在url中` |

- 响应参数

| 参数名   | 参数说明 | 备注 |
| -------- | -------- | ---- |
| roleId   | 角色 ID  |      |
| roleName | 角色名称 |      |
| roleDesc | 角色描述 |      |

- 响应数据

```json
{
  "data": {
    "roleId": 31,
    "roleName": "测试角色",
    "roleDesc": "测试负责人"
  },
  "meta": {
    "msg": "获取成功",
    "status": 200
  }
}
```

### 1.5.4. 编辑提交角色

- 请求路径：roles/:id
- 请求方法：put
- 请求参数

| 参数名   | 参数说明 | 备注                  |
| -------- | -------- | --------------------- |
| :id      | 角色 ID  | 不能为空`携带在url中` |
| roleName | 角色名称 | 不能为空              |
| roleDesc | 角色描述 | 可以为空              |

- 响应数据

```json
{
  "data": {
    "roleId": 31,
    "roleName": "测试角色",
    "roleDesc": "测试角色描述"
  },
  "meta": {
    "msg": "获取成功",
    "status": 200
  }
}
```

### 1.5.5. 删除角色

- 请求路径：roles/:id
- 请求方法：delete
- 请求参数

| 参数名 | 参数说明 | 备注                  |
| ------ | -------- | --------------------- |
| :id    | 角色 ID  | 不能为空`携带在url中` |

- 响应数据

```json
{
  "data": null,
  "meta": {
    "msg": "删除成功",
    "status": 200
  }
}
```

### 1.5.6. 角色授权

- 请求路径：roles/:roleId/rights
- 请求方法：post
- 请求参数：通过 `请求体` 发送给后端

| 参数名  | 参数说明               | 备注                                                                                                |
| ------- | ---------------------- | --------------------------------------------------------------------------------------------------- |
| :roleId | 角色 ID                | 不能为空`携带在url中`                                                                               |
| rids    | 权限 ID 列表（字符串） | 以 `,` 分割的权限 ID 列表（获取所有被选中、叶子节点的 key 和半选中节点的 key, 包括 1，2，3 级节点） |

- 响应数据

```json
{
  "data": null,
  "meta": {
    "msg": "更新成功",
    "status": 200
  }
}
```

### 1.5.7. 删除角色指定权限

- 请求路径：roles/:roleId/rights/:rightId

- 请求方法：delete

- 请求参数

  | 参数名   | 参数说明 | 备注                  |
  | -------- | -------- | --------------------- |
  | :roleId  | 角色 ID  | 不能为空`携带在url中` |
  | :rightId | 权限 ID  | 不能为空`携带在url中` |

- 响应数据说明

  - 返回的 data, 是当前角色下最新的权限数据

- 响应数据

  ```json
  {
    "data": [
      {
        "id": 101,
        "authName": "商品管理",
        "path": null,
        "children": [
          {
            "id": 104,
            "authName": "商品列表",
            "path": null,
            "children": [
              {
                "id": 105,
                "authName": "添加商品",
                "path": null
              },
              {
                "id": 116,
                "authName": "修改",
                "path": null
              }
            ]
          }
        ]
      }
    ],
    "meta": {
      "msg": "取消权限成功",
      "status": 200
    }
  }
  ```

## 1.6. 商品分类管理

### 1.6.1. 商品分类数据列表

- 请求路径：categories
- 请求方法：get
- 请求参数

| 参数名   | 参数说明           | 备注                                                                                               |
| -------- | ------------------ | -------------------------------------------------------------------------------------------------- |
| type     | [1,2,3]            | 值：1，2，3 分别表示显示一层二层三层分类列表<br />【可选参数】如果不传递，则默认获取所有级别的分类 |
| pagenum  | 当前页码值         | 【可选参数】如果不传递，则默认获取所有分类                                                         |
| pagesize | 每页显示多少条数据 | 【可选参数】如果不传递，则默认获取所有分类                                                         |

- 响应参数

| 参数名    | 参数说明     | 备注 |
| --------- | ------------ | ---- |
| cat_id    | 分类 ID      |      |
| cat_name  | 分类名称     |      |
| cat_pid   | 分类父 ID    |      |
| cat_level | 分类当前层级 |      |

- 响应数据

```json
{
  "data": [
    {
      "cat_id": 1,
      "cat_name": "大家电",
      "cat_pid": 0,
      "cat_level": 0,
      "cat_deleted": false,
      "children": [
        {
          "cat_id": 3,
          "cat_name": "电视",
          "cat_pid": 1,
          "cat_level": 1,
          "cat_deleted": false,
          "children": [
            {
              "cat_id": 6,
              "cat_name": "曲面电视",
              "cat_pid": 3,
              "cat_level": 2,
              "cat_deleted": false
            },
            {
              "cat_id": 7,
              "cat_name": "海信",
              "cat_pid": 3,
              "cat_level": 2,
              "cat_deleted": false
            }
          ]
        }
      ]
    }
  ],
  "meta": {
    "msg": "获取成功",
    "status": 200
  }
}
```

### 1.6.2. 添加分类

- 请求路径：categories
- 请求方法：post
- 请求参数

| 参数名    | 参数说明  | 备注                                                        |
| --------- | --------- | ----------------------------------------------------------- |
| cat_pid   | 分类父 ID | 不能为空，如果要添加 1 级分类，则父分类 Id 应该设置为 `0`   |
| cat_name  | 分类名称  | 不能为空                                                    |
| cat_level | 分类层级  | 不能为空，`0`表示一级分类；`1`表示二级分类；`2`表示三级分类 |

- 响应数据

```json
{
  "data": {
    "cat_id": 62,
    "cat_name": "相框",
    "cat_pid": "1",
    "cat_level": "1"
  },
  "meta": {
    "msg": "创建成功",
    "status": 201
  }
}
```

### 1.6.3. 根据 id 查询分类

- 请求路径：categories/:id
- 请求方法：get
- 请求参数

| 参数名 | 参数说明 | 备注                  |
| ------ | -------- | --------------------- |
| :id    | 分类 ID  | 不能为空`携带在url中` |

- 响应数据

```
{
    "data": {
        "cat_id": 3,
        "cat_name": "厨卫电器",
        "cat_pid": 0,
        "cat_level": 0
    },
    "meta": {
        "msg": "获取成功",
        "status": 200
    }
}
```

### 1.6.4. 编辑提交分类

- 请求路径：categories/:id
- 请求方法：put
- 请求参数

| 参数名   | 参数说明 | 备注                             |
| -------- | -------- | -------------------------------- |
| :id      | 分类 ID  | 不能为空`携带在url中`            |
| cat_name | 分类名称 | 不能为空【此参数，放到请求体中】 |

- 响应数据

```
{
    "data": {
        "cat_id": 22,
        "cat_name": "自拍杆",
        "cat_pid": 7,
        "cat_level": 2
    },
    "meta": {
        "msg": "更新成功",
        "status": 200
    }
}
```

### 1.6.5. 删除分类

- 请求路径：categories/:id
- 请求方法：delete
- 请求参数

| 参数名 | 参数说明 | 备注                  |
| ------ | -------- | --------------------- |
| :id    | 分类 ID  | 不能为空`携带在url中` |

- 响应数据

```
{
    "data": null,
    "meta": {
        "msg": "删除成功",
        "status": 200
    }
}
```

## 1.7. 分类参数管理

### 1.7.1. 参数列表

- 请求路径：categories/:id/attributes
- 请求方法：get
- 请求参数

| 参数名 | 参数说明    | 备注                                                      |
| ------ | ----------- | --------------------------------------------------------- |
| :id    | 分类 ID     | 不能为空`携带在url中`                                     |
| sel    | [only,many] | 不能为空,通过 only 或 many 来获取分类静态参数还是动态参数 |

- 响应参数

| 参数名     | 参数说明                                       | 备注 |
| ---------- | ---------------------------------------------- | ---- |
| attr_id    | 分类参数 ID                                    |      |
| attr_name  | 分类参数名称                                   |      |
| cat_id     | 分类参数所属分类                               |      |
| attr_sel   | only:输入框(唯一) many:后台下拉列表/前台单选框 |      |
| attr_write | manual:手工录入 list:从列表选择                |      |
| attr_vals  | 如果 attr_write:list,那么有值，该值以逗号分隔  |      |

- 响应数据

```
{
    "data": [
        {
            "attr_id": 1,
            "attr_name": "cpu",
            "cat_id": 22,
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "ffff"
        }
    ],
    "meta": {
        "msg": "获取成功",
        "status": 200
    }
}
```

### 1.7.2. 添加动态参数或者静态属性

- 请求路径：categories/:id/attributes
- 请求方法：post
- 请求参数

| 参数名    | 参数说明                                   | 备注                  |
| --------- | ------------------------------------------ | --------------------- |
| :id       | 分类 ID                                    | 不能为空`携带在url中` |
| attr_name | 参数名称                                   | 不能为空              |
| attr_sel  | [only,many]                                | 不能为空              |
| attr_vals | 如果是 many 就需要填写值的选项，以逗号分隔 | 【可选参数】          |

- 响应数据

```
{
    "data": {
        "attr_id": 44,
        "attr_name": "测试参数",
        "cat_id": "1",
        "attr_sel": "many",
        "attr_write": "list",
        "attr_vals": "a,b,c"
    },
    "meta": {
        "msg": "创建成功",
        "status": 201
    }
}
```

### 1.7.3. 删除参数

- 请求路径： categories/:id/attributes/:attrid
- 请求方法：delete
- 请求参数

| 参数名  | 参数说明 | 备注                  |
| ------- | -------- | --------------------- |
| :id     | 分类 ID  | 不能为空`携带在url中` |
| :attrid | 参数 ID  | 不能为空`携带在url中` |

- 响应数据

```
{
    "data": null,
    "meta": {
        "msg": "删除成功",
        "status": 200
    }
}
```

### 1.7.4. 根据 ID 查询参数

- 请求路径：categories/:id/attributes/:attrId
- 请求方法：get
- 请求参数

| 参数名    | 参数说明                                   | 备注                  |
| --------- | ------------------------------------------ | --------------------- |
| :id       | 分类 ID                                    | 不能为空`携带在url中` |
| :attrId   | 属性 ID                                    | 不能为空`携带在url中` |
| attr_sel  | [only,many]                                | 不能为空              |
| attr_vals | 如果是 many 就需要填写值的选项，以逗号分隔 |                       |

- 响应数据

```
{
    "data": {
        "attr_id": 1,
        "attr_name": "cpu",
        "cat_id": 22,
        "attr_sel": "only",
        "attr_write": "manual",
        "attr_vals": "ffff"
    },
    "meta": {
        "msg": "获取成功",
        "status": 200
    }
}
```

### 1.7.5. 编辑提交参数

- 请求路径：categories/:id/attributes/:attrId
- 请求方法：put
- 请求参数

| 参数名    | 参数说明                 | 备注                       |
| --------- | ------------------------ | -------------------------- |
| :id       | 分类 ID                  | 不能为空`携带在url中`      |
| :attrId   | 属性 ID                  | 不能为空`携带在url中`      |
| attr_name | 新属性的名字             | 不能为空，携带在`请求体`中 |
| attr_sel  | 属性的类型[many 或 only] | 不能为空，携带在`请求体`中 |
| attr_vals | 参数的属性值             | 可选参数，携带在`请求体`中 |

- 响应数据

```
{
    "data": {
        "attr_id": 9,
        "attr_name": "测试更新",
        "cat_id": "43",
        "attr_sel": "only",
        "attr_write": "manual",
        "attr_vals": "abc"
    },
    "meta": {
        "msg": "更新成功",
        "status": 200
    }
}
```

## 1.8. 商品管理

### 1.8.1. 商品列表数据

- 请求路径：goods
- 请求方法：get
- 请求参数

| 参数名   | 参数说明     | 备注     |
| -------- | ------------ | -------- |
| query    | 查询参数     | 可以为空 |
| pagenum  | 当前页码     | 不能为空 |
| pagesize | 每页显示条数 | 不能为空 |

- 响应参数

| 参数名       | 参数说明     | 备注                                   |
| ------------ | ------------ | -------------------------------------- |
| total        | 总共商品条数 |                                        |
| pagenum      | 当前商品页数 |                                        |
| goods_id     | 商品 ID      |                                        |
| goods_name   | 商品名称     |                                        |
| goods_price  | 价格         |                                        |
| goods_number | 数量         |                                        |
| goods_weight | 重量         | 不能为空                               |
| goods_state  | 商品状态     | 商品状态 0: 未通过 1: 审核中 2: 已审核 |
| add_time     | 添加时间     |                                        |
| upd_time     | 更新时间     |                                        |
| hot_mumber   | 热销品数量   |                                        |
| is_promote   | 是否是热销品 |                                        |

- 响应数据

```
{
    "data": {
        "total": 50,
        "pagenum": "1",
        "goods": [
            {
                "goods_id": 144,
                "goods_name": "asfdsd",
                "goods_price": 1,
                "goods_number": 1,
                "goods_weight": 1,
                "goods_state": null,
                "add_time": 1512954923,
                "upd_time": 1512954923,
                "hot_mumber": 0,
                "is_promote": false
            }
        ]
    },
    "meta": {
        "msg": "获取成功",
        "status": 200
    }
}
```

### 1.8.2. 添加商品

- 请求路径：goods
- 请求方法：post
- 请求参数

| 参数名          | 参数说明                                          | 备注     |
| --------------- | ------------------------------------------------- | -------- |
| goods_name      | 商品名称                                          | 不能为空 |
| goods_cat       | 以为','分割的分类列表                             | 不能为空 |
| goods_price     | 价格                                              | 不能为空 |
| goods_number    | 数量                                              | 不能为空 |
| goods_weight    | 重量                                              | 不能为空 |
| goods_introduce | 介绍                                              | 可以为空 |
| pics            | 上传的图片临时路径（对象）                        | 可以为空 |
| attrs           | 商品的参数（数组），包含 `动态参数` 和 `静态属性` | 可以为空 |

- 请求数据

```json
{
  "goods_name": "test_goods_name2",
  "goods_cat": "1,2,3",
  "goods_price": 20,
  "goods_number": 30,
  "goods_weight": 40,
  "goods_introduce": "abc",
  "pics": [{ "pic": "/tmp_uploads/30f08d52c551ecb447277eae232304b8" }],
  "attrs": [
    {
      "attr_id": 15,
      "attr_value": "ddd"
    },
    {
      "attr_id": 15,
      "attr_value": "eee"
    }
  ]
}
```

- 响应参数

| 参数名       | 参数说明                   | 备注                                                                                                                  |
| ------------ | -------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| total        | 总共商品条数               |                                                                                                                       |
| pagenum      | 当前商品页数               |                                                                                                                       |
| goods_id     | 商品 ID                    |                                                                                                                       |
| goods_cat    | 以为','分割的分类列表      |                                                                                                                       |
| goods_name   | 商品名称                   |                                                                                                                       |
| goods_price  | 价格                       |                                                                                                                       |
| goods_number | 数量                       |                                                                                                                       |
| goods_weight | 重量                       | 不能为空                                                                                                              |
| goods_state  | 商品状态                   | 商品状态 0: 未通过 1: 审核中 2: 已审核                                                                                |
| add_time     | 添加时间                   |                                                                                                                       |
| upd_time     | 更新时间                   |                                                                                                                       |
| hot_mumber   | 热销品数量                 |                                                                                                                       |
| is_promote   | 是否是热销品               |                                                                                                                       |
| pics         | 上传的图片临时路径（对象） | pics_id:图片 ID,goods_id:商品 ID,pics_big:大图,pics_mid:中图,pics_sma:小图                                            |
| attrs        | 商品的参数（数组）         | goods_id:商品 ID,attr_value:当前商品的参数值,add_price:浮动价格,attr_vals:预定义的参数值,attr_sel:手动输入，还是单选, |

- 响应数据

```json
{
  "data": {
    "goods_id": 145,
    "goods_name": "test_goods_name2",
    "goods_price": 20,
    "cat_id": 1,
    "goods_number": 30,
    "goods_weight": 40,
    "goods_introduce": "abc",
    "goods_big_logo": "",
    "goods_small_logo": "",
    "goods_state": 1,
    "add_time": 1512962370,
    "upd_time": 1512962370,
    "hot_mumber": 0,
    "is_promote": false,
    "pics": [
      {
        "pics_id": 397,
        "goods_id": 145,
        "pics_big": "uploads/goodspics/big_30f08d52c551ecb447277eae232304b8",
        "pics_mid": "uploads/goodspics/mid_30f08d52c551ecb447277eae232304b8",
        "pics_sma": "uploads/goodspics/sma_30f08d52c551ecb447277eae232304b8"
      }
    ],
    "attrs": [
      {
        "goods_id": 145,
        "attr_id": 15,
        "attr_value": "ddd",
        "add_price": null,
        "attr_name": "fffffff",
        "attr_sel": "many",
        "attr_write": "list",
        "attr_vals": ""
      },
      {
        "goods_id": 145,
        "attr_id": 15,
        "attr_value": "eee",
        "add_price": null,
        "attr_name": "fffffff",
        "attr_sel": "many",
        "attr_write": "list",
        "attr_vals": ""
      }
    ]
  },
  "meta": {
    "msg": "创建商品成功",
    "status": 201
  }
}
```

### 1.8.3. 根据 ID 查询商品

- 请求路径：goods/:id
- 请求方法：get
- 请求参数

| 参数名 | 参数说明 | 备注                  |
| ------ | -------- | --------------------- |
| id     | 商品 ID  | 不能为空`携带在url中` |

- 响应参数

| 参数名       | 参数说明                   | 备注                                                                                                                  |
| ------------ | -------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| total        | 总共商品条数               |                                                                                                                       |
| pagenum      | 当前商品页数               |                                                                                                                       |
| goods_id     | 商品 ID                    |                                                                                                                       |
| goods_name   | 商品名称                   |                                                                                                                       |
| goods_price  | 价格                       |                                                                                                                       |
| goods_number | 数量                       |                                                                                                                       |
| goods_weight | 重量                       | 不能为空                                                                                                              |
| goods_state  | 商品状态                   | 商品状态 0: 未通过 1: 审核中 2: 已审核                                                                                |
| add_time     | 添加时间                   |                                                                                                                       |
| upd_time     | 更新时间                   |                                                                                                                       |
| hot_mumber   | 热销品数量                 |                                                                                                                       |
| is_promote   | 是否是热销品               |                                                                                                                       |
| pics         | 上传的图片临时路径（对象） | pics_id:图片 ID,goods_id:商品 ID,pics_big:大图,pics_mid:中图,pics_sma:小图                                            |
| attrs        | 商品的参数（数组）         | goods_id:商品 ID,attr_value:当前商品的参数值,add_price:浮动价格,attr_vals:预定义的参数值,attr_sel:手动输入，还是单选, |

- 响应数据

```
{
    "data": {
        "goods_id": 145,
        "goods_name": "test_goods_name2",
        "goods_price": 20,
        "goods_number": 30,
        "goods_weight": 40,
        "goods_introduce": "abc",
        "goods_big_logo": "",
        "goods_small_logo": "",
        "goods_state": 1,
        "add_time": 1512962370,
        "upd_time": 1512962370,
        "hot_mumber": 0,
        "is_promote": false,
        "pics": [
            {
                "pics_id": 397,
                "goods_id": 145,
                "pics_big": "uploads/goodspics/big_30f08d52c551ecb447277eae232304b8",
                "pics_mid": "uploads/goodspics/mid_30f08d52c551ecb447277eae232304b8",
                "pics_sma": "uploads/goodspics/sma_30f08d52c551ecb447277eae232304b8"
            }
        ],
        "attrs": [
            {
                "goods_id": 145,
                "attr_id": 15,
                "attr_value": "ddd",
                "add_price": null,
                "attr_name": "fffffff",
                "attr_sel": "many",
                "attr_write": "list",
                "attr_vals": ""
            },
            {
                "goods_id": 145,
                "attr_id": 15,
                "attr_value": "eee",
                "add_price": null,
                "attr_name": "fffffff",
                "attr_sel": "many",
                "attr_write": "list",
                "attr_vals": ""
            }
        ]
    },
    "meta": {
        "msg": "创建商品成功",
        "status": 201
    }
}
```

### 1.8.4. 编辑提交商品

- 请求路径：goods/:id
- 请求方法：put
- 请求参数

| 参数名          | 参数说明                   | 备注                  |
| --------------- | -------------------------- | --------------------- |
| id              | 商品 ID                    | 不能为空`携带在url中` |
| goods_name      | 商品名称                   | 不能为空              |
| goods_price     | 价格                       | 不能为空              |
| goods_number    | 数量                       | 不能为空              |
| goods_weight    | 重量                       | 不能为空              |
| goods_introduce | 介绍                       | 可以为空              |
| pics            | 上传的图片临时路径（对象） | 可以为空              |
| attrs           | 商品的参数（数组）         | 可以为空              |

- 请求数据

```
{
  "goods_name":"test_goods_name2",
  "goods_price":20,
  "goods_number":30,
  "goods_weight":40,
  "goods_introduce":"abc",
  "pics":[
    {"pic":"/tmp_uploads/30f08d52c551ecb447277eae232304b8"}
    ],
  "attrs":[
    {
      "attr_id":15,
      "attr_value":"ddd"
    },
    {
      "attr_id":15,
      "attr_value":"eee"
    }
    ]
}
```

- 响应参数

| 参数名       | 参数说明                   | 备注                                                                                                                  |
| ------------ | -------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| total        | 总共商品条数               |                                                                                                                       |
| pagenum      | 当前商品页数               |                                                                                                                       |
| goods_id     | 商品 ID                    |                                                                                                                       |
| goods_name   | 商品名称                   |                                                                                                                       |
| goods_price  | 价格                       |                                                                                                                       |
| goods_number | 数量                       |                                                                                                                       |
| goods_weight | 重量                       | 不能为空                                                                                                              |
| goods_state  | 商品状态                   | 商品状态 0: 未通过 1: 审核中 2: 已审核                                                                                |
| add_time     | 添加时间                   |                                                                                                                       |
| upd_time     | 更新时间                   |                                                                                                                       |
| hot_mumber   | 热销品数量                 |                                                                                                                       |
| is_promote   | 是否是热销品               |                                                                                                                       |
| pics         | 上传的图片临时路径（对象） | pics_id:图片 ID,goods_id:商品 ID,pics_big:大图,pics_mid:中图,pics_sma:小图                                            |
| attrs        | 商品的参数（数组）         | goods_id:商品 ID,attr_value:当前商品的参数值,add_price:浮动价格,attr_vals:预定义的参数值,attr_sel:手动输入，还是单选, |

- 响应数据

```
{
    "data": {
        "goods_id": 145,
        "goods_name": "test_goods_name2",
        "goods_price": 20,
        "goods_number": 30,
        "goods_weight": 40,
        "goods_introduce": "abc",
        "goods_big_logo": "",
        "goods_small_logo": "",
        "goods_state": 1,
        "add_time": 1512962370,
        "upd_time": 1512962370,
        "hot_mumber": 0,
        "is_promote": false,
        "pics": [
            {
                "pics_id": 397,
                "goods_id": 145,
                "pics_big": "uploads/goodspics/big_30f08d52c551ecb447277eae232304b8",
                "pics_mid": "uploads/goodspics/mid_30f08d52c551ecb447277eae232304b8",
                "pics_sma": "uploads/goodspics/sma_30f08d52c551ecb447277eae232304b8"
            }
        ],
        "attrs": [
            {
                "goods_id": 145,
                "attr_id": 15,
                "attr_value": "ddd",
                "add_price": null,
                "attr_name": "fffffff",
                "attr_sel": "many",
                "attr_write": "list",
                "attr_vals": ""
            },
            {
                "goods_id": 145,
                "attr_id": 15,
                "attr_value": "eee",
                "add_price": null,
                "attr_name": "fffffff",
                "attr_sel": "many",
                "attr_write": "list",
                "attr_vals": ""
            }
        ]
    },
    "meta": {
        "msg": "创建商品成功",
        "status": 201
    }
}
```

### 1.8.5. 删除商品

- 请求路径：goods/:id
- 请求方法：delete
- 请求参数

| 参数名 | 参数说明 | 备注                  |
| ------ | -------- | --------------------- |
| id     | 商品 ID  | 不能为空`携带在url中` |

- 响应数据

```
{
    "data": null,
    "meta": {
        "msg": "删除成功",
        "status": 200
    }
}
```

\###同步商品图片

- 请求路径：goods/:id/pics
- 请求方法：put
- 请求参数

| 参数名 | 参数说明     | 备注                                                                                |
| ------ | ------------ | ----------------------------------------------------------------------------------- |
| id     | 商品 ID      | 不能为空`携带在url中`                                                               |
| pics   | 商品图片集合 | 如果有 pics_id 字段会保留该图片，如果没有 pics_id 但是有 pic 字段就会新生成图片数据 |

- 请求数据

```
;[
  { pic: 'tmp_uploads/db28f6316835836e97653b5c75e418be.png' },
  {
    pics_id: 397,
    goods_id: 145,
    pics_big: 'uploads/goodspics/big_30f08d52c551ecb447277eae232304b8',
    pics_mid: 'uploads/goodspics/mid_30f08d52c551ecb447277eae232304b8',
    pics_sma: 'uploads/goodspics/sma_30f08d52c551ecb447277eae232304b8'
  }
]
```

- 响应数据

```
{
    "data": {
        "goods_id": 96,
        "goods_name": "iphoneXX",
        "goods_price": 2,
        "goods_number": 22,
        "goods_weight": 22,
        "goods_introduce": null,
        "goods_big_logo": "./uploads/goods/20171113/483a3b8e99e534ec3e4312dbbaee7c9d.jpg",
        "goods_small_logo": "./uploads/goods/20171113/small_483a3b8e99e534ec3e4312dbbaee7c9d.jpg",
        "goods_state": 0,
        "is_del": "1",
        "add_time": 1510045904,
        "upd_time": 1512635159,
        "delete_time": 1512635159,
        "hot_mumber": 0,
        "is_promote": false,
        "pics": [
            {
                "pics_id": 383,
                "goods_id": 96,
                "pics_big": "uploads/goodspics/big_6f5750132abd3f5b2b93dd722fcde653.jpg",
                "pics_mid": "uploads/goodspics/mid_6f5750132abd3f5b2b93dd722fcde653.jpg",
                "pics_sma": "uploads/goodspics/sma_6f5750132abd3f5b2b93dd722fcde653.jpg"
            }
        ],
        "attrs": [
            {
                "goods_id": 96,
                "attr_id": 15,
                "attr_value": "eee",
                "add_price": null,
                "attr_name": "fffffff",
                "attr_sel": "many",
                "attr_write": "list",
                "attr_vals": ""
            },
            {
                "goods_id": 96,
                "attr_id": 15,
                "attr_value": "ddd",
                "add_price": null,
                "attr_name": "fffffff",
                "attr_sel": "many",
                "attr_write": "list",
                "attr_vals": ""
            }
        ]
    },
    "meta": {
        "msg": "更新成功",
        "status": 200
    }
}
```

\###同步商品属性

- 请求路径：goods/:id/attributes
- 请求方法：put
- 请求参数

| 参数名 | 参数说明 | 备注                  |
| ------ | -------- | --------------------- |
| id     | 商品 ID  | 不能为空`携带在url中` |

- 请求数据

```
;[
  {
    attr_id: 15,
    attr_value: 'ddd'
  },
  {
    attr_id: 15,
    attr_value: 'eee'
  }
]
```

- 响应数据

```
{
    "data": {
        "goods_id": 96,
        "goods_name": "iphoneXX",
        "goods_price": 2,
        "goods_number": 22,
        "goods_weight": 22,
        "goods_introduce": null,
        "goods_big_logo": "./uploads/goods/20171113/483a3b8e99e534ec3e4312dbbaee7c9d.jpg",
        "goods_small_logo": "./uploads/goods/20171113/small_483a3b8e99e534ec3e4312dbbaee7c9d.jpg",
        "goods_state": 0,
        "is_del": "1",
        "add_time": 1510045904,
        "upd_time": 1512635159,
        "delete_time": 1512635159,
        "hot_mumber": 0,
        "is_promote": false,
        "pics": [
            {
                "pics_id": 383,
                "goods_id": 96,
                "pics_big": "uploads/goodspics/big_6f5750132abd3f5b2b93dd722fcde653.jpg",
                "pics_mid": "uploads/goodspics/mid_6f5750132abd3f5b2b93dd722fcde653.jpg",
                "pics_sma": "uploads/goodspics/sma_6f5750132abd3f5b2b93dd722fcde653.jpg"
            }
        ],
        "attrs": [
            {
                "goods_id": 96,
                "attr_id": 15,
                "attr_value": "eee",
                "add_price": null,
                "attr_name": "fffffff",
                "attr_sel": "many",
                "attr_write": "list",
                "attr_vals": ""
            },
            {
                "goods_id": 96,
                "attr_id": 15,
                "attr_value": "ddd",
                "add_price": null,
                "attr_name": "fffffff",
                "attr_sel": "many",
                "attr_write": "list",
                "attr_vals": ""
            }
        ]
    },
    "meta": {
        "msg": "更新成功",
        "status": 200
    }
}
```

\###商品图片处理必须安装 GraphicsMagick

- linux

```
apt-get install GraphicsMagick
```

- Mac OS X

```
brew install GraphicsMagick
```

- Windows [点击下载](https://sourceforge.net/projects/graphicsmagick/files/graphicsmagick-binaries/1.3.27/GraphicsMagick-1.3.27-Q8-win64-dll.exe/download)

## 1.9. 图片上传

- 请求路径：upload
- 请求方法：post
- 请求参数

| 参数名 | 参数说明 | 备注 |
| ------ | -------- | ---- |
| file   | 上传文件 |      |

- 响应数据

```
{
    "data": {
        "tmp_path": "tmp_uploads/ccfc5179a914e94506bcbb7377e8985f.png",
        "url": "http://127.0.0.1:8888tmp_uploads/ccfc5179a914e94506bcbb7377e8985f.png"
    },
    "meta": {
        "msg": "上传成功",
        "status": 200
    }
}
```

## 1.10. 订单管理

### 1.10.1. 订单数据列表

- 请求路径：orders
- 请求方法：get
- 请求参数

| 参数名               | 参数说明        | 备注     |
| -------------------- | --------------- | -------- |
| query                | 查询参数        | 可以为空 |
| pagenum              | 当前页码        | 不能为空 |
| pagesize             | 每页显示条数    | 不能为空 |
| user_id              | 用户 ID         | 可以为空 |
| pay_status           | 支付状态        | 可以为空 |
| is_send              | 是否发货        | 可以为空 |
| order_fapiao_title   | ['个人','公司'] | 可以为空 |
| order_fapiao_company | 公司名称        | 可以为空 |
| order_fapiao_content | 发票内容        | 可以为空 |
| consignee_addr       | 发货地址        | 可以为空 |

- 响应数据

```
{
    "data": {
        "total": 1,
        "pagenum": "1",
        "goods": [
            {
                "order_id": 47,
                "user_id": 133,
                "order_number": "itcast-59e7502d7993d",
                "order_price": 322,
                "order_pay": "1",
                "is_send": "是",
                "trade_no": "",
                "order_fapiao_title": "个人",
                "order_fapiao_company": "",
                "order_fapiao_content": "办公用品",
                "consignee_addr": "a:7:{s:6:\"cgn_id\";i:1;s:7:\"user_id\";i:133;s:8:\"cgn_name\";s:9:\"王二柱\";s:11:\"cgn_address\";s:51:\"北京市海淀区苏州街长远天地大厦305室\";s:7:\"cgn_tel\";s:11:\"13566771298\";s:8:\"cgn_code\";s:6:\"306810\";s:11:\"delete_time\";N;}",
                "pay_status": "1",
                "create_time": 1508331565,
                "update_time": 1508331565
            }
        ]
    },
    "meta": {
        "msg": "获取成功",
        "status": 200
    }
}
```

### 1.10.2. 修改订单状态

- 请求路径：orders/:id
- 请求方法：put
- 请求参数

| 参数名       | 参数说明     | 备注                                       |
| ------------ | ------------ | ------------------------------------------ |
| id           | 订单 ID      | 不能为空`携带在url中`                      |
| is_send      | 订单是否发货 | 1:已经发货，0:未发货                       |
| order_pay    | 订单支付     | 支付方式 0 未支付 1 支付宝 2 微信 3 银行卡 |
| order_price  | 订单价格     |                                            |
| order_number | 订单数量     |                                            |
| pay_status   | 支付状态     | 订单状态： 0 未付款、1 已付款              |

- 请求数据说明
  - 所有请求数据都是增量更新，如果参数不填写，就不会更新该字段
- 响应数据

```
{
    "data": {
        "order_id": 67,
        "user_id": 1,
        "order_number": "itcast-g7kmck71vjaujfgoi",
        "order_price": 20,
        "order_pay": "0",
        "is_send": "否",
        "trade_no": "",
        "order_fapiao_title": "个人",
        "order_fapiao_company": "",
        "order_fapiao_content": "",
        "consignee_addr": "",
        "pay_status": "0",
        "create_time": 1512533560,
        "update_time": 1512533560,
        "goods": [
            {
                "id": 82,
                "order_id": 67,
                "goods_id": 96,
                "goods_price": 333,
                "goods_number": 2,
                "goods_total_price": 999
            },
            {
                "id": 83,
                "order_id": 67,
                "goods_id": 95,
                "goods_price": 666,
                "goods_number": 5,
                "goods_total_price": 999
            }
        ]
    },
    "meta": {
        "msg": "获取成功",
        "status": 200
    }
}
```

### 1.10.3. 查看订单详情

- 请求路径：orders/:id
- 请求方法：get
- 请求参数

| 参数名 | 参数说明 | 备注                  |
| ------ | -------- | --------------------- |
| id     | 订单 ID  | 不能为空`携带在url中` |

- 响应数据

```
{
    "data": {
        "order_id": 67,
        "user_id": 1,
        "order_number": "itcast-g7kmck71vjaujfgoi",
        "order_price": 20,
        "order_pay": "0",
        "is_send": "否",
        "trade_no": "",
        "order_fapiao_title": "个人",
        "order_fapiao_company": "",
        "order_fapiao_content": "",
        "consignee_addr": "",
        "pay_status": "0",
        "create_time": 1512533560,
        "update_time": 1512533560,
        "goods": [
            {
                "id": 82,
                "order_id": 67,
                "goods_id": 96,
                "goods_price": 333,
                "goods_number": 2,
                "goods_total_price": 999
            },
            {
                "id": 83,
                "order_id": 67,
                "goods_id": 95,
                "goods_price": 666,
                "goods_number": 5,
                "goods_total_price": 999
            }
        ]
    },
    "meta": {
        "msg": "获取成功",
        "status": 200
    }
}
```

### 1.10.4. 修改地址

1. [省市区/县联动效果 - 结合 ElementUI 的 el-cascader 组件](https://github.com/iceyangcc/provinces-china)

### 1.10.5. 查看物流信息

- 请求路径：/kuaidi/:id

- 请求方法：get

- 供测试的物流单号：1106975712662

- 响应数据：

  ```json
  {
    "data": [
      {
        "time": "2018-05-10 09:39:00",
        "ftime": "2018-05-10 09:39:00",
        "context": "已签收,感谢使用顺丰,期待再次为您服务",
        "location": ""
      },
      {
        "time": "2018-05-10 08:23:00",
        "ftime": "2018-05-10 08:23:00",
        "context": "[北京市]北京海淀育新小区营业点派件员 顺丰速运 95338正在为您派件",
        "location": ""
      },
      {
        "time": "2018-05-10 07:32:00",
        "ftime": "2018-05-10 07:32:00",
        "context": "快件到达 [北京海淀育新小区营业点]",
        "location": ""
      },
      {
        "time": "2018-05-10 02:03:00",
        "ftime": "2018-05-10 02:03:00",
        "context": "快件在[北京顺义集散中心]已装车,准备发往 [北京海淀育新小区营业点]",
        "location": ""
      },
      {
        "time": "2018-05-09 23:05:00",
        "ftime": "2018-05-09 23:05:00",
        "context": "快件到达 [北京顺义集散中心]",
        "location": ""
      },
      {
        "time": "2018-05-09 21:21:00",
        "ftime": "2018-05-09 21:21:00",
        "context": "快件在[北京宝胜营业点]已装车,准备发往 [北京顺义集散中心]",
        "location": ""
      },
      {
        "time": "2018-05-09 13:07:00",
        "ftime": "2018-05-09 13:07:00",
        "context": "顺丰速运 已收取快件",
        "location": ""
      },
      {
        "time": "2018-05-09 12:25:03",
        "ftime": "2018-05-09 12:25:03",
        "context": "卖家发货",
        "location": ""
      },
      {
        "time": "2018-05-09 12:22:24",
        "ftime": "2018-05-09 12:22:24",
        "context": "您的订单将由HLA（北京海淀区清河中街店）门店安排发货。",
        "location": ""
      },
      {
        "time": "2018-05-08 21:36:04",
        "ftime": "2018-05-08 21:36:04",
        "context": "商品已经下单",
        "location": ""
      }
    ],
    "meta": { "status": 200, "message": "获取物流信息成功！" }
  }
  ```

## 1.11. 数据统计

### 1.11.1. 基于时间统计的折线图

- 请求路径：reports/type/1

- 请求方法：get

- 响应数据

- 需要合并的选项

  ```js
  options: {
          title: {
            text: '用户来源'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#E9EEF3'
              }
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              boundaryGap: false
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ]
        }
  ```
