const getCategoryName = (categories, categoryId) => {
  const { categoryName, description } = categories.find(
    (category) => category.id === categoryId
  );
  return [categoryName, description];
};

const getCategoryProducts = (products, categoryName) => {
  return products.filter((product) => product.categoryName === categoryName);
};

const getCategoryId = (categories, categoryName) => {
  const { id } = categories.find(
    (category) => category.categoryName === categoryName
  );
  return id;
};

export { getCategoryName, getCategoryProducts, getCategoryId };