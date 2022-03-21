import axios from "axios";

const getProducts = async (dataDispatch) => {
  try {
    const response = await axios.get("/api/products");
    dataDispatch({
      type: "LOAD_INITIAL_DATA",
      payload: response.data.products,
    });
  } catch (error) {
    console.log("Error:", error);
  }
  return dataDispatch;
};

const getCategories = async (dataDispatch) => {
  try {
    const response = await axios.get("/api/categories");
    dataDispatch({
      type: "LOAD_CATEGORIES",
      payload: response.data.categories,
    });
  } catch (error) {
    console.log("Error:", error);
  }
  return dataDispatch;
};

const getProduct = (products, productId) => {
  return products.find((product) => product._id === productId);
};

const getRelatedProducts = (products, category, id) => {
  return products.filter(
    (product) => product.categoryName === category && product.id !== id
  );
};

const getLatestProducts = (products) =>
  products.filter((product) => product.isLatest);

const getFeaturedProducts = (products) =>
  products.filter((product) => product.isFeatured);

export {
  getProducts,
  getCategories,
  getProduct,
  getRelatedProducts,
  getLatestProducts,
  getFeaturedProducts,
};
