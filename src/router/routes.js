import MainLayout from 'layouts/MainLayout.vue'
import PostavkePage from 'pages/PostavkePage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'postavke', component: PostavkePage },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
