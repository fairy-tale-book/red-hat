export default [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/main/:theme',
    name: 'main',
    component: () => import('@/views/main.vue'),
  },
  {
    path: '/gen',
    name: 'gen',
    component: () => import('@/views/gen.vue'),
  },
];
