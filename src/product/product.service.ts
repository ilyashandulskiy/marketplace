import { HttpException, Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { ProductDetailsDto } from './dto/productDetails.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/createProduct.dto';
import { ProductMapper } from './product.mapper';
import { ProductDto } from './dto/product.dto';
import { httpCodes } from '../utils/httpCodes';

@Injectable()
export class ProductService {
  constructor(
    private prisma: PrismaService,
    private productMapper: ProductMapper,
  ) {}

  async update(id: string, data: Partial<CreateProductDto>) {
    const savedProductEntity = await this.prisma.product.update({
      where: { id },
      data: this.productMapper.updateDtoToEntity(data),
    });
    return this.productMapper.entityToDetailsDto(savedProductEntity);
  }

  async create(data: CreateProductDto): Promise<ProductDetailsDto> {
    const createdProduct: ProductEntity = await this.prisma.product.create({
      data: this.productMapper.dtoToEntity(data),
    });
    return this.productMapper.entityToDetailsDto(createdProduct);
  }

  async getList(search?: string): Promise<ProductDto[]> {
    const products = await this.prisma.product.findMany({
      where: { AND: { title: { contains: search }, hidden: false } },
    });
    return products.map((product) =>
      this.productMapper.entityToProduct(product),
    );
  }

  async delete(id: string) {
    const product = await this.prisma.product.findFirst({ where: { id } });
    if (!product) throw new HttpException('Not found', httpCodes.notFound);
    await this.prisma.product.update({
      where: { id },
      data: { ...product, hidden: true },
    });
    return this.productMapper.entityToDetailsDto(product);
  }

  async getById(id: string): Promise<ProductDetailsDto> {
    const productEntity: ProductEntity = await this.prisma.product.findFirst({
      where: { id },
    });
    if (!productEntity)
      throw new HttpException('Not found', httpCodes.notFound);
    return this.productMapper.entityToDetailsDto(productEntity);
  }
}
