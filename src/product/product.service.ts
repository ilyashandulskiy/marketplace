import { Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { productMapper } from './product.mapper';
import { ProductDetailsDto } from './dto/productDetails.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  update() {}

  async create() {
    return await this.prisma.product.create({
      data: {
        store_id: '1',
        category_id: '1',
        price: '100',
        title: 'Product title',
        description: 'Product desc',
        rating: 5,
        amount_avaliable: 10,
      },
    });
  }

  delete() {}

  async getById(id: string): Promise<ProductDetailsDto> {
    const productFromDatabase = await this.prisma.product.findFirst({
      where: { id },
    });
    console.log('found user', productFromDatabase);
    const product = new ProductEntity();
    product.id = id;
    return productMapper.productEntityToProductDetailsDto(product);
  }
}
