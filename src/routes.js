export const customRoutes = [
  {
    name: "r",
    path: "/r",
    component: "user/RootPage.vue"
  },
  {
    name: "RestaurantsAll",
    path: "/r/area/all",
    component: "user/Restaurants/All.vue"
  },
  {
    name: "RestaurantsArea",
    path: "/r/area/:areaId",
    component: "user/Restaurants/Area.vue"
  },
  {
    name: "history",
    path: "/u/history",
    component: "user/OrderHistory.vue"
  },
  {
    name: "profile",
    path: "/u/profile",
    component: "user/Profile.vue"
  },
  {
    name: "r-restaurantId",
    path: "/r/:restaurantId",
    component: "user/RestaurantPage.vue"
  },
  {
    name: "r-restaurantId-order",
    path: "/r/:restaurantId/order/:orderId",
    component: "user/OrderPage.vue"
  },
  {
    name: "r-restaurantId-transactionsAct",
    path: "/r/:restaurantId/transactionsAct",
    component: "user/TransactionsAct.vue"
  },
  {
    name: "admin",
    path: "/admin/restaurants",
    component: "admin/Index.vue"
  },
  {
    name: "admin-router",
    path: "/admin/restaurants/:restaurantId",
    component: "admin/Layout.vue",
    children: [
      {
        name: "admin-about",
        path: "/",
        component: "admin/RestaurantPage.vue",
      },
      {
        name: "admin-menus",
        path: "menus",
        component: "admin/MenuListPage.vue"
      },
      {
        name: "admin-menus-item",
        path: "menus/:menuId",
        component: "admin/MenuItemPage.vue"
      },
      {
        name: "admin-orders",
        path: "orders",
        component: "admin/OrderListPage.vue"
      },
      {
        path: "line",
        component: "admin/ManageLine.vue"
      },
      {
        path: "traces",
        component: "admin/TraceList.vue"
      },
      {
        path: "qrcode",
        component: "admin/QRCodePage.vue"
      },
      {
        name: "admin-order-info",
        path: "orders/:orderId",
        component: "admin/OrderInfoPage.vue"
      },
    ]
  },
  {
    name: "admin-news-list",
    path: "/admin/news",
    component: "admin/News/List.vue"
  },
  {
    name: "admin-news-article",
    path: "/admin/news/:newsId",
    component: "admin/News/Article.vue"
  },
  {
    name: "admin-signin",
    path: "/admin/user/signin",
    component: "auth/SignInPage.vue"
  },
  {
    name: "admin-signup",
    path: "/admin/user/signup",
    component: "auth/SignUpPage.vue"
  },
  {
    name: "admin-reset",
    path: "/admin/user/reset",
    component: "auth/ResetPasswordPage.vue"
  },
  {
    path: "/s",
    component: "super/SuperHome.vue"
  },
  {
    path: '/s/orders',
    component: 'super/AllOrders.vue'
  },
  {
    path: '/s/restaurants',
    component: 'super/AllRestaurants.vue'
  },
  {
    path: '/s/callbacks',
    component: 'super/AllStripeCallback.vue'
  },
  {
    path: '/s/callbacks/:uid/:logId',
    component: 'super/StripeCallback.vue'
  },
  {
    path: '/callback/line',
    component: 'auth/LineCallback.vue'
  },
  {
    path: '/callback/track',
    component: 'auth/TrackCallback.vue'
  },
  {
    path: '/t/:traceId',
    component: 'trace/Record.vue'
  },
  {
    path: '/t',
    component: 'trace/Record.vue'
  },
  {
    path: '*',
    component: 'common/404.vue'
  }
];
