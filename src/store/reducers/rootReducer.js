import { combineReducers } from "redux";
import { orderReducer } from "./orderReducer";
import { dishesReducer } from "./dishesReducer";

export default combineReducers({
  order: orderReducer,
  dishes: dishesReducer
});
