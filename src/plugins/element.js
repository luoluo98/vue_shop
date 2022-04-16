import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Row,
  Col,
  Table,
  TableColumn,
  Switch,
  Tooltip,
  Pagination,
  Dialog,
  MessageBox
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
// 面包屑导入
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
//卡片导入
Vue.use(Card)
// 栅格导入
Vue.use(Row)
Vue.use(Col)
// 导入表格
Vue.use(Table)
Vue.use(TableColumn)
// 导入开关组件
Vue.use(Switch)
// 导入常用于展示鼠标 hover 时的提示信息
Vue.use(Tooltip)
// Pagination 当数据量过多时，使用分页分解数据
Vue.use(Pagination)
// 导入对话框
Vue.use(Dialog)
Vue.prototype.$message = Message
// 导入弹框
Vue.prototype.$confirm = MessageBox.confirm
