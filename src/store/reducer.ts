import { Action, RootState } from './types';
import { products } from '../database/PRODUCTS';

export const initialStore: RootState = {
  products,
};

export const reducer = (state = initialStore, action: Action) => {
  const createReducer: { [key: string]: RootState } = {
    SELECT_PRODUCTS: { ...state, products: action.products },
  };
  return createReducer[action.type] || state;

  // switch (action.type) {
  //   case 'SELECT_PRODUCTS': {
  //     return {
  //       ...state,
  //       products: action.products,
  //     };
  //   }
  //   default:
  //     return state;
  // }
};
