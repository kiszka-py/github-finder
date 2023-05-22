const githubReducer = function (state, action) {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
      break;

    default:
      return state;
  }
};

export default githubReducer;
