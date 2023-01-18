import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductDetailsDto } from './dto/productDetails.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

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
  getById(@Param() { id }: { id: string }): Promise<ProductDetailsDto> {
    return this.productService.getById(id);
  }

  @Post()
  create(@Body() body: UpdateProductDto) {
    return this.productService.create();
  }

  @Put()
  update(@Body() body: UpdateProductDto) {}
}
