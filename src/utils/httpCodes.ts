export const httpCodes = {
  ok: 200,
  created: 201,
  notFound: 404,
};

export function canBuyProduct(amount: number) {
  return amount > 0;
}
