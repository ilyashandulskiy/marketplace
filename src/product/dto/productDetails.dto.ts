export class ProductDetailsDto {
  id: string;
  title: string;
  price: string;
  rating: number;
  imageUrls?: string[];
  description: string;
  weightKg?: number;
  amount: number;
  sizeMm?: { width: number; height: number; depth: number };
  categoryId: string;
  storeId: string;
  color?: string;
}
