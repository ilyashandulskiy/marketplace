import { HttpException, Injectable } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CategoryMapper } from './category.mapper';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { httpCodes } from '../utils/httpCodes';

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

  async update(
    id: string,
    dto: Partial<CreateCategoryDto>,
  ): Promise<CategoryDto> {
    const entity = this.categoryMapper.dtoToEntity(dto);
    const category = await this.prisma.category.update({
      where: { id },
      data: entity,
    });
    return this.categoryMapper.entityToDto(category);
  }

  async create(entity: CreateCategoryDto): Promise<CategoryDto> {
    const category = await this.prisma.category.create({ data: entity });
    return this.categoryMapper.entityToDto(category);
  }

  async delete(id: string) {
    const category = await this.prisma.category.findFirst({ where: { id } });
    if (!category) throw new HttpException('Not found', httpCodes.notFound);
    await this.prisma.category.delete({
      where: { id },
    });
    return this.categoryMapper.entityToDto(category);
  }
}
