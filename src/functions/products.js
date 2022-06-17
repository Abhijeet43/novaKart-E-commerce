import axios from "axios";

const getProducts = async (
  dataDispatch = "",
  setLoader = "",
  setProducts = ""
) => {
  try {
    if (setLoader !== "") {
      setLoader(true);
    }
    const response = await axios.get("/api/products");
    if (dataDispatch !== "") {
      dataDispatch({
        type: "LOAD_INITIAL_DATA",
        payload: response.data.products,
      });
    }
    if (setLoader !== "") {
      setLoader(false);
    }
    if (setProducts !== "") {
      setProducts(response.data.products);
      if (dataDispatch === "") {
        return;
      }
    }
  } catch (error) {
    console.log("Error:", error);
  }
  return dataDispatch;
};

const getCategories = async (dataDispatch, setLoader, setCategories = "") => {
  try {
    setLoader(true);
    const response = await axios.get("/api/categories");
    dataDispatch({
      type: "LOAD_CATEGORIES",
      payload: response.data.categories,
    });
    const categories = response.data.categories;
    setLoader(false);
    if (setCategories !== "") {
      setCategories(response.data.categories);
      return;
    }
    return categories;
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
