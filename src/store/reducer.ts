import { Product, Action } from './types';

const products = [
  {
    id: 0,
    name: 'Costume',
    price: 19.99,
    selected: false,
    image:
      'https://onepiece.imgix.net/alpine-2-0-jumpsuit-navy-2.jpg?w=660&h=1056&fit=crop&q=60',
  },
  {
    id: 1,
    name: 'Sweater',
    price: 14.99,
    selected: false,
    image: 'https://www.ivy-style.com/wp-content/uploads/2009/10/norway.jpg',
  },
  {
    id: 2,
    name: 'Socks',
    price: 3,
    selected: false,
    image: 'https://cdn.shopify.com/s/files/1/0080/0034/0045/products/FWR1089-Norwegian-Wool-Socks-Main_70ffc069-75a0-4508-87c6-097997fe5411_800x.jpg?v=1571711311',
  },
  {
    id: 3,
    name: 'Hat',
    price: 5,
    selected: false,
    image:
      'https://d1amvbew71i3eq.cloudfront.net/media/catalog/product/cache/20/image/650x/040ec09b1e35df139433887a97daa66f/4/2/42261_f/dale-of-norway-cortina-1956-hat-black-off-white-30.jpg',
  },
];

export const initialStore: { products: Product[] } = {
  products,
};

export type InitialRootState = typeof initialStore;

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
