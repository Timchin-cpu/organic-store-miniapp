export const categories = [
  {
    id: 1,
    name: "Fruits",
    icon: "Apple",
    image:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Fresh",
    icon: "Salad",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Snack",
    icon: "Cookie",
    image:
      "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Grocery",
    icon: "ShoppingBag",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Nuts",
    icon: "Nut",
    image:
      "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=200&h=200&fit=crop",
  },
  {
    id: 6,
    name: "Oils",
    icon: "Droplet",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&h=200&fit=crop",
  },
];

export const products = [
  // FRUITS CATEGORY (id: 1)
  {
    id: 1,
    name: "Fresh Organic Apple",
    description: "Organic Apples – crisp, chemical-free, delicious.",
    price: 2.2,
    oldPrice: 2.8,
    weight: "1 Kg",
    discount: "-21%",
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=300&h=300&fit=crop",
    featured: true,
    categoryId: 1,
  },
  {
    id: 2,
    name: "Green Organic Apple",
    description: "Organic green apples – crunchy, pesticide-free, tasty.",
    price: 2.5,
    oldPrice: 3.2,
    weight: "1 Kg",
    discount: "-22%",
    image:
      "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 1,
  },

  {
    id: 5,
    name: "Fresh Organic Banana",
    description: "Organic bananas – sweet, natural, healthy.",
    price: 3.2,
    oldPrice: 4.0,
    weight: "1 Kg",
    discount: "-20%",
    image:
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 1,
  },
  {
    id: 6,
    name: "Juicy Oranges",
    description: "Fresh oranges – vitamin C rich, sweet and tangy.",
    price: 3.8,
    oldPrice: 4.5,
    weight: "1 Kg",
    discount: "-16%",
    image:
      "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 1,
  },
  {
    id: 7,
    name: "Sweet Strawberries",
    description: "Organic strawberries – fresh, red and delicious.",
    price: 5.5,
    oldPrice: 7.0,
    weight: "500 g",
    discount: "-21%",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 1,
  },
  {
    id: 8,
    name: "Tropical Mango",
    description: "Ripe mangoes – sweet, tropical and nutritious.",
    price: 4.9,
    oldPrice: 6.5,
    weight: "1 Kg",
    discount: "-25%",
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 1,
  },

  // FRESH VEGETABLES CATEGORY (id: 2)
  {
    id: 9,
    name: "Organic Carrots",
    description: "Fresh carrots – crunchy, vitamin-rich, sweet.",
    price: 2.8,
    oldPrice: 3.5,
    weight: "1 Kg",
    discount: "-20%",
    image:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 2,
  },

  {
    id: 11,
    name: "Organic Tomatoes",
    description: "Juicy tomatoes – fresh, organic, vine-ripened.",
    price: 3.9,
    oldPrice: 4.5,
    weight: "1 Kg",
    discount: "-13%",
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 2,
  },
  {
    id: 12,
    name: "Fresh Lettuce",
    description: "Crispy lettuce – perfect for salads, fresh daily.",
    price: 2.5,
    oldPrice: 3.2,
    weight: "500 g",
    discount: "-22%",
    image:
      "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 2,
  },
  {
    id: 13,
    name: "Bell Peppers Mix",
    description: "Colorful bell peppers – sweet, crunchy, vitamin-packed.",
    price: 4.5,
    oldPrice: 5.8,
    weight: "1 Kg",
    discount: "-22%",
    image:
      "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 2,
  },
  {
    id: 14,
    name: "Fresh Cucumber",
    description: "Organic cucumbers – crisp, refreshing, hydrating.",
    price: 2.2,
    oldPrice: 2.8,
    weight: "1 Kg",
    discount: "-21%",
    image:
      "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 2,
  },
  {
    id: 15,
    name: "Organic Spinach",
    description: "Fresh spinach – iron-rich, healthy, organic.",
    price: 3.8,
    oldPrice: 4.6,
    weight: "500 g",
    discount: "-17%",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 2,
  },

  // SNACKS CATEGORY (id: 3)
  {
    id: 16,
    name: "Organic Granola Bars",
    description: "Healthy granola bars – whole grains, honey sweetened.",
    price: 5.9,
    oldPrice: 7.5,
    weight: "300 g",
    discount: "-21%",
    image:
      "https://images.unsplash.com/photo-1590080874088-eec64895b423?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 3,
  },
  {
    id: 17,
    name: "Trail Mix Deluxe",
    description: "Premium trail mix – nuts, dried fruits, chocolate chips.",
    price: 6.8,
    oldPrice: 8.5,
    weight: "400 g",
    discount: "-20%",
    image:
      "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 3,
  },
  {
    id: 18,
    name: "Organic Crackers",
    description: "Whole wheat crackers – crispy, low-sodium, tasty.",
    price: 4.2,
    oldPrice: 5.5,
    weight: "250 g",
    discount: "-24%",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 3,
  },

  {
    id: 20,
    name: "Dried Fruit Mix",
    description: "Assorted dried fruits – apricots, figs, dates.",
    price: 7.2,
    oldPrice: 9.0,
    weight: "500 g",
    discount: "-20%",
    image:
      "https://images.unsplash.com/photo-1517398823963-c2dc6fc3e837?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 3,
  },
  {
    id: 21,
    name: "Organic Popcorn",
    description: "Air-popped popcorn – whole grain, lightly salted.",
    price: 4.9,
    oldPrice: 6.2,
    weight: "300 g",
    discount: "-21%",
    image:
      "https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 3,
  },

  // GROCERY CATEGORY (id: 4)

  {
    id: 23,
    name: "Whole Grain Bread",
    description: "Freshly baked bread – whole wheat, no preservatives.",
    price: 3.8,
    oldPrice: 4.8,
    weight: "500 g",
    discount: "-21%",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 4,
  },
  {
    id: 24,
    name: "Organic Pasta",
    description: "Whole wheat pasta – Italian quality, bronze-cut.",
    price: 4.5,
    oldPrice: 5.8,
    weight: "500 g",
    discount: "-22%",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 4,
  },
  {
    id: 25,
    name: "Brown Rice",
    description: "Organic brown rice – nutritious, whole grain.",
    price: 5.2,
    oldPrice: 6.5,
    weight: "1 Kg",
    discount: "-20%",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 4,
  },
  {
    id: 26,
    name: "Quinoa",
    description: "Premium quinoa – protein-rich, gluten-free superfood.",
    price: 6.9,
    oldPrice: 8.8,
    weight: "500 g",
    discount: "-22%",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 4,
  },

  // NUTS CATEGORY (id: 5)
  {
    id: 28,
    name: "Raw Almonds",
    description: "Premium almonds – protein-rich, heart-healthy.",
    price: 8.9,
    oldPrice: 11.5,
    weight: "500 g",
    discount: "-23%",
    image:
      "https://images.unsplash.com/photo-1508747703725-719777637510?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 5,
  },

  {
    id: 31,
    name: "Mixed Nuts",
    description: "Assorted nuts – almonds, cashews, hazelnuts blend.",
    price: 9.8,
    oldPrice: 12.5,
    weight: "500 g",
    discount: "-22%",
    image:
      "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 5,
  },

  // OILS CATEGORY (id: 6)
  {
    id: 34,
    name: "Extra Virgin Olive Oil",
    description: "Premium olive oil – cold-pressed, first harvest.",
    price: 12.5,
    oldPrice: 15.8,
    weight: "500 ml",
    discount: "-21%",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 6,
  },
  {
    id: 35,
    name: "Coconut Oil",
    description: "Organic coconut oil – virgin, unrefined, multipurpose.",
    price: 9.9,
    oldPrice: 12.5,
    weight: "500 ml",
    discount: "-21%",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 6,
  },
  {
    id: 36,
    name: "Avocado Oil",
    description: "Pure avocado oil – high smoke point, heart-healthy.",
    price: 11.8,
    oldPrice: 15.0,
    weight: "500 ml",
    discount: "-21%",
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 6,
  },
  {
    id: 37,
    name: "Sesame Oil",
    description: "Toasted sesame oil – aromatic, perfect for Asian cuisine.",
    price: 8.5,
    oldPrice: 10.8,
    weight: "250 ml",
    discount: "-21%",
    image:
      "https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 6,
  },

  {
    id: 39,
    name: "Sunflower Oil",
    description: "Pure sunflower oil – light flavor, versatile cooking.",
    price: 6.9,
    oldPrice: 8.8,
    weight: "1 L",
    discount: "-22%",
    image:
      "https://images.unsplash.com/photo-1563865436874-9aef32095fad?w=300&h=300&fit=crop",
    featured: false,
    categoryId: 6,
  },
];
