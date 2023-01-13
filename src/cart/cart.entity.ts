interface CartEntityInterface {
  userId: any;

  createdAt: Date;
  updatedAt: Date;
}

export class CartEntity implements CartEntityInterface {
  userId;

  createdAt;
  updatedAt;
}
