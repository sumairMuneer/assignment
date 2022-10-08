const RouteNames = {
  Default: {
    route: "/",
    pops: "/pops",
  },
  Signup: {
    route: "/signup",
    popSignup: "/popSignup",
  },
  CompleteSignup: {
    route: "/completeSignup",
  },
  Login: {
    route: "/login",
    popLogin: "/popLogin",
  },
  EmailConfirmation: {
    route: "/verification",
  },
  Product: {
    add: "/add",
    edit: "/edit/:id",
    list: "/list",
    shopifyVerification: "/shopify-login",
  },
  Seller: {
    home: "/home",
    home2: "/seller/home",
    new: "/addNewSeller",
    notify: "/notifySeller",
    management: "/sellerManagement",
    view: "/sellerManagement/:sellerId",
  },
  Todo: {
    route: "/todos",
    home: "/",
    home2: "/todo",
    single: "/todo",
    new: "/addNewSeller",
    notify: "/notifySeller",
    management: "/sellerManagement",
    view: "/:todoId",
// ${RouteNames.Seller.management}/${id}
  },
  Pops: {
    orders: "/orderManagement",
  },
  Microsite: {
    route: "/microsite/:storeName/:micrositeId",
    path: "/microsite/",
    productRoute: "/microsite/:storeName/:micrositeId/:productId",
    viewCart: "/microsite/viewCart",
    checkoutForm: "/checkout",
    shipping: "/shipping",
    payment: "/payment",
    orderConfirmation: "/orderConfirmation",
    review: "/review",
  },
  Peasy: {
    dashboard: "/dashboard",
  },
};

export default RouteNames;
