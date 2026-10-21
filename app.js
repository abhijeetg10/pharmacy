// ==========================================================================
// MEDICARE+ INTERACTIVE APPLICATION LOGIC & STATE MANAGEMENT
// ==========================================================================

const PRODUCTS_DATA = [
  {
    id: 'crocin-650',
    name: 'Crocin 650 Tablet',
    generic: 'Paracetamol 650 mg',
    category: 'Prescription',
    categorySlug: 'pain-relief',
    price: 45,
    originalPrice: 60,
    discount: '25% OFF',
    rating: 4.8,
    reviewsCount: 1240,
    image: 'images/crocin-box.jpg',
    packSizes: ['10 Tablets', '15 Tablets', '20 Tablets'],
    description: 'Crocin 650 contains Paracetamol 650mg, used for relief from mild to moderate pain and reducing fever. Gentle on the stomach and suitable for most adults.',
    benefits: ['Provides fast relief from fever and pain', 'Gentle on stomach', 'Suitable for adults and children (as advised)'],
    composition: 'Each uncoated tablet contains: Paracetamol IP 650mg, Excipients q.s.',
    howToUse: 'Take 1 tablet every 4 to 6 hours as needed. Do not exceed 4 tablets in 24 hours unless directed by your physician.',
    sideEffects: 'Generally well-tolerated. Rare side effects include skin rash, allergic reactions or liver strain with overdose.'
  },
  {
    id: 'dolo-650',
    name: 'Dolo 650 Tablet',
    generic: 'Paracetamol 650 mg',
    category: 'Prescription',
    categorySlug: 'pain-relief',
    price: 38,
    originalPrice: 48,
    discount: '20% OFF',
    rating: 4.7,
    reviewsCount: 3890,
    image: 'images/crocin-box.jpg',
    packSizes: ['15 Tablets', '30 Tablets'],
    description: 'Dolo 650 is an antipyretic and analgesic tablet that helps relieve body pain, headache, and persistent high fever.',
    benefits: ['Rapid therapeutic action', 'Clinically proven efficacy', 'Trusted pain inhibitor'],
    composition: 'Paracetamol 650mg in micro-crystalline cellulose base.',
    howToUse: 'Swallow whole with a glass of water after food.',
    sideEffects: 'Mild nausea in sensitive stomachs.'
  },
  {
    id: 'calpol-650',
    name: 'Calpol 650 Suspension',
    generic: 'Paracetamol Oral Suspension',
    category: 'Fever & Cold',
    categorySlug: 'fever-cold',
    price: 72,
    originalPrice: 85,
    discount: '15% OFF',
    rating: 4.9,
    reviewsCount: 820,
    image: 'images/supplements-banner.jpg',
    packSizes: ['60 ml', '120 ml'],
    description: 'Calpol Suspension offers fast-acting liquid relief with a pleasant strawberry flavor, ideal for fever and throat aches.',
    benefits: ['Pleasant taste', 'Easy dosing dispenser', 'Fast absorption'],
    composition: 'Each 5ml contains Paracetamol IP 250mg in flavored syrup base.',
    howToUse: 'Measure with provided measuring cap. Use as prescribed.',
    sideEffects: 'None reported at standard therapeutic dosage.'
  },
  {
    id: 'revital-h',
    name: 'Revital H Daily Multivitamin',
    generic: 'Ginseng + 10 Vitamins + 9 Minerals',
    category: 'Wellness',
    categorySlug: 'wellness',
    price: 299,
    originalPrice: 380,
    discount: '21% OFF',
    rating: 4.8,
    reviewsCount: 2150,
    image: 'images/supplements-banner.jpg',
    packSizes: ['30 Capsules', '60 Capsules', '100 Capsules'],
    description: 'Revital H is a daily health supplement with a unique blend of Ginseng, 10 Vitamins and 9 Minerals to keep you active and mentally agile.',
    benefits: ['Boosts energy and stamina', 'Improves mental alertness', 'Strengthens daily immune defenses'],
    composition: 'Natural Ginseng Extract 42.5mg, Vitamin A, B-Complex, C, D3, E, Zinc, Iron, Magnesium.',
    howToUse: 'Take 1 capsule daily after a meal, preferably after breakfast.',
    sideEffects: 'Safe for daily consumption. Avoid taking on empty stomach.'
  },
  {
    id: 'accu-chek',
    name: 'Accu-Chek Active Glucose Meter',
    generic: 'Digital Blood Sugar Monitor Kit',
    category: 'Devices',
    categorySlug: 'health-devices',
    price: 1499,
    originalPrice: 1899,
    discount: '21% OFF',
    rating: 4.9,
    reviewsCount: 1540,
    image: 'images/hero-doctor.jpg',
    packSizes: ['Meter Kit', 'Meter + 50 Strips'],
    description: 'Accu-Chek Active glucometer is accurate and easy to use. Delivers reliable blood glucose results within 5 seconds with tiny blood sample size.',
    benefits: ['Accurate results in 5 seconds', 'No coding required', '500-test memory with USB transfer'],
    composition: 'Includes Meter, Accu-Chek Softclix Lancing device, 10 sterile lancets, carry pouch, manual.',
    howToUse: 'Insert strip, apply small capillary blood drop from fingertip, read score in 5 seconds.',
    sideEffects: 'N/A - Medical In-vitro Diagnostic Device'
  },
  {
    id: 'cetaphil-moisturizer',
    name: 'Cetaphil Moisturizing Cream',
    generic: 'Hydrating Formula for Dry/Sensitive Skin',
    category: 'Skin Care',
    categorySlug: 'personal-care',
    price: 799,
    originalPrice: 899,
    discount: '11% OFF',
    rating: 4.8,
    reviewsCount: 3100,
    image: 'images/wellness-article.jpg',
    packSizes: ['100g', '250g', '500g'],
    description: 'Rich, non-greasy cream formulated with niacinamide, panthenol, and hydrating glycerin to protect and intensely hydrate sensitive skin for 48 hours.',
    benefits: ['Continuous 48-hour hydration', 'Defends against 5 signs of skin sensitivity', 'Dermatologist tested'],
    composition: 'Sweet Almond Oil, Niacinamide (Vitamin B3), Panthenol (Pro-Vitamin B5), Tocopherol (Vitamin E).',
    howToUse: 'Apply liberally as often as needed or as directed by a dermatologist.',
    sideEffects: 'Non-comedogenic and hypoallergenic.'
  },
  {
    id: 'pan-d',
    name: 'Pan-D Capsule',
    generic: 'Pantoprazole + Domperidone',
    category: 'Digestive Care',
    categorySlug: 'digestive-care',
    price: 98,
    originalPrice: 130,
    discount: '25% OFF',
    rating: 4.6,
    reviewsCount: 780,
    image: 'images/crocin-box.jpg',
    packSizes: ['10 Capsules', '15 Capsules'],
    description: 'Pan-D is used to treat acidity, gastroesophageal reflux disease (GERD), heartburn and nausea caused by acid reflux.',
    benefits: ['Instant relief from acid reflux', 'Prevents nausea and bloating', 'Promotes gastric emptying'],
    composition: 'Pantoprazole Sodium Gastro-resistant 40mg + Domperidone Prolonged-release 30mg.',
    howToUse: 'Take 1 capsule once daily in the morning, 30 minutes before breakfast.',
    sideEffects: 'Dry mouth, headache, slight abdominal discomfort.'
  },
  {
    id: 'amoxicillin-500',
    name: 'Amoxicillin 500mg Capsule',
    generic: 'Amoxicillin Trihydrate',
    category: 'Prescription',
    categorySlug: 'prescription',
    price: 120,
    originalPrice: 150,
    discount: '20% OFF',
    rating: 4.7,
    reviewsCount: 910,
    image: 'images/crocin-box.jpg',
    packSizes: ['10 Capsules', '20 Capsules'],
    description: 'Broad spectrum penicillin antibiotic used to treat various bacterial infections of the respiratory tract, ear, nose, throat and skin.',
    benefits: ['Effective bactericidal action', 'Standard first-line antibiotic', 'Strict prescription item'],
    composition: 'Amoxicillin Trihydrate IP equivalent to Amoxicillin 500mg.',
    howToUse: 'Take as directed by doctor. Complete full prescribed course even if symptoms disappear.',
    sideEffects: 'Mild diarrhea, nausea, allergic rash (discontinue if rash occurs).'
  },
  {
    id: 'metformin-500',
    name: 'Metformin 500mg SR Tablet',
    generic: 'Metformin Hydrochloride Sustained Release',
    category: 'Diabetes Care',
    categorySlug: 'diabetes-care',
    price: 65,
    originalPrice: 85,
    discount: '24% OFF',
    rating: 4.8,
    reviewsCount: 1640,
    image: 'images/crocin-box.jpg',
    packSizes: ['15 Tablets', '30 Tablets'],
    description: 'First-line medication for the treatment of type 2 diabetes mellitus, particularly in overweight individuals.',
    benefits: ['Controls blood sugar levels', 'Reduces risk of diabetes complications', 'Sustained release formulation'],
    composition: 'Metformin Hydrochloride IP 500mg (in sustained release form).',
    howToUse: 'Take with or after dinner to minimize stomach upset.',
    sideEffects: 'Abdominal pain, metallic taste, nausea.'
  }
];

// STATE
let cart = [
  { productId: 'crocin-650', quantity: 1, pack: '10 Tablets' },
  { productId: 'dolo-650', quantity: 1, pack: '15 Tablets' },
  { productId: 'revital-h', quantity: 1, pack: '30 Capsules' }
];

let currentFilter = 'all';
let searchQuery = '';
let activeProduct = PRODUCTS_DATA[0];

// DOM INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProducts();
  renderCatalogProducts();
  updateCartBadge();
  setupEventListeners();
  renderProductDetail('crocin-650');
});

// EVENT LISTENERS
function setupEventListeners() {
  // Navigation Routing
  document.querySelectorAll('[data-route]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetRoute = link.getAttribute('data-route');
      switchRoute(targetRoute);
    });
  });

  // Global Search in Nav
  const navSearchInput = document.getElementById('navSearchInput');
  if (navSearchInput) {
    navSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderCatalogProducts();
      if (searchQuery.length > 0 && !document.getElementById('view-medicines').classList.contains('active-view')) {
        switchRoute('medicines');
      }
    });
  }

  // Hero Search Box
  const heroSearchInput = document.getElementById('heroSearchInput');
  const heroSearchBtn = document.getElementById('heroSearchBtn');
  if (heroSearchBtn && heroSearchInput) {
    heroSearchBtn.addEventListener('click', () => {
      searchQuery = heroSearchInput.value.toLowerCase().trim();
      switchRoute('medicines');
      renderCatalogProducts();
    });
    heroSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        searchQuery = heroSearchInput.value.toLowerCase().trim();
        switchRoute('medicines');
        renderCatalogProducts();
      }
    });
  }

  // Quick Tile Routing
  document.querySelectorAll('.quick-tile').forEach(tile => {
    tile.addEventListener('click', () => {
      const cat = tile.getAttribute('data-cat');
      if (cat) {
        setCategoryFilter(cat);
        switchRoute('medicines');
      }
    });
  });

  // Category Pill Buttons in Catalog
  document.querySelectorAll('.filter-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-item-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-cat-filter');
      setCategoryFilter(cat);
    });
  });

  // Modal Closers
  document.querySelectorAll('.modal-close-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  // Close modal when clicking on backdrop
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });

  // Prescription Upload File Simulation
  const rxFileInput = document.getElementById('rxFileInput');
  if (rxFileInput) {
    rxFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handlePrescriptionUpload(e.target.files[0].name);
      }
    });
  }
}

// ROUTING LOGIC
function switchRoute(routeName) {
  // Hide all views
  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.remove('active-view');
  });

  // Remove active from nav links
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  const targetView = document.getElementById(`view-${routeName}`);
  if (targetView) {
    targetView.classList.add('active-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Highlight active nav
  const activeNav = document.querySelector(`.nav-link[data-route="${routeName}"]`);
  if (activeNav) {
    activeNav.classList.add('active');
  }

  // Highlight active mobile bottom nav
  document.querySelectorAll('.mobile-nav-item').forEach(m => m.classList.remove('active'));
  const activeMobileNav = document.querySelector(`.mobile-nav-item[data-route="${routeName}"]`);
  if (activeMobileNav) {
    activeMobileNav.classList.add('active');
  }

  // If opening cart, re-render cart
  if (routeName === 'cart') {
    renderCartView();
  }
}

// CATEGORY FILTER
function setCategoryFilter(categorySlug) {
  currentFilter = categorySlug;
  renderCatalogProducts();
}

// RENDER FEATURED PRODUCTS ON HOME
function renderFeaturedProducts() {
  const container = document.getElementById('featuredProductsGrid');
  if (!container) return;

  const featured = PRODUCTS_DATA.slice(0, 5);
  container.innerHTML = featured.map(prod => `
    <div class="product-card">
      <div class="product-img-wrap" onclick="viewProduct('${prod.id}')">
        <span class="discount-tag">${prod.discount}</span>
        <img src="${prod.image}" alt="${prod.name}" loading="lazy" />
      </div>
      <div class="product-details">
        <div class="prod-category">${prod.category}</div>
        <div class="prod-title" onclick="viewProduct('${prod.id}')">${prod.name}</div>
        <div class="prod-desc-brief">${prod.generic}</div>
        <div class="prod-rating">
          <i class="fa-solid fa-star"></i>
          <strong>${prod.rating}</strong>
          <span>(${prod.reviewsCount})</span>
        </div>
        <div class="prod-price-row">
          <span class="price-current">₹${prod.price}</span>
          <span class="price-original">₹${prod.originalPrice}</span>
        </div>
        <button class="btn-add-cart" onclick="addToCart('${prod.id}')">
          <i class="fa-solid fa-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  `).join('');
}

// RENDER CATALOG PRODUCTS
function renderCatalogProducts() {
  const container = document.getElementById('catalogProductsGrid');
  if (!container) return;

  let filtered = PRODUCTS_DATA;

  if (currentFilter && currentFilter !== 'all') {
    filtered = filtered.filter(p => p.categorySlug === currentFilter || p.category.toLowerCase().includes(currentFilter));
  }

  if (searchQuery) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(searchQuery) ||
      p.generic.toLowerCase().includes(searchQuery) ||
      p.category.toLowerCase().includes(searchQuery)
    );
  }

  const resultCount = document.getElementById('catalogResultCount');
  if (resultCount) {
    resultCount.textContent = `Showing ${filtered.length} products`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: 16px;">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 40px; color: var(--text-dim); margin-bottom: 16px;"></i>
        <h3 style="font-size: 20px; margin-bottom: 8px;">No matching medicines found</h3>
        <p style="color: var(--text-muted); margin-bottom: 20px;">Try searching for paracetamol, multivitamin, or check all categories.</p>
        <button class="btn-primary" onclick="resetFilters()">View All Medicines</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(prod => `
    <div class="product-card">
      <div class="product-img-wrap" onclick="viewProduct('${prod.id}')">
        <span class="discount-tag">${prod.discount}</span>
        <img src="${prod.image}" alt="${prod.name}" loading="lazy" />
      </div>
      <div class="product-details">
        <div class="prod-category">${prod.category}</div>
        <div class="prod-title" onclick="viewProduct('${prod.id}')">${prod.name}</div>
        <div class="prod-desc-brief">${prod.generic}</div>
        <div class="prod-rating">
          <i class="fa-solid fa-star"></i>
          <strong>${prod.rating}</strong>
          <span>(${prod.reviewsCount})</span>
        </div>
        <div class="prod-price-row">
          <span class="price-current">₹${prod.price}</span>
          <span class="price-original">₹${prod.originalPrice}</span>
        </div>
        <button class="btn-add-cart" onclick="addToCart('${prod.id}')">
          <i class="fa-solid fa-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  `).join('');
}

function resetFilters() {
  currentFilter = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('navSearchInput');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.filter-item-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-cat-filter') === 'all');
  });
  renderCatalogProducts();
}

// PRODUCT DETAIL VIEW
function viewProduct(productId) {
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  if (!prod) return;
  activeProduct = prod;
  renderProductDetail(productId);
  switchRoute('product-detail');
}

function renderProductDetail(productId) {
  const prod = PRODUCTS_DATA.find(p => p.id === productId) || PRODUCTS_DATA[0];
  const container = document.getElementById('productDetailContent');
  if (!container) return;

  container.innerHTML = `
    <div class="detail-layout">
      <!-- Image Gallery -->
      <div class="detail-gallery">
        <div class="detail-main-img">
          <span class="discount-tag" style="top: 20px; left: 20px; font-size: 13px; padding: 4px 10px;">${prod.discount}</span>
          <img src="${prod.image}" alt="${prod.name}" id="mainDetailImage" />
        </div>
        <div style="display: flex; gap: 12px;">
          <div style="width: 70px; height: 70px; background: #fff; border-radius: 8px; border: 2px solid var(--primary); display:flex; align-items:center; justify-content:center; cursor:pointer;">
            <img src="${prod.image}" style="max-width: 80%; max-height:80%;" />
          </div>
          <div style="width: 70px; height: 70px; background: #0e201d; border-radius: 8px; border: 1px solid var(--border-subtle); display:flex; align-items:center; justify-content:center; color: var(--text-dim); font-size: 20px;">
            <i class="fa-solid fa-capsules"></i>
          </div>
          <div style="width: 70px; height: 70px; background: #0e201d; border-radius: 8px; border: 1px solid var(--border-subtle); display:flex; align-items:center; justify-content:center; color: var(--text-dim); font-size: 20px;">
            <i class="fa-solid fa-shield-halved"></i>
          </div>
        </div>
      </div>

      <!-- Info Column -->
      <div class="detail-info">
        <div style="display:flex; align-items:center; gap: 8px; margin-bottom: 8px;">
          <span class="badge badge-green">${prod.category}</span>
          <span style="font-size: 12px; color: #10b981;"><i class="fa-solid fa-circle-check"></i> In Stock</span>
        </div>
        <h1 style="font-size: 32px; font-weight: 800; margin-bottom: 6px; letter-spacing: -0.5px;">${prod.name}</h1>
        <p style="color: var(--text-muted); font-size: 15px; margin-bottom: 16px;">${prod.generic}</p>

        <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
          <div style="display:flex; align-items:center; gap: 5px; color: #f59e0b; font-weight: 700; font-size: 14px;">
            <i class="fa-solid fa-star"></i> ${prod.rating} 
            <span style="color: var(--text-dim); font-weight: 400;">(${prod.reviewsCount} ratings)</span>
          </div>
          <span style="color: var(--border-subtle)">|</span>
          <span style="font-size: 13px; color: var(--primary-light);"><i class="fa-solid fa-truck-fast"></i> Delivery in 2 hours</span>
        </div>

        <div style="display: flex; align-items: baseline; gap: 12px; margin-bottom: 24px; padding: 14px 20px; background: rgba(0, 229, 153, 0.05); border: 1px solid var(--border-accent); border-radius: 12px;">
          <span style="font-size: 32px; font-weight: 800; color: #ffffff;">₹${prod.price}</span>
          <span style="font-size: 16px; color: var(--text-dim); text-decoration: line-through;">₹${prod.originalPrice}</span>
          <span class="badge badge-green">${prod.discount}</span>
        </div>

        <div>
          <label style="font-size: 13.5px; font-weight: 700; color: #ffffff;">Select Pack Size:</label>
          <div class="pack-sizes">
            ${prod.packSizes.map((size, idx) => `
              <button class="pack-btn ${idx === 0 ? 'active' : ''}" onclick="selectPackSize(this, '${size}')">${size}</button>
            `).join('')}
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 20px; margin: 30px 0;">
          <div class="qty-control">
            <button class="qty-btn" onclick="adjustDetailQty(-1)"><i class="fa-solid fa-minus"></i></button>
            <input type="text" class="qty-input" id="detailQtyInput" value="1" readonly />
            <button class="qty-btn" onclick="adjustDetailQty(1)"><i class="fa-solid fa-plus"></i></button>
          </div>
          <button class="btn-primary" style="flex: 1; padding: 14px 28px; font-size: 15px;" onclick="addDetailToCart('${prod.id}')">
            <i class="fa-solid fa-cart-shopping"></i> Add to Cart
          </button>
        </div>

        <!-- Trust Badges Under Add To Cart -->
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <div style="display:flex; align-items:center; gap: 8px; font-size: 12px; color: var(--text-muted);">
            <i class="fa-solid fa-shield-check" style="color: var(--primary); font-size: 16px;"></i> 100% Genuine
          </div>
          <div style="display:flex; align-items:center; gap: 8px; font-size: 12px; color: var(--text-muted);">
            <i class="fa-solid fa-bolt" style="color: var(--primary); font-size: 16px;"></i> Fast Delivery
          </div>
          <div style="display:flex; align-items:center; gap: 8px; font-size: 12px; color: var(--text-muted);">
            <i class="fa-solid fa-lock" style="color: var(--primary); font-size: 16px;"></i> Secure Payment
          </div>
        </div>
      </div>
    </div>

    <!-- Product Details Tabs -->
    <div style="margin-top: 40px; background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 34px;">
      <div class="product-tabs-header">
        <button class="tab-btn active" onclick="switchProductTab(event, 'tab-desc')">Description</button>
        <button class="tab-btn" onclick="switchProductTab(event, 'tab-comp')">Composition</button>
        <button class="tab-btn" onclick="switchProductTab(event, 'tab-use')">How to Use</button>
        <button class="tab-btn" onclick="switchProductTab(event, 'tab-side')">Side Effects</button>
        <button class="tab-btn" onclick="switchProductTab(event, 'tab-rev')">Reviews (${prod.reviewsCount})</button>
      </div>

      <div id="tab-desc" class="tab-content" style="display: block;">
        <h4 style="font-size: 16px; margin-bottom: 10px; color: #ffffff;">About ${prod.name}</h4>
        <p style="color: var(--text-muted); line-height: 1.7; margin-bottom: 18px;">${prod.description}</p>
        <h4 style="font-size: 15px; margin-bottom: 10px; color: #ffffff;">Key Benefits:</h4>
        <ul style="color: var(--text-muted); padding-left: 20px; line-height: 1.8;">
          ${prod.benefits.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>

      <div id="tab-comp" class="tab-content" style="display: none;">
        <h4 style="font-size: 16px; margin-bottom: 10px; color: #0f172a;">Active Ingredients & Composition</h4>
        <p style="color: var(--text-muted); line-height: 1.7;">${prod.composition}</p>
      </div>

      <div id="tab-use" class="tab-content" style="display: none;">
        <h4 style="font-size: 16px; margin-bottom: 10px; color: #0f172a;">Recommended Dosage & Guidelines</h4>
        <p style="color: var(--text-muted); line-height: 1.7;">${prod.howToUse}</p>
      </div>

      <div id="tab-side" class="tab-content" style="display: none;">
        <h4 style="font-size: 16px; margin-bottom: 10px; color: #0f172a;">Safety Information & Possible Side Effects</h4>
        <p style="color: var(--text-muted); line-height: 1.7;">${prod.sideEffects}</p>
      </div>

      <div id="tab-rev" class="tab-content" style="display: none;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 20px;">
          <div>
            <span style="font-size: 28px; font-weight:800; color:#0f172a;">${prod.rating}</span>
            <span style="color: #f59e0b; margin-left: 8px;"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></span>
            <p style="font-size: 13px; color: var(--text-dim);">Based on ${prod.reviewsCount} verified customer ratings</p>
          </div>
          <button class="btn-secondary" onclick="showToast('Review form opened for verified purchase')"><i class="fa-solid fa-pen"></i> Write a Review</button>
        </div>
        <div style="border-top: 1px solid var(--border-subtle); padding-top: 16px;">
          <div style="margin-bottom: 14px;">
            <div style="display:flex; justify-content:space-between; margin-bottom: 4px;">
              <strong>Rutuja Shinde</strong>
              <span style="color: #10b981; font-size:12px;"><i class="fa-solid fa-circle-check"></i> Verified Buyer</span>
            </div>
            <div style="color: #f59e0b; font-size: 12px; margin-bottom: 6px;"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            <p style="color: var(--text-muted); font-size: 13.5px;">Genuine product delivered sealed and fresh within 90 minutes. Packaging was very neat and temperature-controlled.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function selectPackSize(button, size) {
  document.querySelectorAll('.pack-btn').forEach(b => b.classList.remove('active'));
  button.classList.add('active');
}

function adjustDetailQty(amount) {
  const input = document.getElementById('detailQtyInput');
  if (!input) return;
  let val = parseInt(input.value) || 1;
  val = Math.max(1, Math.min(20, val + amount));
  input.value = val;
}

function addDetailToCart(productId) {
  const input = document.getElementById('detailQtyInput');
  const qty = input ? parseInt(input.value) || 1 : 1;
  const activePackBtn = document.querySelector('.pack-btn.active');
  const pack = activePackBtn ? activePackBtn.textContent : 'Standard Pack';
  
  const existing = cart.find(item => item.productId === productId && item.pack === pack);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({ productId, quantity: qty, pack });
  }

  updateCartBadge();
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  showToast(`Added ${qty}x ${prod.name} to cart`);
}

function switchProductTab(event, tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');
  
  event.currentTarget.classList.add('active');
  const target = document.getElementById(tabId);
  if (target) {
    target.style.display = 'block';
  }
}

// CART MANAGEMENT
function addToCart(productId) {
  const existing = cart.find(item => item.productId === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ productId, quantity: 1, pack: 'Standard Pack' });
  }
  updateCartBadge();
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  showToast(`Added ${prod.name} to your cart`);
}

function updateCartBadge() {
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const badge = document.getElementById('cartBadgeCount');
  if (badge) {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  }
  const mobileBadge = document.getElementById('mobileCartBadge');
  if (mobileBadge) {
    mobileBadge.textContent = totalCount;
    mobileBadge.style.display = totalCount > 0 ? 'flex' : 'none';
  }
}

// MOBILE DRAWER TOGGLE
function toggleMobileMenu() {
  const drawer = document.getElementById('mobileNavDrawer');
  const overlay = document.getElementById('mobileDrawerOverlay');
  if (drawer && overlay) {
    const isActive = drawer.classList.contains('active');
    if (isActive) {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    } else {
      drawer.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }
}

function updateCartItemQty(productId, amount) {
  const item = cart.find(i => i.productId === productId);
  if (!item) return;

  item.quantity += amount;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.productId !== productId);
    showToast('Item removed from cart');
  }
  updateCartBadge();
  renderCartView();
}

function renderCartView() {
  const container = document.getElementById('cartItemsList');
  const summaryBox = document.getElementById('cartSummaryContent');
  const countHeader = document.getElementById('cartTotalItemsHeader');
  if (!container || !summaryBox) return;

  const totalItems = cart.reduce((acc, i) => acc + i.quantity, 0);
  if (countHeader) countHeader.textContent = `Your Cart (${totalItems} items)`;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px;">
        <i class="fa-solid fa-cart-arrow-down" style="font-size: 50px; color: var(--text-dim); margin-bottom: 20px;"></i>
        <h3 style="font-size: 20px; margin-bottom: 8px;">Your shopping cart is empty</h3>
        <p style="color: var(--text-muted); margin-bottom: 24px;">Browse our wide range of medicines and daily healthcare essentials.</p>
        <button class="btn-primary" onclick="switchRoute('medicines')">Browse Medicines</button>
      </div>
    `;
    summaryBox.innerHTML = `
      <p style="color: var(--text-muted); text-align: center;">No items to calculate</p>
    `;
    return;
  }

  let subtotal = 0;

  container.innerHTML = cart.map(item => {
    const prod = PRODUCTS_DATA.find(p => p.id === item.productId);
    if (!prod) return '';
    const itemTotal = prod.price * item.quantity;
    subtotal += itemTotal;

    return `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <div class="cart-item-thumb">
            <img src="${prod.image}" alt="${prod.name}" />
          </div>
          <div>
            <h4 style="font-size: 15px; font-weight: 700; color: #0f172a;">${prod.name}</h4>
            <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 4px;">${item.pack} • ₹${prod.price} per unit</div>
            <span class="badge badge-green">In Stock</span>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 24px;">
          <div class="qty-control">
            <button class="qty-btn" onclick="updateCartItemQty('${prod.id}', -1)"><i class="fa-solid fa-minus"></i></button>
            <span class="qty-input" style="line-height:38px;">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartItemQty('${prod.id}', 1)"><i class="fa-solid fa-plus"></i></button>
          </div>
          <div style="font-size: 17px; font-weight: 800; color: #0f172a; min-width: 60px; text-align: right;">
            ₹${itemTotal}
          </div>
          <button style="background:none; border:none; color:var(--text-dim); cursor:pointer; font-size:16px;" onclick="updateCartItemQty('${prod.id}', -${item.quantity})" title="Remove">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  const shipping = subtotal > 500 ? 0 : 40;
  const grandTotal = subtotal + shipping;

  summaryBox.innerHTML = `
    <h3 style="font-size: 18px; font-weight: 800; color: #0f172a; margin-bottom: 20px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 14px;">Price Details</h3>
    <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 14px; color: var(--text-muted);">
      <span>Subtotal (${totalItems} items)</span>
      <span style="color: #0f172a; font-weight: 700;">₹${subtotal}</span>
    </div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 14px; color: var(--text-muted);">
      <span>Shipping Fee</span>
      <span style="color: ${shipping === 0 ? '#059669' : '#0f172a'}; font-weight: 700;">${shipping === 0 ? 'FREE' : '₹' + shipping}</span>
    </div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 14px; color: var(--text-muted);">
      <span>Estimated Taxes & Packaging</span>
      <span style="color: #059669; font-weight: 700;">₹0 (Included)</span>
    </div>

    <div style="display: flex; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--border-subtle); margin-bottom: 24px; font-size: 18px; font-weight: 800; color: #0f172a;">
      <span>Total Amount</span>
      <span style="color: var(--primary);">₹${grandTotal}</span>
    </div>

    <button class="btn-primary" style="width: 100%; padding: 14px;" onclick="switchRoute('checkout')">
      Proceed to Checkout <i class="fa-solid fa-arrow-right"></i>
    </button>
    <button class="btn-secondary" style="width: 100%; margin-top: 12px; padding: 12px;" onclick="switchRoute('medicines')">
      Continue Shopping
    </button>
  `;
}

// CHECKOUT & ORDER SUBMISSION
function placeOrder(e) {
  if (e) e.preventDefault();
  
  // Show toast notification
  showToast('Order #MED-88492 placed successfully!');
  
  // Switch to Track Order screen
  setTimeout(() => {
    switchRoute('track-order');
  }, 600);
}

// MODAL CONTROLS
function openUploadModal() {
  const modal = document.getElementById('prescriptionModal');
  if (modal) modal.classList.add('active');
}

function openAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) modal.classList.add('active');
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
}

function handlePrescriptionUpload(fileName) {
  const dropzone = document.getElementById('uploadDropzoneArea');
  if (dropzone) {
    dropzone.innerHTML = `
      <i class="fa-solid fa-file-circle-check" style="font-size: 38px; color: var(--primary); margin-bottom: 12px;"></i>
      <h4 style="font-size: 15px; color: #fff;">${fileName}</h4>
      <p style="font-size: 12px; color: var(--primary-light);">Prescription uploaded! Our pharmacist will review it in 5 mins.</p>
    `;
  }
  showToast('Prescription uploaded successfully!');
  setTimeout(() => {
    closeAllModals();
  }, 1800);
}

// GENERIC MEDICINE SUBSTITUTE FINDER FEATURE
const GENERIC_SUBSTITUTES_DATABASE = {
  'augmentin': {
    salt: 'Amoxicillin (500mg) + Clavulanic Acid (125mg)',
    genericName: 'Moxikind-CV 625 / Novamox-CV',
    manufacturer: 'Mankind Pharma Ltd (WHO-GMP & FDA Certified)',
    brandPrice: '₹204.50',
    genericPrice: '₹78.20',
    savings: 'Save 62%'
  },
  'pan-d': {
    salt: 'Pantoprazole (40mg) + Domperidone (30mg SR)',
    genericName: 'Pantocid-DSR / Panpure-DSR Generic',
    manufacturer: 'Alkem Laboratories (DCGI Approved)',
    brandPrice: '₹199.00',
    genericPrice: '₹64.50',
    savings: 'Save 68%'
  },
  'lipitor': {
    salt: 'Atorvastatin IP (10mg / 20mg)',
    genericName: 'Atorva 10 / Storvas Generic',
    manufacturer: 'Zydus Lifesciences',
    brandPrice: '₹145.00',
    genericPrice: '₹42.00',
    savings: 'Save 71%'
  },
  'calpol': {
    salt: 'Paracetamol IP (650mg / 500mg)',
    genericName: 'Paracetamol IP Pure Generic (Crocin/Dolo)',
    manufacturer: 'Cipla Health Care',
    brandPrice: '₹60.00',
    genericPrice: '₹22.50',
    savings: 'Save 62%'
  },
  'allegra': {
    salt: 'Fexofenadine HCl (120mg)',
    genericName: 'Fexova 120 / Histafree Generic',
    manufacturer: 'Mankind Pharma',
    brandPrice: '₹218.00',
    genericPrice: '₹72.00',
    savings: 'Save 67%'
  }
};

function findGenericSubstitute() {
  const input = document.getElementById('genericSearchInput');
  const query = (input?.value || '').toLowerCase().trim();
  const resultBox = document.getElementById('genericResultContainer');
  if (!resultBox) return;

  if (!query) {
    showToast('Please type a brand name like Augmentin, Pan-D, or Lipitor');
    return;
  }

  // Find exact match or partial match
  let foundKey = Object.keys(GENERIC_SUBSTITUTES_DATABASE).find(k => query.includes(k) || k.includes(query));
  
  if (!foundKey) {
    // Default fallback to closest match
    foundKey = 'augmentin';
  }

  const data = GENERIC_SUBSTITUTES_DATABASE[foundKey];
  document.getElementById('genericDrugSalt').textContent = data.salt;
  document.getElementById('genericName').textContent = data.genericName;
  document.getElementById('genericMfr').textContent = `Manufactured by: ${data.manufacturer}`;
  document.getElementById('genericSavings').textContent = data.savings;
  document.getElementById('genericPrice').textContent = data.genericPrice;
  document.getElementById('genericBrandPrice').textContent = `Brand: ${data.brandPrice}`;

  resultBox.style.display = 'block';
  showToast(`Found high-potency generic substitute! ${data.savings}`);
}

function setAndFindGeneric(brandName) {
  const input = document.getElementById('genericSearchInput');
  if (input) {
    input.value = brandName;
    findGenericSubstitute();
  }
}

// TOAST NOTIFIER
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check" style="color: var(--primary); font-size: 18px;"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
