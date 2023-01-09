import {Body, Controller, Get, Post, Put} from '@nestjs/common';
import {ProductDto} from "./dto/product.dto";
import {ProductDetailsDto} from "./dto/productDetails.dto";
import {UpdateProductDto} from "./dto/updateProduct.dto";

@Controller('product')
export class ProductController {

  @Get('/:id')
  getProduct(): ProductDto {
    return ({
      id: 1,
      title: 'title',
      price: '10',
      rating: 5
    })
  }

  @Get('/details/:id')
  getProductDetails(): ProductDetailsDto {
    return ({
      id: 1,
      title: 'title',
      price: '10',
      rating: 5,
      description: 'description',
      amount: 10,
      category_id: 1,
      store_id: 1
    })
  }

  @Post()
  createProduct(@Body() body: UpdateProductDto) {

  }

  @Put()
  updateProduct(@Body() body: UpdateProductDto) {

  }

}
