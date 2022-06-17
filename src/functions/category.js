const getCategoryName = (categories, categoryId) => {
  const { categoryName, description } = categories.find(
    (category) => category._id === categoryId
  );
  return [categoryName, description];
};

const getCategoryProducts = (products, categoryName) => {
  return products.filter((product) => product.categoryName === categoryName);
};

const getCategoryId = (categories, categoryName) => {
  const { _id: id } = categories.find(
    (category) => category.categoryName === categoryName
  );
  return id;
};

const getFeaturedCategories = (categories) =>
  categories.filter((category) => category.isFeatured);

export {
  getCategoryName,
  getCategoryProducts,
  getCategoryId,
  getFeaturedCategories,
};
