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
  },
  {
    title: "Oversized Wall Clock (Minimal Design)",
    description: "Large modern wall clock that becomes a statement piece in small living rooms.",
    image: "assets/wall-clock.jpg",
    link: "https://amzn.to/3MSOvvU"
  },
  {
    title: "Boucle Accent Chair",
    description: "Soft neutral boucle chair that adds cozy texture to any bedroom or reading corner.",
    image: "assets/boucle-chair.jpg",
    link: "https://amzn.to/3OJ91Q5"
  },
  {
    title: "Wood Bead Garland Decor",
    description: "Minimal farmhouse-style wood bead garland perfect for coffee table styling.",
    image: "assets/wood-beads.jpg",
    link: "https://amzn.to/4r2VsZ5"
  },
  {
    title: "Rattan Storage Basket Set",
    description: "Stylish woven baskets for organizing blankets, toys, or laundry in small spaces.",
    image: "assets/rattan-basket.jpg",
    link: "https://amzn.to/4scJf52"
  },
  {
    title: "Modern Bedside Table (Small Space)",
    description: "Compact nightstand ideal for apartments and minimal bedrooms.",
    image: "assets/bedside-table.jpg",
    link: "https://amzn.to/46Cw1Gz"
  },
  {
    title: "Neutral Blackout Curtains",
    description: "Soft beige blackout curtains that create a cozy and warm bedroom atmosphere.",
    image: "assets/blackout-curtains.jpg",
    link: "https://amzn.to/3MRcwDB"
  },
  {
    title: "Decorative Throw Pillow Covers (Neutral Set)",
    description: "Affordable neutral pillow covers that instantly upgrade your couch aesthetic.",
    image: "assets/pillow-covers.jpg",
    link: "https://amzn.to/4l1R6Aa"
  },
  {
    title: "Wall Mounted Entryway Key Holder",
    description: "Minimal wall organizer perfect for keeping keys and mail tidy.",
    image: "assets/key-holder.jpg",
    link: "https://amzn.to/4aZXW4J"
  },
  {
    title: "Small Ottoman with Storage",
    description: "Multi-functional ottoman that adds seating and hidden storage to small apartments.",
    image: "assets/storage-ottoman.jpg",
    link: "https://amzn.to/4b6e7NV"
  },
  {
    title: "Modern Floor Lamp (Arc Style)",
    description: "Elegant arc floor lamp that creates soft ambient lighting in living rooms.",
    image: "assets/arc-floor-lamp.jpg",
    link: "https://amzn.to/4rMn71C"
  },
  {
    title: "Neutral Small-Space Sectional Sofa",
    description: "Compact modern sectional sofa perfect for cozy apartment living rooms.",
    image: "assets/sectional-sofa.jpg",
    link: "https://amzn.to/40276Zr"
  },
  {
    title: "Tall Faux Olive Tree (Indoor Decor)",
    description: "Elegant artificial olive tree that adds height and warmth to small spaces.",
    image: "assets/faux-olive-tree.jpg",
    link: "https://amzn.to/3MEf9IT"
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