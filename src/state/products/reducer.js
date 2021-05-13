import {
  GET_PRODUCTS,
  GET_FILTERED_PRODUCTS,
  GET_PRODUCT_GROUPS,
  GET_SHELFS,
} from './types';

const initState = {
  products: [],
  productGroups: [],
  shelfs: [],
};

export default function (state = initState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case GET_PRODUCT_GROUPS:
      return {
        ...state,
        productGroups: action.payload,
      };
    case GET_FILTERED_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_SHELFS:
      return {
        ...state,
        shelfs: action.payload,
      };
    default:
      return state;
  }
}
