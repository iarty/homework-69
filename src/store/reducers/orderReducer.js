import {
  ADD_TO_CART,
  CLEAR_ORDER,
  POST_ERROR,
  POST_REQUEST,
  POST_SUCCESS,
  REMOVE_FROM_CART
} from "../actions/actionsType";

const initialState = {
  cart: [],
  loading: false,
  error: null
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const cart = [...state.cart];
      if (cart.findIndex(el => el.title === action.payload.title) === -1) {
        cart.push(action.payload);
      } else {
        cart.map(el =>
          el.title === action.payload.title ? { ...el, ...el.amount++ } : el
        );
      }

      return {
        ...state,
        cart
      };
    }
    case REMOVE_FROM_CART: {
      let cart = [...state.cart];
      cart = cart.filter(el =>
        el.title === action.payload && el.amount > 1
          ? { ...el, ...el.amount-- }
          : el.title !== action.payload
          ? el
          : false
      );
      return {
        ...state,
        cart
      };
    }
    case CLEAR_ORDER: {
      return {
        ...state,
        cart: []
      };
    }
    case POST_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null
      };
    }
    case POST_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }
    default:
      return state;
  }
};
