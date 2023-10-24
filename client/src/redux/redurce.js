const initialState = {
  portafolio: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PORTAFOLIO":
      return {
        ...state,
        portafolio: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
