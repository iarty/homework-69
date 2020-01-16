import {
  GET_DISHES_REJECT,
  GET_DISHES_REQUEST,
  GET_DISHES_RESPONSE
} from "../actions/actionsType";

const initialState = {
  dishes: [],
  loading: false,
  error: null
};

export const dishesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DISHES_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_DISHES_RESPONSE: {
      return {
        ...state,
        dishes: action.payload,
        loading: false,
        error: null
      };
    }
    case GET_DISHES_REJECT: {
      return {
        loading: false,
        error: action.payload
      };
    }

    default:
      return state;
  }
};
