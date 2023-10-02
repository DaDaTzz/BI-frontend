export default [
  { path: '/user', name:'登录',layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/user', name:'注册',layout: false, routes: [{ path: '/user/register', component: './User/Register' }] },
  { path: '/welcome',name:'管理页面', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', component: './Admin' },
    ],
  },
  { icon: 'table', name:'表单', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
