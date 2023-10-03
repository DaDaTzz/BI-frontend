export default [
  { path: '/user', name:'登录',layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/user', name:'注册',layout: false, routes: [{ path: '/user/register', component: './User/Register' }] },
  { path: '/add_chart',name:'智能分析', icon: 'barChart', component: './AddChart' },
  { path: '/',redirect: '/add_chart' },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', component: './Admin' },
    ],
  },
  { icon: 'table',  path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
