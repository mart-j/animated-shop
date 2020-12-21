import { Product, Action } from './types';
import { products } from '../database/PRODUCTS';

export const initialStore: { products: Product[] } = {
  products,
};

export const reducer = (state = initialStore, action: Action) => {
  switch (action.type) {
    case 'SELECT_PRODUCTS': {
      return {
        ...state,
        products: action.products,
      };
    }
    default:
      return state;
  }
};
