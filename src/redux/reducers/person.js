import {ADD_PERSON} from "../constant";

export default function personReducer(preState = [{id:'001',name:'tom',age:18}], action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      // preState.unshift(data) // 此处不可以这样写，这样会导致preState被改写了
      return [data, ...preState]
    default:
      return preState;
  }
}