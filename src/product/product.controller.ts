import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductDetailsDto } from './dto/productDetails.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';

@Controller('products')
export class ProductController {
  @Get('')
  getList(): ProductDto[] {
    return [
      {
        id: '1',
        title: 'title',
        price: '10',
        rating: 5,
      },
    ];
  }

  @Get('/:id')
  getById(@Param() { id }: { id: string }): ProductDetailsDto {
    return {
      id,
      title: 'title',
      price: '10',
      rating: 5,
      description: 'description',
      amount: 10,
      categoryId: '1',
      storeId: '1',
    };
  }

  @Post()
  create(@Body() body: UpdateProductDto) {}

  @Put()
  update(@Body() body: UpdateProductDto) {}
}
