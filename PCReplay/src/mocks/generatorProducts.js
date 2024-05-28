const generateProducts = () => {
  const categories = ["desktop", "portátil", "macbook"];
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

  const nameExpert = {
    experts: ["João Maria", "Maria Josefina", "José Anacleto", "Ana Pedrosa", "Pedro João"],
  };

  const getRandomItem = (items) => {
    return items[Math.floor(Math.random() * items.length)];
  };

  return Array.from({ length: 20 }, (_, index) => {
    const category = getRandomItem(categories);
    return {
      id: index + 1,
      imageUrl: `https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc`, 
      name: `${category} ${index + 1}`,
      description: `Description for Product ${
        index + 1
      }. It has some unique features.`,
      price: `${(Math.random() * 1000 + 300).toFixed(2)}`, 
      category: category,
      characteristics: {
        cpu: getRandomItem(features.cpu),
        ram: getRandomItem(features.ram),
        memoria: getRandomItem(features.memoria),
        bateria: getRandomItem(features.bateria),
      },
      description: `Description for Product ${
        index + 1
      }. It has some unique features.`,
      technicalInfo: `Technical information for Product ${
        index + 1
      }. It has some unique features.`,
      evaluation: `Evaluation for Product ${
        index + 1
      }. It has some unique features.`,
      expert: getRandomItem(nameExpert.experts),
    };
  });
};
export default generateProducts;

