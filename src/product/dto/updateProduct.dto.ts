import { IsNumber, IsString, Max, Min } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  title: string;
  @IsNumber()
  @Min(0)
  @Max(Number.MAX_VALUE)
  price: number;
  imageUrls?: string[];
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
  @IsNumber()
  categoryId: string;
  @IsString()
  color?: string;
}
