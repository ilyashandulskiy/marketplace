import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CategoryService } from './category.service';
import { CategoryMapper } from './category.mapper';
import { CategoryController } from './category.controller';

@Module({
  providers: [CategoryService, PrismaService, CategoryMapper],
  controllers: [CategoryController],
})
export class CategoryModule {}
