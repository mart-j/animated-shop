export type Product = {
  id: number;
  name: string;
  price: number;
  selected: boolean;
  image: string;
};

export type InitialStore = {
  products: Product[];
};

export type Action = { type: string; products: Product[] };
export interface RootState extends InitialStore {}