import { Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { productMapper } from './product.mapper';
import { ProductDetailsDto } from './dto/productDetails.dto';

@Injectable()
export class ProductService {
  update() {}

  create() {}

  delete() {}

  getById(id: string): ProductDetailsDto {
    const product = new ProductEntity();
    product.id = id;
    return productMapper.productEntityToProductDetailsDto(product);
  }
}

export const productService = new ProductService();
