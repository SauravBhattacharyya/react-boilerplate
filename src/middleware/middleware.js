import { ADD_TEST } from "../constants/actionTypes";

export function testMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === ADD_TEST) {
        //do something
      }
      return next(action);
    };
  };
}
