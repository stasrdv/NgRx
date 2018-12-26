export function loginReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MASK":
      return {
        ...state,
        maskUserName: action.payload
      };
    default:
      return state;
  }
}
