import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Put('/:id')
  update(
    @Param('id') id: string,
    @Body() body: Partial<CreateCategoryDto>,
  ): Promise<CategoryDto> {
    return this.categoryService.update(id, body);
  }

  @Post('')
  create(@Body() body: CreateCategoryDto): Promise<CategoryDto> {
    return this.categoryService.create(body);
  }

  @Delete('/:id')
  drop(@Param() { id }: { id: string }): Promise<CategoryDto> {
    return this.categoryService.delete(id);
  }
}
