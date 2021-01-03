import { ADD_TEST, DATA_LOADED } from "../constants/actionTypes";

export function addTest(payload) {
  return { type: ADD_TEST, payload };
}

export function getData() {
  return function (dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: DATA_LOADED, payload: json });
      });
  };
}
