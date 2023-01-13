import { productSize, productStatus } from './types';

interface ProductEntityInterface {
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

export class ProductEntity implements ProductEntityInterface {
  status;
  price;
  rating;
  amount;
  title;
  description;
  sizeMm;
  categoryId;
  color;
  weightKg;
  imagesUrl;
  storeId;

  createdAt;
  updatedAt;
}
