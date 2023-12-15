export default [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main.vue'),
  },
  {
    path: '/genStroy',
    name: 'genStory',
    component: () => import('@/views/genStory.vue'),
  },
  {
    path: '/gen',
    name: 'gen',
    component: () => import('@/views/gen.vue'),
  },
];
