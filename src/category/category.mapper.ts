import { Injectable } from '@nestjs/common';
import { CategoryEntity } from './category.entity';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryMapper {
  entityToDto({ id, title }: CategoryEntity): CategoryDto {
    return {
      id,
      title,
    };
  }
}
