export const totalPrice = products => products.reduce((sum, {price}) => sum + price, 0);