import { IsNumber, IsNumberString, IsString, Max, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  title: string;
  @IsNumberString()
  price: string;
  imageUrl: string;
  @IsString()
  description: string;
  @IsNumber()
  @Min(0)
  @Max(Number.MAX_VALUE)
  weightKg?: number;
  @IsNumber()
  @Min(0)
  amount: number;
  sizeMm?: { width: number; height: number; depth: number };
  @IsString()
  categoryId: string;
  @IsString()
  color = '';
}
