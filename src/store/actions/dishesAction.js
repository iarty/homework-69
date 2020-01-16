import axiosDish from "../../axiosDish";
import {
  GET_DISHES_REJECT,
  GET_DISHES_REQUEST,
  GET_DISHES_RESPONSE
} from "./actionsType";

export const getDishes = () => {
  return async dispatch => {
    dispatch({
      type: GET_DISHES_REQUEST
    });
    try {
      const response = await axiosDish("/dishes.json");
      if (response.data) {
        const payload = Object.keys(response.data || {}).map(
          key => response.data[key]
        );
        dispatch({
          type: GET_DISHES_RESPONSE,
          payload
        });
      }
    } catch (e) {
      dispatch({
        type: GET_DISHES_REJECT,
        payload: e
      });
    }
  };
};


