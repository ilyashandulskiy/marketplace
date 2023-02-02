import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';
import { CreateCategoryDto } from './dto/createCategory.dto';

@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('')
  getList(): Promise<CategoryDto[]> {
    return this.categoryService.getList();
  }

  @Post('')
  create(@Body() body: CreateCategoryDto): Promise<CategoryDto> {
    return this.categoryService.create(body);
  }
}
