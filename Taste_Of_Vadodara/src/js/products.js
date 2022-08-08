/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

// ARRAY OF OBJECTS.
// [] : ARRAY
// {} : OBJECT
// ARRAY OF OBJECTS : [ {}, {}, {} ]

window.products = [
  // OBJECT 1
  {
    id: "00a1",
    title: "Bhakharvadi Bites",
    description: "A bite size roll which is filled with spicy fillings.",
    price: 5,
    discontinued: false,
    categories: ["00a"]
  },

  // OBJECT 2
  {
    id: "00a2",
    title: "Regular Bhakharvadi",
    description: "A regular size roll which is filled with spicy fillings.",
    price: 7,
    discontinued: true,
    categories: ["00a"]
  },

  // OBJECT 3
  {
    id: "00a3",
    title: "Mini Bhakharvadi",
    description: "A nut size roll which is filled with spicy fillings.",
    price: 3.5,
    discontinued: false,
    categories: ["00a"]
  },

  // OBJECT 4
  {
    id: "00a4",
    title: "Jain Bhakharvadi",
    description:
      "A regular size roll which is filled with spicy fillings. However, filling are made with ingredients with out ginger, garlic and onions.",
    price: 8,
    discontinued: true,
    categories: ["00a"]
  },

  // OBJECT 5
  {
    id: "00b1",
    title: "Lilo Chevdo",
    description: "A wet gujarati snack made from grated potatoes, chana dal, and lemon juice.",
    price: 9.5,
    discontinued: false,
    categories: ["00b"]
  },

  // OBJECT 6
  {
    id: "00b2",
    title: "Nylon Chevdo",
    description: "A crunchy snack designed for kids and elders as its not much hard to eat.",
    price: 10,
    discontinued: false,
    categories: ["00b"]
  },

  // OBJECT 7
  {
    id: "00b3",
    title: "Makai Chevdo",
    description: "A gujarati mix snack made out of corn flacks.",
    price: 6.35,
    discontinued: false,
    categories: ["00b"]
  },

  // OBJECT 8
  {
    id: "00b4",
    title: "Khatta Mittha Chevdo",
    description: "A gujarati mix snack which is sour and sweet at the same time.",
    price: 7,
    discontinued: false,
    categories: ["00b"]
  },

  // OBJECT 9
  {
    id: "00b5",
    title: "Farari Chevdo",
    description:
      "A gujarati mix snack which prepared using ingredients which could be eaten while fasting",
    price: 10,
    discontinued: true,
    categories: ["00b"]
  },

  // OBJECT 10
  {
    id: "00c1",
    title: "Aalo Palak Sev",
    description: "A crunchy gujarati snack made of chickpea flour, potato and spinach.",
    price: 9,
    discontinued: false,
    categories: ["00c"]
  },

  // OBJECT 11
  {
    id: "00c2",
    title: "Aalo Mari Sev",
    description: "A crunchy gujarati snack made of chickpea flour, potato and black peppercorns.",
    price: 8.4,
    discontinued: false,
    categories: ["00c"]
  },

  // OBJECT 12
  {
    id: "00c3",
    title: "Usal Sev",
    description: "A crunchy gujarati snack made of chickpea flour.",
    price: 6,
    discontinued: true,
    categories: ["00c"]
  },

  // OBJECT 13
  {
    id: "00c4",
    title: "Ratlami Sev",
    description: "A crunchy gujarati snack made of chickpea flour and lots of spicy flavors",
    price: 5.65,
    discontinued: false,
    categories: ["00c"]
  },

  // OBJECT 10
  {
    id: "00c1",
    title: "Tomato Sev",
    description: "A crunchy gujarati snack made of chickpea flour and tomato",
    price: 7,
    discontinued: false,
    categories: ["00c"]
  }
];
