import { Injectable } from '@nestjs/common';
import { CategoryEntity } from './category.entity';
import { CategoryDto } from './dto/category.dto';
import { CreateCategoryDto } from './dto/createCategory.dto';

@Injectable()
export class CategoryMapper {
  entityToDto({ id, title, image_url }: CategoryEntity): CategoryDto {
    return {
      id,
      title,
      imageUrl: image_url,
    };
  }

  dtoToEntity({
    imageUrl,
    id,
    ...props
  }: Partial<CreateCategoryDto>): Partial<CategoryEntity> {
    return {
      ...props,
      image_url: imageUrl,
    };
  }
}
