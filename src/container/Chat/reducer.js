import {
  IS_LOADING,
  ADD_MESSAGES,
  ADD_NEW_MESSAGE,
  DELETE_MESSAGE,
  EDIT_IN_MODAL
} from "./actionTypes";

export default (state = { loading: true }, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case EDIT_IN_MODAL:
      return {
        ...state,
        editInmodal: action.payload
      };
    case ADD_MESSAGES:
      return {
        ...state,
        messages: action.payload
      };
    case ADD_NEW_MESSAGE:
      return {
        ...state,
        messages: action.payload
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: action.payload
      };
    default:
      return state;
  }
};
