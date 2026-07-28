export interface Fruit {
  id: string;
  name: string;
  price: number;
  stock: number;
  origin: string;
  fresh: boolean;
}

export const fruitsData: Fruit[] = [
  { id: '1', name: 'Manzana Roja', price: 1.50, stock: 45, origin: 'Ecuador', fresh: true },
  { id: '2', name: 'Banano Orgánico', price: 0.80, stock: 120, origin: 'Ecuador', fresh: true },
  { id: '3', name: 'Fresa Importada', price: 3.20, stock: 15, origin: 'Colombia', fresh: false },
  { id: '4', name: 'Mango edward', price: 2.00, stock: 30, origin: 'Ecuador', fresh: true },
  { id: '5', name: 'Uva Verde', price: 2.80, stock: 0, origin: 'Chile', fresh: false },
];