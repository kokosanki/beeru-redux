const favorites = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.favorite];
    case "REMOVE_FAVORITE":
      return [
        ...state.slice(0, state.indexOf(action.favorite)),
        ...state.slice(state.indexOf(action.favorite) + 1),
      ];
    default:
      return state;
  }
};

export default favorites;
