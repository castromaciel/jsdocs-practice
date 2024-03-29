/** @type {(price: number, isOnSale: number) => number} */
const calculateTotalPrice = (price, isOnSale) => {
  const tax = 0.07; // 7% tax
  let discount = 0;

  // Apply a 10% discount if the product is on sale
  if (isOnSale) {
    discount = 0.1 // 10% discount
  }

  // Calculate the total price
  return (price - (price * discount)) * (1 + tax)
}