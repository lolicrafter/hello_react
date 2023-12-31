
import { INCREMENT, DECREMENT } from "../constant";
function countReducer(preState = 0, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}
export default countReducer;