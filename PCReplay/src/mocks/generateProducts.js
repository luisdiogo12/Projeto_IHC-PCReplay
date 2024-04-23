//+: gera um array de produtos para serem usados como base de dados no handlers.js
const generateProducts = () => {
  return Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    imageUrl: `https://via.placeholder.com/400x300?text=Product+${index + 1}`,
    name: `Product ${index + 1}`,
    description: `Description for Product ${
      index + 1
    }. It has some unique features.`,
    price: `${(Math.random() * 1000 + 300).toFixed(2)}`, // Preço aleatório entre 300 e 1300
  }));
};

export default generateProducts;
