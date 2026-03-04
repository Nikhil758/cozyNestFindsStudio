const productGrid = document.getElementById("productGrid");
const loadMoreBtn = document.getElementById("loadMoreBtn");

let visibleCount = 12;
let currentCategory = "all";
let currentSearch = "";

/* ================= PRODUCTS ================= */

const products = [
  { title: "Modern Bedside Lamp", description: "Warm ambient lighting perfect for cozy bedroom setups.", image: "assets/lamp.jpg", link: "https://amzn.to/40fjbdB", category: "lighting", date: "2026-03-01" },
  { title: "Soft Neutral Throw Blanket", description: "Add warmth and texture to any bed or couch instantly.", image: "assets/blanket.jpg", link: "https://amzn.to/3ZIF5Wv", category: "textiles", date: "2026-03-02" },
  { title: "Minimal Wall Art Set", description: "Elegant neutral prints for modern small apartments.", image: "assets/wallart.jpg", link: "https://amzn.to/3MKZMOG", category: "wall-decor", date: "2026-03-03" },
  { title: "Neutral Area Rug", description: "Make your living room feel bigger and more inviting.", image: "assets/rug.jpg", link: "https://amzn.to/4rrqoDA", category: "textiles", date: "2026-03-04" },
  { title: "Arched Full Length Mirror", description: "Modern arched mirror that makes small spaces feel larger and brighter.", image: "assets/arched-mirror.jpg", link: "https://amzn.to/4rv96We", category: "wall-decor", date: "2026-03-05" },
  { title: "Large Neutral Abstract Wall Art", description: "Oversized neutral canvas art that instantly upgrades your living room.", image: "assets/abstract-wall-art.jpg", link: "https://amzn.to/3Mkd7xn", category: "wall-decor", date: "2026-03-06" },
  { title: "Floating Wood Wall Shelves", description: "Space-saving wooden shelves perfect for apartment wall decor.", image: "assets/floating-shelves.jpg", link: "https://amzn.to/4apu0jr", category: "wall-decor", date: "2026-03-07" },
  { title: "Wavy Aesthetic Wall Mirror", description: "Trendy irregular mirror that adds a modern Pinterest vibe.", image: "assets/wavy-mirror.jpg", link: "https://amzn.to/4cwP9JJ", category: "wall-decor", date: "2026-03-08" },
  { title: "Chunky Knit Throw Blanket", description: "Soft oversized knit blanket for cozy living room setups.", image: "assets/chunky-blanket.jpg", link: "https://amzn.to/40ijvZ6", category: "textiles", date: "2026-03-09" },
  { title: "Slim Entryway Console Table", description: "Narrow modern console table perfect for small apartment hallways.", image: "assets/console-table.jpg", link: "https://amzn.to/4tDmkSd", category: "furniture", date: "2026-03-10" },
  { title: "Warm White LED Strip Lights", description: "Ambient lighting that creates a cozy bedroom glow instantly.", image: "assets/led-strip-lights.jpg", link: "https://amzn.to/4cG9lsC", category: "lighting", date: "2026-03-11" },
  { title: "Neutral Ceramic Decorative Vase Set", description: "Minimalist vase set perfect for coffee table styling.", image: "assets/ceramic-vase.jpg", link: "https://amzn.to/3ZIkUIq", category: "wall-decor", date: "2026-03-12" },
  { title: "Oversized Wall Clock (Minimal Design)", description: "Large modern wall clock that becomes a statement piece in small living rooms.", image: "assets/wall-clock.jpg", link: "https://amzn.to/3MSOvvU", category: "wall-decor", date: "2026-03-13" },
  { title: "Boucle Accent Chair", description: "Soft neutral boucle chair that adds cozy texture to any bedroom or reading corner.", image: "assets/boucle-chair.jpg", link: "https://amzn.to/3OJ91Q5", category: "furniture", date: "2026-03-14" },
  { title: "Wood Bead Garland Decor", description: "Minimal farmhouse-style wood bead garland perfect for coffee table styling.", image: "assets/wood-beads.jpg", link: "https://amzn.to/4r2VsZ5", category: "wall-decor", date: "2026-03-15" },
  { title: "Rattan Storage Basket Set", description: "Stylish woven baskets for organizing blankets, toys, or laundry in small spaces.", image: "assets/rattan-basket.jpg", link: "https://amzn.to/4scJf52", category: "storage", date: "2026-03-16" },
  { title: "Modern Bedside Table (Small Space)", description: "Compact nightstand ideal for apartments and minimal bedrooms.", image: "assets/bedside-table.jpg", link: "https://amzn.to/46Cw1Gz", category: "furniture", date: "2026-03-17" },
  { title: "Neutral Blackout Curtains", description: "Soft beige blackout curtains that create a cozy and warm bedroom atmosphere.", image: "assets/blackout-curtains.jpg", link: "https://amzn.to/3MRcwDB", category: "textiles", date: "2026-03-18" },
  { title: "Decorative Throw Pillow Covers (Neutral Set)", description: "Affordable neutral pillow covers that instantly upgrade your couch aesthetic.", image: "assets/pillow-covers.jpg", link: "https://amzn.to/4l1R6Aa", category: "textiles", date: "2026-03-19" },
  { title: "Wall Mounted Entryway Key Holder", description: "Minimal wall organizer perfect for keeping keys and mail tidy.", image: "assets/key-holder.jpg", link: "https://amzn.to/4aZXW4J", category: "storage", date: "2026-03-20" },
  { title: "Small Ottoman with Storage", description: "Multi-functional ottoman that adds seating and hidden storage to small apartments.", image: "assets/storage-ottoman.jpg", link: "https://amzn.to/4b6e7NV", category: "furniture", date: "2026-03-21" },
  { title: "Modern Floor Lamp (Arc Style)", description: "Elegant arc floor lamp that creates soft ambient lighting in living rooms.", image: "assets/arc-floor-lamp.jpg", link: "https://amzn.to/4rMn71C", category: "lighting", date: "2026-03-22" },
  { title: "Neutral Small-Space Sectional Sofa", description: "Compact modern sectional sofa perfect for cozy apartment living rooms.", image: "assets/sectional-sofa.jpg", link: "https://amzn.to/40276Zr", category: "furniture", date: "2026-03-23" },
  { title: "Tall Faux Olive Tree (Indoor Decor)", description: "Elegant artificial olive tree that adds height and warmth to small spaces.", image: "assets/faux-olive-tree.jpg", link: "https://amzn.to/3MEf9IT", category: "wall-decor", date: "2026-03-24" },
  { title: "Large Neutral Decorative Floor Vase", description: "Oversized ceramic floor vase that elevates empty corners instantly.", image: "assets/floor-vase.jpg", link: "https://amzn.to/46DZXlI", category: "wall-decor", date: "2026-03-25" },
  { title: "Upholstered Storage Bench", description: "Stylish bench with hidden storage for bedrooms and entryways.", image: "assets/storage-bench.jpg", link: "https://amzn.to/4ubA72K", category: "furniture", date: "2026-03-26" },
  { title: "Minimal Gallery Wall Frame Set", description: "Modern frame set perfect for creating a Pinterest-style gallery wall.", image: "assets/gallery-frames.jpg", link: "https://amzn.to/46ybyCP", category: "wall-decor", date: "2026-03-27" },
  { title: "Luxury Scented Soy Candle Set", description: "Neutral candle set that adds warmth and cozy ambiance.", image: "assets/soy-candles.jpg", link: "https://amzn.to/4spwLHG", category: "wall-decor", date: "2026-03-28" },
  { title: "Modern Counter Height Bar Stools", description: "Minimal bar stools perfect for small kitchen islands.", image: "assets/bar-stools.jpg", link: "https://amzn.to/46EwVSV", category: "furniture", date: "2026-03-29" },
  { title: "Minimal Hanging Planter Set", description: "Wall-mounted planters perfect for adding greenery without clutter.", image: "assets/hanging-planters.jpg", link: "https://amzn.to/4cZsXIp", category: "wall-decor", date: "2026-03-30" },
  { title: "Round Neutral Ottoman Pouf", description: "Soft textured pouf that adds extra seating and style.", image: "assets/ottoman-pouf.jpg", link: "https://amzn.to/4b3C7kK", category: "furniture", date: "2026-03-31" },
  { title: "Modern Woven Laundry Hamper", description: "Stylish hamper that keeps bedrooms looking tidy.", image: "assets/laundry-hamper.jpg", link: "https://amzn.to/47lz71T", category: "storage", date: "2026-04-01" },
  { title: "Smart LED Floor Lamp", description: "Adjustable smart lamp that creates cozy mood lighting.", image: "assets/smart-floor-lamp.jpg", link: "https://amzn.to/4rIEpwB", category: "lighting", date: "2026-04-02" },
  { title: "Minimal Frameless Round Wall Mirror", description: "Simple round mirror that makes small rooms feel bigger.", image: "assets/round-mirror.jpg", link: "https://amzn.to/4l6bwb9", category: "wall-decor", date: "2026-04-03" },
  { title: "Modern Fluted TV Stand (Small Space)", description: "Stylish fluted TV console that adds texture and storage to compact living rooms.", image: "assets/fluted-tv-stand.jpg", link: "https://amzn.to/4sg8Iuw", category: "furniture", date: "2026-04-04" },
  { title: "Neutral Abstract Area Rug (5x7)", description: "Soft modern area rug that makes small apartments feel warm and spacious.", image: "assets/neutral-area-rug.jpg", link: "https://amzn.to/4lbDZwy", category: "textiles", date: "2026-04-05" },
  { title: "Cream Shag Area Rug (Cozy Living Room)", description: "Ultra soft cream shag rug perfect for cozy living room and bedroom aesthetics.", image: "assets/cream-shag-rug.jpg", link: "https://amzn.to/46EL3LZ", category: "textiles", date: "2026-04-06" },
  { title: "Boho Neutral Area Rug", description: "Beautiful boho patterned rug that instantly upgrades living rooms and bedrooms.", image: "assets/boho-neutral-rug.jpg", link: "https://amzn.to/4aMlRWq", category: "textiles", date: "2026-04-07" },
  { title: "Modern Abstract Living Room Rug", description: "Stylish abstract rug perfect for modern apartments and small spaces.", image: "assets/abstract-modern-rug.jpg", link: "https://amzn.to/4aOanSd", category: "textiles", date: "2026-04-08" },
  { title: "Washable Neutral Area Rug", description: "Easy to clean neutral rug perfect for apartments, pets and busy homes.", image: "assets/washable-rug.jpg", link: "https://amzn.to/4blVMO3", category: "textiles", date: "2026-04-09" },
  { title: "Soft Fluffy Bedroom Rug", description: "Super soft fluffy rug that adds warmth and comfort to any bedroom.", image: "assets/fluffy-bedroom-rug.jpg", link: "https://amzn.to/4aNN76X", category: "textiles", date: "2026-04-10" },
  { title: "Vintage Persian Style Rug", description: "Vintage inspired rug that adds timeless character to modern living rooms.", image: "assets/vintage-persian-rug.jpg", link: "https://amzn.to/4b0PvGe", category: "textiles", date: "2026-04-11" },
  { title: "Minimal Neutral Apartment Rug", description: "Clean minimal rug designed for small apartments and cozy spaces.", image: "assets/minimal-neutral-rug.jpg", link: "https://amzn.to/4blVNS7", category: "textiles", date: "2026-04-12" },
  { title: "Geometric Pattern Area Rug", description: "Modern geometric rug that adds personality to minimalist living rooms.", image: "assets/geometric-rug.jpg", link: "https://amzn.to/40IU9DW", category: "textiles", date: "2026-04-13" },
  { title: "Cozy Living Room Rug (Neutral Beige)", description: "Soft beige rug that makes living rooms feel warm and inviting.", image: "assets/beige-living-room-rug.jpg", link: "https://amzn.to/4aX2KZX", category: "textiles", date: "2026-04-14" },
  { title: "Round Neutral Accent Rug", description: "Stylish round rug perfect for reading corners and small bedrooms.", image: "assets/round-accent-rug.jpg", link: "https://amzn.to/4l4ohTE", category: "textiles", date: "2026-04-15" },
  { title: "Boho Tassel Rug", description: "Trendy boho rug with tassels that adds cozy texture to apartments.", image: "assets/boho-tassel-rug.jpg", link: "https://amzn.to/478WPym", category: "textiles", date: "2026-04-16" },
  { title: "Soft Modern Living Room Carpet", description: "Neutral modern carpet that transforms small living rooms instantly.", image: "assets/modern-carpet.jpg", link: "https://amzn.to/4b2rqi6", category: "textiles", date: "2026-04-17" }
];

/* Sort newest first */
products.sort((a, b) => new Date(b.date) - new Date(a.date));

function getFilteredProducts() {
  return products.filter(product => {
    const matchCategory = currentCategory === "all" || product.category === currentCategory;
    const matchSearch = product.title.toLowerCase().includes(currentSearch.toLowerCase());
    return matchCategory && matchSearch;
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();
  const visibleProducts = filtered.slice(0, visibleCount);

  productGrid.innerHTML = visibleProducts.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.title}">
      <h4>${product.title}</h4>
      <p>${product.description}</p>
      <a href="${product.link}" target="_blank" rel="nofollow sponsored" class="product-btn">
        View on Amazon
      </a>
    </div>
  `).join("");

  loadMoreBtn.style.display = filtered.length > visibleCount ? "block" : "none";
}

function filterProducts(category) {
  currentCategory = category;
  visibleCount = 12;
  renderProducts();
}

function searchProducts(value) {
  currentSearch = value;
  visibleCount = 12;
  renderProducts();
}

loadMoreBtn.addEventListener("click", () => {
  visibleCount += 12;
  renderProducts();
});

renderProducts();