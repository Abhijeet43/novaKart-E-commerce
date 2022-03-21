export {
  getCategoryName,
  getCategoryProducts,
  getCategoryId,
  getFeaturedCategories,
} from "./category";

export {
  getProducts,
  getCategories,
  getProduct,
  getRelatedProducts,
  getLatestProducts,
  getFeaturedProducts,
} from "./products";

export { signUp, login } from "./auth";

export {
  loadCart,
  addToCartHandler,
  checkAction,
  removeFromCartHandler,
  updateCartHandler,
  getCartTotal,
} from "./cart";
