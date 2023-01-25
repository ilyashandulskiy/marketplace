import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService } from '../prisma/prisma.service';
import { ProductMapper } from './product.mapper';

@Module({
  providers: [ProductService, PrismaService, ProductMapper],
  controllers: [ProductController],
})
export class ProductModule {}
