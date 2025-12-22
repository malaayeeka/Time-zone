export const products = {
  mens: [
    {
      id: "m1",
      name: "Classic Executive Steel",
      price: 299,
      image: "/luxury-mens-steel-watch.jpg",
      category: "mens",
      description: "Premium stainless steel watch with automatic movement",
      specifications: "Case: 42mm, Water Resistant: 100m, Movement: Automatic",
    },
    {
      id: "m2",
      name: "Sport Chronograph Black",
      price: 399,
      image: "/mens-sport-chronograph-watch.jpg",
      category: "mens",
      description: "Professional sport watch with chronograph function",
      specifications: "Case: 44mm, Water Resistant: 200m, Movement: Quartz",
    },
    {
      id: "m3",
      name: "Leather Classic Brown",
      price: 249,
      image: "/mens-leather-strap-watch.jpg",
      category: "mens",
      description: "Elegant leather strap watch for business professionals",
      specifications: "Case: 40mm, Water Resistant: 50m, Movement: Quartz",
    },
  ],
  womens: [
    {
      id: "w1",
      name: "Diamond Elegance Rose",
      price: 449,
      image: "/womens-rose-gold-diamond-watch.jpg",
      category: "womens",
      description: "Stunning rose gold watch with diamond accents",
      specifications: "Case: 32mm, Water Resistant: 30m, Movement: Quartz",
    },
    {
      id: "w2",
      name: "Pearl Luxury Silver",
      price: 349,
      image: "/womens-silver-pearl-watch.jpg",
      category: "womens",
      description: "Luxurious silver watch with mother-of-pearl dial",
      specifications: "Case: 28mm, Water Resistant: 30m, Movement: Quartz",
    },
    {
      id: "w3",
      name: "Crystal Fashion Gold",
      price: 279,
      image: "/womens-gold-crystal-watch.jpg",
      category: "womens",
      description: "Fashion-forward gold watch with crystal details",
      specifications: "Case: 30mm, Water Resistant: 30m, Movement: Quartz",
    },
  ],
  children: [
    {
      id: "c1",
      name: "Kids Fun Digital Blue",
      price: 49,
      image: "/kids-digital-blue-watch.jpg",
      category: "children",
      description: "Durable digital watch perfect for active kids",
      specifications: "Case: 35mm, Water Resistant: 50m, Movement: Digital",
    },
    {
      id: "c2",
      name: "Junior Sport Pink",
      price: 59,
      image: "/kids-sport-pink-watch.jpg",
      category: "children",
      description: "Sporty and colorful watch for young girls",
      specifications: "Case: 32mm, Water Resistant: 50m, Movement: Quartz",
    },
    {
      id: "c3",
      name: "Adventure Time Green",
      price: 54,
      image: "/kids-adventure-green-watch.jpg",
      category: "children",
      description: "Adventure-ready watch for outdoor activities",
      specifications: "Case: 34mm, Water Resistant: 100m, Movement: Digital",
    },
  ],
  couples: [
    {
      id: "cp1",
      name: "Eternal Love Pair Silver",
      price: 599,
      image: "/couple-matching-silver-watches.jpg",
      category: "couples",
      description: "Matching set for couples in elegant silver",
      specifications: "His: 42mm, Hers: 32mm, Water Resistant: 50m",
    },
    {
      id: "cp2",
      name: "Together Forever Rose Gold",
      price: 699,
      image: "/couple-rose-gold-watches.jpg",
      category: "couples",
      description: "Beautiful rose gold matching watches",
      specifications: "His: 44mm, Hers: 34mm, Water Resistant: 100m",
    },
    {
      id: "cp3",
      name: "Unity Black & Rose",
      price: 649,
      image: "/couple-black-rose-gold-watches.jpg",
      category: "couples",
      description: "Contrasting black and rose gold couple set",
      specifications: "His: 43mm, Hers: 33mm, Water Resistant: 100m",
    },
  ],
}

export const getAllProducts = () => {
  return [...products.mens, ...products.womens, ...products.children, ...products.couples]
}

export const getProductById = (id) => {
  return getAllProducts().find((p) => p.id === id)
}

export const getProductsByCategory = (category) => {
  return products[category] || []
}
