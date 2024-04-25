//+: gera um array de produtos para serem usados como base de dados no handlers.js
const generateProducts = () => {
  // Definição de categorias
  const categories = ["desktop", "laptop", "macbook"];

  // Definição de características possíveis
  const features = {
    cpu: ["Intel i5", "Intel i7", "AMD Ryzen 5", "AMD Ryzen 7"],
    ram: ["8GB", "16GB", "32GB"],
    memoria: ["256GB SSD", "512GB SSD", "1TB SSD"],
    bateria: ["60Wh", "80Wh", "99Wh"],
  };
  const imagePaths = {
    desktop: "assets/desktop.jpeg",
    laptop: "assets/laptop.jpeg",
    macbook: "assets/macbook.jpeg",
  };

  // Função para selecionar um item aleatório de um array
  const getRandomItem = (items) => {
    return items[Math.floor(Math.random() * items.length)];
  };

  // Gerar 20 produtos com detalhes aleatórios
  return Array.from({ length: 20 }, (_, index) => {
    const category = getRandomItem(categories);
    return {
      id: index + 1,
      //imageUrl: imagePaths[category], // Imagem baseada na categoria
      imageUrl: `https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc`, // Imagem aleatória
      name: `Product ${index + 1}`,
      description: `Description for Product ${
        index + 1
      }. It has some unique features.`,
      price: `${(Math.random() * 1000 + 300).toFixed(2)}`, // Preço aleatório entre 300 e 1300
      category: category,
      characteristics: {
        cpu: getRandomItem(features.cpu),
        ram: getRandomItem(features.ram),
        memoria: getRandomItem(features.memoria),
        bateria: getRandomItem(features.bateria),
      },
    };
  });
};

export default generateProducts;