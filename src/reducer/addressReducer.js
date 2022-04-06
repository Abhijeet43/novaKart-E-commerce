const addressReducer = (state, { type, payload }) => {
  switch (type) {
    case "UPDATE":
      return {
        ...state,
        address: payload,
      };
    case "ADD":
      return {
        ...state,
        address: payload,
      };
    case "DELETE":
      return {
        ...state,
        address: payload,
      };
    default:
      return state;
  }
};

export { addressReducer };
