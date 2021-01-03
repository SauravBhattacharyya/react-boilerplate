import { ADD_TEST, DATA_LOADED } from "../constants/actionTypes";

const initialState = {
  test: [],
  articles: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_TEST) {
    return Object.assign({}, state, {
      test: state.test.concat(action.payload),
    });
  }
  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
    });
  }

  return state;
}

export default rootReducer;
