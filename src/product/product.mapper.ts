import { ProductEntity } from './product.entity';
import { ProductDetailsDto } from './dto/productDetails.dto';
import { CreateProductDto } from './dto/createProduct.dto';
import { Injectable } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { canBuyProduct } from '../utils/httpCodes';

@Injectable()
export class ProductMapper {
  entityToDetailsDto({
    id,
    title,
    price,
    rating,
    description,
    weight_kg,
    image_url,
    amount_avaliable,
    category_id,
    store_id,
    color,
  }: ProductEntity): ProductDetailsDto {
    return {
      id,
      title,
      price,
      rating,
      color,
      description,
      imageUrl: image_url,
      weightKg: weight_kg,
      amount: amount_avaliable,
      categoryId: category_id,
      storeId: store_id,
      canBuy: canBuyProduct(amount_avaliable),
    };
  }

  entityToProduct({
    id,
    title,
    price,
    rating,
    image_url,
  }: ProductEntity): ProductDto {
    return {
      id,
      title,
      price,
      rating,
      imageUrl: image_url,
    };
  }

  dtoToEntity({
    title,
    price,
    description,
    weightKg,
    imageUrl,
    amount,
    categoryId,
    color,
  }: CreateProductDto): ProductEntity {
    return new ProductEntity({
      title,
      price,
      description,
      color,
      image_url: imageUrl,
      weight_kg: weightKg,
      amount_avaliable: amount,
      category_id: categoryId,
      store_id: '1',
    });
  }

  updateDtoToEntity({
    weightKg,
    amount,
    categoryId,
    imageUrl,
    ...props
  }: Partial<CreateProductDto>): ProductEntity {
    return new ProductEntity({
      ...props,
      image_url: imageUrl,
      weight_kg: weightKg,
      amount_avaliable: amount,
      category_id: categoryId,
    });
  }
}
