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

export { signUp, login, logout } from "./auth";

export {
  loadCart,
  addToCartHandler,
  removeFromCartHandler,
  updateCartHandler,
  getCartTotal,
  getTotalCartItems,
  checkItemInCart,
  addToCartHandler,
} from "./cart";

export {
  loadWishlist,
  addToWishListHandler,
  removeFromWishlistHandler,
  checkWishlistAction,
  checkWishlistActionHandler,
  moveToCartHandler,
  moveToWishListHandler,
} from "./wishlist";

export {
  sortData,
  ratingData,
  getOutOfStockData,
  filterPriceData,
  categoryData,
  searchData,
} from "./filter";

export {
  getAddress,
  addAddress,
  deleteAddress,
  updateAddress,
} from "./address";
