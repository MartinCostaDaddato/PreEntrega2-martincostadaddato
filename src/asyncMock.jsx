const products = [
  {
    id: "1",
    name: "Esparta",
    price: 6000,
    category: "Men",
    img: "https://i.ibb.co/4SVg0Bm/IMG-4751.jpg",
    stock: 25,
    description: "Esparta men",
  },
  {
    id: "2",
    name: "Atenas",
    price: 6000,
    category: "Womens",
    img: "https://i.ibb.co/55cYhjH/IMG-4318.jpg",
    stock: 20,
    description: "Atenas womens",
  },
  {
    id: "3",
    name: "Marsella",
    price: 5500,
    category: "Womens",
    img: "https://i.ibb.co/K2nqFZY/IMG-4305.jpg",
    stock: 25,
    description: "Marsella womens",
  },
  {
    id: "4",
    name: "Charlotte",
    price: 6000,
    category: "Womens",
    img: "https://i.ibb.co/gwCj9Kg/IMG-4303.jpg",
    stock: 20,
    description: "Charlotte womens",
  },
  {
    id: "5",
    name: "Las Vegas",
    price: 6200,
    category: "Men",
    img: "https://i.ibb.co/YTNyym8/IMG-4297.jpg",
    stock: 35,
    description: "Las Vegas Men",
  },
  {
    id: "6",
    name: "Random",
    price: 5900,
    category: "Men",
    img: "https://i.ibb.co/02sQvYv/IMG-4296.jpg",
    stock: 20,
    description: "Random Men",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 100);
  });
};
