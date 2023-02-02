import { ProductEntity } from './product.entity';

export function canBuyProduct(product: ProductEntity) {
  return product.amount_avaliable > 0;
}
