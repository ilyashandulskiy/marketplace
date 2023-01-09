import {IsNumber, IsString, Min} from "class-validator";

export class UpdateProductDto {
  @IsString()
  title: string;
  @IsString()
  price: string;
  image_urls?: string[];
  @IsString()
  description: string;
  @IsNumber()
  @Min(0)
  weight_kg?: number;
  @IsNumber()
  @Min(0)
  amount: number;
  size_mm?: { width: number, height: number, depth: number };
  @IsNumber()
  category_id: number;
  @IsString()
  color?: string;
}