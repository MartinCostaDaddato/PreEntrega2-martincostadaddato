const products = [
  {
    id: "1",
    name: "Esparta",
    price: 6000,
    category: "Hombre",
    img: "https://i.ibb.co/4SVg0Bm/IMG-4751.jpg",
    stock: 25,
    description: "Type Invictus by Paco Rabanne",
  },
  {
    id: "2",
    name: "Atenas",
    price: 6000,
    category: "Mujer",
    img: "https://i.ibb.co/55cYhjH/IMG-4318.jpg",
    stock: 20,
    description: "Type Olympéa by Paco Rabanne",
  },
  {
    id: "3",
    name: "Marsella",
    price: 5500,
    category: "Mujer",
    img: "https://i.ibb.co/K2nqFZY/IMG-4305.jpg",
    stock: 25,
    description: "Type Scandal by Night by Jean Paul Gaultier",
  },
  {
    id: "4",
    name: "Charlotte",
    price: 6000,
    category: "Mujer",
    img: "https://i.ibb.co/gwCj9Kg/IMG-4303.jpg",
    stock: 20,
    description: "Type Good Girl by Carolina Herrera",
  },
  {
    id: "5",
    name: "Las Vegas",
    price: 6200,
    category: "Hombre",
    img: "https://i.ibb.co/YTNyym8/IMG-4297.jpg",
    stock: 35,
    description: "Type One Million by Paco Rabanne",
  },
  {
    id: "6",
    name: "Random",
    price: 5900,
    category: "Hombre",
    img: "https://i.ibb.co/02sQvYv/IMG-4296.jpg",
    stock: 20,
    description: "Type Phantom by Paco Rabanne",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 0);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 0);
  });
};

export const getProductByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 0);
  });
};
