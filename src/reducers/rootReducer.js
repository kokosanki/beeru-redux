import { combineReducers } from "redux";
import favorites from "./favorites";
import products from "./products";

export default combineReducers({
  favorites,
  products,
});
