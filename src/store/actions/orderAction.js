import {
  ADD_TO_CART, CLEAR_ORDER,
  POST_ERROR,
  POST_REQUEST,
  POST_SUCCESS,
  REMOVE_FROM_CART
} from "./actionsType";
import axiosDish from "../../axiosDish";

export const addToCart = payload => {
  return {
    type: ADD_TO_CART,
    payload
  };
};

export const removeFromCart = payload => {
  return {
    type: REMOVE_FROM_CART,
    payload
  };
};

export const clearState = () => {
  return {
    type: CLEAR_ORDER
  };
};

export const postOrder = payload => {
  return async dispatch => {
    console.log(payload);
    dispatch({ type: POST_REQUEST });
    try {
      await axiosDish.post("/orders.json", payload);
      dispatch({ type: POST_SUCCESS });
    } catch (error) {
      dispatch({ type: POST_ERROR, error });
    }
  };
};
