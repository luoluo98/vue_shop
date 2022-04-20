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
  MessageBox,
  Tag,
  Tree,
  Select,
  Option,
  Cascader,
  Alert,
  Tabs,
  TabPane,
  Steps,
  Step,
  CheckboxGroup,
  Checkbox,
  Upload,
  Timeline,
  TimelineItem
} from 'element-ui'

// import Timeline from './timeline/index.js'
// import TimelineItem from './timeline-item/index.js'

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
// 导入tag标签
Vue.use(Tag)
// 导入树形控件
Vue.use(Tree)
// 导入选择器
Vue.use(Select)
Vue.use(Option)
// 导入级联选择器
Vue.use(Cascader)
// 导入alert警告
Vue.use(Alert)
// 导入Tab标签页
Vue.use(Tabs)
Vue.use(TabPane)
// 导入步骤条
Vue.use(Steps)
Vue.use(Step)
// 导入复选框
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
// 导入图片上传组件
Vue.use(Upload)

Vue.use(Timeline)
Vue.use(TimelineItem)


