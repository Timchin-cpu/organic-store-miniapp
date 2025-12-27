export const categories = [
  {
    id: 1,
    name: "Fruits",
    icon: "Apple",
    image:
      "/1.jfif",
  },
  {
    id: 2,
    name: "Fresh",
    icon: "Salad",
    image:
      "/2.jfif",
  },
  {
    id: 3,
    name: "Snack",
    icon: "Cookie",
    image:
      "/3.jfif",
  },
  {
    id: 4,
    name: "Grocery",
    icon: "ShoppingBag",
    image:
      "/4.jfif",
  },
  {
    id: 5,
    name: "Nuts",
    icon: "Nut",
    image:
      "/5.jfif",
  },
  {
    id: 6,
    name: "Oils",
    icon: "Droplet",
    image:
      "/6.jfif",
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
      "/7.jfif",
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
      "/8.jfif",
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
      "/9.jfif",
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
      "/10.jfif",
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
      "/11.jfif",
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
      "/12.jfif",
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
      "/13.jfif",
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
      "/14.jfif",
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
      "/15.jfif",
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
      "/16.jfif",
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
      "/17.jfif",
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
      "/18.jfif",
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
      "/19.jfif",
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
      "/20.jfif",
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
      "/21.jfif",
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
      "/22.jfif",
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
      "/23.jfif",
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
      "/24.jfif",
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
      "/25.jfif",
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
      "/26.jfif",
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
      "/26.jfif",
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
      "/27.jfif",
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
      "/28.jfif",
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
      "/29.jfif",
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
      "/30.jfif",
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
      "/31.jfif",
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
      "/32.jfif",
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
      "/32.jfif",
    featured: false,
    categoryId: 6,
  },
];
