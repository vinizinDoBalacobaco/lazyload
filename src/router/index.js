import { createRouter, createWebHistory } from 'vue-router';

// Importação dos componentes usando Lazy Loading
const PaginaPrincipal = () => import('@/components/PaginaPrincipal.vue');
const ImagensDiv = () => import('@/components/ImagensDiv.vue');
const TableCat = () => import('@/components/TableCat.vue');

// Definindo as rotas
const routes = [
  {
    path: '/imagensdiv',
    name: 'ImagensDiv',
    component: ImagensDiv
  },
  {
    path: '/',
    name: 'PaginaPrincipal',
    component: PaginaPrincipal
  },
  {
    path: '/tablecat',
    name: 'TableCat',
    component: TableCat
  }
];

// Criando o router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;







// // export default new Router({
// //   mode: 'history',
// //   base: process.env.BASE_URL,
// //   routes:[
// //     {
// //       path: '/imagensdiv',
// //       name: 'Imagensdiv',
// //       component: lazyLoad('ImagensDiv')
// //     },
// //     {
// //       path: '/',
// //       name: 'PaginaPrincipal',
// //       component: lazyLoad('PaginaPrincipal')
// //     },
// //     {
// //       path: '/tablecat',
// //       name: 'Tablecat',
// //       component: lazyLoad('TableCat')
// //     }
// //   ]
// //     })