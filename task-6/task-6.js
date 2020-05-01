const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = (allProdcuts, productName) => {
  let totalPrice = 0;
  // eslint-disable-next-line
  for (const nameProducts of allProdcuts) {
    if (nameProducts.name === productName) {
      totalPrice = nameProducts.price * nameProducts.quantity;
    }
  }
  return totalPrice;
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
