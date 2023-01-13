import { Min } from 'class-validator';

export class AddItemDto {
  productId: string;

  @Min(1)
  amount: number;
}
