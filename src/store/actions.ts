import { Product } from './types';

export const selectProducts = (products: Product[]) => {
  return {
    type: 'SELECT_PRODUCTS',
    products,
  };
};
