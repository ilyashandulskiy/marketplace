import { ProductStatus } from './types';

export class ProductEntity {
  id: string;
  store_id: string;
  image_url = '';
  category_id: string;
  status: ProductStatus = 'TEMPLATE';
  price = '0';
  title: string;
  description: string;
  rating: number;
  color?: string;
  weight_kg = 0;
  amount_avaliable: number;

  created_at?: Date;
  updated_at?: Date;

  constructor(fields: Partial<ProductEntity>) {
    Object.assign(this, fields);
  }
}
