import { productSize, productStatus } from './types';

export class ProductEntity {
  id: string;
  status: productStatus;
  price: string;
  rating: number;
  amount: number;
  title: string;
  description: string;
  sizeMm: productSize;
  categoryId: string;
  color: string;
  weightKg: number;
  imagesUrl: string[];
  storeId: string;

  createdAt: Date;
  updatedAt: Date;
}
