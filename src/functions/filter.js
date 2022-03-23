const sortData = (data, sortBy) => {
  if (sortBy === "HIGH_TO_LOW") {
    return [...data].sort((a, b) => b.price - a.price);
  }

  if (sortBy === "LOW_TO_HIGH") {
    return [...data].sort((a, b) => a.price - b.price);
  }
  return data;
};

const ratingData = (data, rating) => {
  return rating
    ? data.filter((product) => Number(product.rating) >= Number(rating))
    : data;
};

const getOutOfStockData = (data, includeOutofStock) => {
  return includeOutofStock ? data : data.filter((product) => product.inStock);
};

const filterPriceData = (data, maxPriceRange) => {
  return data.filter((product) => product.price < maxPriceRange);
};

const categoryData = (data, category) => {
  const categoryFilteredData = data.filter((product) =>
    category.includes(product.categoryName)
  );
  if (categoryFilteredData.length > 0) {
    return categoryFilteredData;
  }
  return data;
};

export {
  sortData,
  ratingData,
  getOutOfStockData,
  filterPriceData,
  categoryData,
};
