const products = [
  {
    title: "Modern Bedside Lamp",
    description: "Warm ambient lighting perfect for cozy bedroom setups.",
    image: "assets/lamp.jpg",
    link: "https://amzn.to/40fjbdB"
  },
  {
    title: "Soft Neutral Throw Blanket",
    description: "Add warmth and texture to any bed or couch instantly.",
    image: "assets/blanket.jpg",
    link: "https://amzn.to/3ZIF5Wv"
  },
  {
    title: "Minimal Wall Art Set",
    description: "Elegant neutral prints for modern small apartments.",
    image: "assets/wallart.jpg",
    link: "https://amzn.to/3MKZMOG"
  },
  {
    title: "Neutral Area Rug",
    description: "Make your living room feel bigger and more inviting.",
    image: "assets/rug.jpg",
    link: "https://amzn.to/4rrqoDA"
  },
  {
    title: "Arched Full Length Mirror",
    description: "Modern arched mirror that makes small spaces feel larger and brighter.",
    image: "assets/arched-mirror.jpg",
    link: "https://amzn.to/4rv96We"
  },
  {
    title: "Large Neutral Abstract Wall Art",
    description: "Oversized neutral canvas art that instantly upgrades your living room.",
    image: "assets/abstract-wall-art.jpg",
    link: "https://amzn.to/3Mkd7xn"
  },
  {
    title: "Floating Wood Wall Shelves",
    description: "Space-saving wooden shelves perfect for apartment wall decor.",
    image: "assets/floating-shelves.jpg",
    link: "https://amzn.to/4apu0jr"
  },
  {
    title: "Wavy Aesthetic Wall Mirror",
    description: "Trendy irregular mirror that adds a modern Pinterest vibe.",
    image: "assets/wavy-mirror.jpg",
    link: "https://amzn.to/4cwP9JJ"
  },
  {
    title: "Chunky Knit Throw Blanket",
    description: "Soft oversized knit blanket for cozy living room setups.",
    image: "assets/chunky-blanket.jpg",
    link: "https://amzn.to/40ijvZ6"
  },
  {
    title: "Slim Entryway Console Table",
    description: "Narrow modern console table perfect for small apartment hallways.",
    image: "assets/console-table.jpg",
    link: "https://amzn.to/4tDmkSd"
  },
  {
    title: "Warm White LED Strip Lights",
    description: "Ambient lighting that creates a cozy bedroom glow instantly.",
    image: "assets/led-strip-lights.jpg",
    link: "https://amzn.to/4cG9lsC"
  },
  {
    title: "Neutral Ceramic Decorative Vase Set",
    description: "Minimalist vase set perfect for coffee table styling.",
    image: "assets/ceramic-vase.jpg",
    link: "https://amzn.to/3ZIkUIq"
  }
];

// RENDER PRODUCTS
const productGrid = document.getElementById("productGrid");

function renderProducts() {
  productGrid.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.title}">
      <h4>${product.title}</h4>
      <p>${product.description}</p>
      <a href="${product.link}" target="_blank" rel="nofollow sponsored" class="product-btn">
        View on Amazon
      </a>
    </div>
  `).join("");
}

renderProducts();