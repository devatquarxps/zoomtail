
const routes = [
  {
    path: '/',
    component: () => import('layouts/customer-center.vue'),
    children: [
      { path: '', component: () => import('pages/customer-center/customers') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
