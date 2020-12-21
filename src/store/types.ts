export type Product = {
  id: number;
  name: string;
  price: number;
  selected: boolean;
  image: string;
};

export type InitialRootState = {
  products: Product[];
};

export type Action = { type: string; products: Product[] };
