import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductDetailsDto } from './dto/productDetails.dto';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/createProduct.dto';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('')
  getList(@Query('search') search): Promise<ProductDto[]> {
    return this.productService.getList(search);
  }

  @Get('/:id')
  getById(@Param() { id }: { id: string }): Promise<ProductDetailsDto> {
    return this.productService.getById(id);
  }

  @Post()
  create(@Body() body: CreateProductDto): Promise<ProductDetailsDto> {
    return this.productService.create(body);
  }

  @Delete('/:id')
  drop(@Param() { id }: { id: string }): Promise<ProductDetailsDto> {
    return this.productService.delete(id);
  }

  @Put('/:id')
  update(
    @Param() { id }: { id: string },
    @Body() body: Partial<CreateProductDto>,
  ) {
    return this.productService.update(id, body);
  }
}
