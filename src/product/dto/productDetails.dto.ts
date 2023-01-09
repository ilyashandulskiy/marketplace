export class ProductDetailsDto {
  id: number;
  title: string;
  price: string;
  rating: number;
  image_urls?: string[];
  description: string;
  weight_kg?: number;
  amount: number;
  size_mm?: { width: number, height: number, depth: number };
  category_id: number;
  store_id: number;
  color?: string;
}