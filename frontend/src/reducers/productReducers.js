import {
  PRODUCTS_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODICT_LIST_FAIL,
} from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCTS_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODICT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
