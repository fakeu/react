import {
  IS_LOADING,
  ADD_MESSAGES,
  ADD_NEW_MESSAGE,
  DELETE_MESSAGE,
  EDIT_IN_MODAL
} from "./actionTypes";

const editInModal = payload => ({
  type: EDIT_IN_MODAL,
  payload
});

const isLoading = payload => ({
  type: IS_LOADING,
  payload
});

const addMessages = payload => ({
  type: ADD_MESSAGES,
  payload
});

const deleteUserMessages = payload => ({
  type: DELETE_MESSAGE,
  payload
});

const addNewMessage = payload => ({
  type: ADD_NEW_MESSAGE,
  payload
});

export const getMessages = id => async dispatch => {
  const messages = await fetch("https://api.myjson.com/bins/1hiqin", {
    method: "GET"
  })
    .then(data => data.json())
    .then(msg => msg);
  dispatch(addMessages(messages));
  dispatch(isLoading(false));
};

export const editMsgInModal = message => async dispatch => {
  dispatch(editInModal(message));
};

export const editMessage = messages => async dispatch => {
  dispatch(addNewMessage(messages));
};

export const addMessage = messages => async dispatch => {
  dispatch(addNewMessage(messages));
};

export const deleteMessage = messages => async dispatch => {
  dispatch(deleteUserMessages(messages));
};
