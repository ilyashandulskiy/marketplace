import { ProductEntity } from './product.entity';
import { ProductDetailsDto } from './dto/productDetails.dto';

class ProductMapper {
  productEntityToProductDetailsDto({
    id,
    title,
    price,
    rating,
    imagesUrl,
    description,
    weightKg,
    amount,
    sizeMm,
    categoryId,
    storeId,
    color,
  }: ProductEntity): ProductDetailsDto {
    return {
      id,
      title,
      price,
      rating,
      imagesUrl,
      description,
      weightKg,
      amount,
      sizeMm,
      categoryId,
      storeId,
      color,
    };
  }
}

export const productMapper = new ProductMapper();
