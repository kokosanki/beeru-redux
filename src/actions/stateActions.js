export const getProducts = (products) => {
  return {
    type: "GET_PRODUCTS",
    products,
  };
};

export const addFavorite = favorite => ({
  type: "ADD_FAVORITE",
  favorite
});

export const removeFavorite = favorite => ({
  type: 'REMOVE_FAVORITE',
  favorite
})
