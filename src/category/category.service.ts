import { Injectable } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CategoryMapper } from './category.mapper';
import { CategoryEntity } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    private prisma: PrismaService,
    private categoryMapper: CategoryMapper,
  ) {}

  async getList(): Promise<CategoryDto[]> {
    const categories = await this.prisma.category.findMany();
    return categories.map(this.categoryMapper.entityToDto);
  }

  async create(entity: CategoryEntity): Promise<CategoryDto> {
    const category = await this.prisma.category.create({ data: entity });
    return this.categoryMapper.entityToDto(category);
  }
}
