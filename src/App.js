import React, { useState, useEffect } from "react";
import "./App.css";
import { products, categories } from "./data";
import {
  ArrowLeft,
  Search,
  X,
  SlidersHorizontal,
  ArrowUpDown,
  Home,
  Heart,
  ShoppingCart,
  User,
  Plus,
  Minus,
  Apple,
  Salad,
  Cookie,
  ShoppingBag,
  Nut,
  Droplet,
  Milk,
  Grape,
  Cherry,
  Trash2,
  Settings,
  MapPin,
  CreditCard,
  Bell,
  LogOut,
} from "lucide-react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    // Initialize Telegram WebApp
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();
    }
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      setCurrentPage("search");
    }
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage("category");
  };

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const toggleWishlist = (product) => {
    const isInWishlist = wishlist.find((item) => item.id === product.id);
    if (isInWishlist) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.categoryId === selectedCategory)
    : searchQuery
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            onSearch={handleSearch}
            onCategoryClick={handleCategoryClick}
            setCurrentPage={setCurrentPage}
          />
        );
      case "search":
      case "category":
        return (
          <SearchPage
            searchQuery={searchQuery}
            onSearchChange={handleSearch}
            onBack={() => {
              setCurrentPage("home");
              setSearchQuery("");
              setSelectedCategory(null);
            }}
            products={filteredProducts}
            addToCart={addToCart}
            toggleWishlist={toggleWishlist}
            isInWishlist={isInWishlist}
          />
        );
      case "wishlist":
        return (
          <WishlistPage
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
            addToCart={addToCart}
            setCurrentPage={setCurrentPage}
          />
        );
      case "cart":
        return (
          <CartPage
            cart={cart}
            updateCartQuantity={updateCartQuantity}
            removeFromCart={removeFromCart}
            setCurrentPage={setCurrentPage}
          />
        );
      case "profile":
        return <ProfilePage setCurrentPage={setCurrentPage} />;
      default:
        return (
          <HomePage
            onSearch={handleSearch}
            onCategoryClick={handleCategoryClick}
            setCurrentPage={setCurrentPage}
          />
        );
    }
  };

  return (
    <div className="app">
      {renderPage()}
      <BottomNav
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartCount={cart.length}
        wishlistCount={wishlist.length}
      />
    </div>
  );
}

function HomePage({ onSearch, onCategoryClick, setCurrentPage }) {
  const iconMap = {
    Apple: Apple,
    Salad: Salad,
    Cookie: Cookie,
    ShoppingBag: ShoppingBag,
    Nut: Nut,
    Droplet: Droplet,
    Milk: Milk,
    Grape: Grape,
    Cherry: Cherry,
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="home-page">
      <Header onSearch={onSearch} isHomePage={true} />

      <div className="promo-banner">
        <div className="promo-content">
          <h2>30%</h2>
          <p>
            Fresh groceries
            <br />
            big savings daily
          </p>
        </div>
        <div className="promo-icon">💰</div>
      </div>

      <h3 className="section-title">Your might like these</h3>

      <div className="categories-grid">
        {categories.map((category) => {
          const IconComponent = iconMap[category.icon];
          return (
            <div
              key={category.id}
              className="category-card"
              onClick={() => {
                onCategoryClick(category.id);
                setCurrentPage("category");
              }}
            >
              <div className="category-icon-wrapper">
                {IconComponent && (
                  <IconComponent size={32} color="#10b981" strokeWidth={2} />
                )}
              </div>
              <div className="category-name">{category.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SearchPage({
  searchQuery,
  onSearchChange,
  onBack,
  products,
  addToCart,
  toggleWishlist,
  isInWishlist,
}) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="search-page">
      <Header
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        onBack={onBack}
        isHomePage={false}
      />

      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className={`product-card ${product.featured ? "featured" : ""}`}
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <div className="product-info">
              <div className="product-title">{product.name}</div>
              <div className="product-description">{product.description}</div>

              <div className="product-meta">
                <span className="product-weight">{product.weight}</span>
                <span className="product-discount">{product.discount}</span>
              </div>
            </div>

            <div className="product-price-section">
              <div className="product-prices">
                <div className="product-price">${product.price.toFixed(2)}</div>
                <div className="product-old-price">
                  ${product.oldPrice.toFixed(2)}
                </div>
              </div>

              <div className="product-actions">
                <button
                  className={`wishlist-button ${
                    isInWishlist(product.id) ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product);
                  }}
                >
                  <Heart
                    size={20}
                    fill={isInWishlist(product.id) ? "#ef4444" : "none"}
                    color={isInWishlist(product.id) ? "#ef4444" : "#9ca3af"}
                    strokeWidth={2}
                  />
                </button>
                <button
                  className="add-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                >
                  <Plus size={24} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <BuyNowFooter
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

function WishlistPage({ wishlist, toggleWishlist, addToCart, setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="wishlist-page">
      <div className="page-header">
        <button className="back-button" onClick={() => setCurrentPage("home")}>
          <ArrowLeft size={20} />
        </button>
        <h1 className="page-title">My Wishlist</h1>
        <div style={{ width: "40px" }}></div>
      </div>

      {wishlist.length === 0 ? (
        <div className="empty-state">
          <Heart size={64} color="#e5e7eb" strokeWidth={1.5} />
          <h3>Your wishlist is empty</h3>
          <p>Add products you love to your wishlist</p>
          <button
            className="primary-button"
            onClick={() => setCurrentPage("home")}
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="product-list">
          {wishlist.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />

              <div className="product-info">
                <div className="product-title">{product.name}</div>
                <div className="product-description">{product.description}</div>

                <div className="product-meta">
                  <span className="product-weight">{product.weight}</span>
                  <span className="product-discount">{product.discount}</span>
                </div>
              </div>

              <div className="product-price-section">
                <div className="product-prices">
                  <div className="product-price">
                    ${product.price.toFixed(2)}
                  </div>
                  <div className="product-old-price">
                    ${product.oldPrice.toFixed(2)}
                  </div>
                </div>

                <div className="product-actions">
                  <button
                    className="wishlist-button active"
                    onClick={() => toggleWishlist(product)}
                  >
                    <Heart
                      size={20}
                      fill="#ef4444"
                      color="#ef4444"
                      strokeWidth={2}
                    />
                  </button>
                  <button
                    className="add-button"
                    onClick={() => addToCart(product)}
                  >
                    <Plus size={24} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CartPage({
  cart,
  updateCartQuantity,
  removeFromCart,
  setCurrentPage,
}) {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = cart.reduce(
    (sum, item) => sum + (item.oldPrice - item.price) * item.quantity,
    0
  );
  const total = subtotal;
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="cart-page">
      <div className="page-header">
        <button className="back-button" onClick={() => setCurrentPage("home")}>
          <ArrowLeft size={20} />
        </button>
        <h1 className="page-title">Shopping Cart</h1>
        <div style={{ width: "40px" }}></div>
      </div>

      {cart.length === 0 ? (
        <div className="empty-state">
          <ShoppingCart size={64} color="#e5e7eb" strokeWidth={1.5} />
          <h3>Your cart is empty</h3>
          <p>Add products to your cart to continue</p>
          <button
            className="primary-button"
            onClick={() => setCurrentPage("home")}
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-info">
                  <div className="cart-item-title">{item.name}</div>
                  <div className="cart-item-weight">{item.weight}</div>
                  <div className="cart-item-price">
                    ${item.price.toFixed(2)}
                  </div>
                </div>

                <div className="cart-item-actions">
                  <button
                    className="cart-delete-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 size={18} />
                  </button>

                  <div className="cart-quantity-control">
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        updateCartQuantity(item.id, item.quantity - 1)
                      }
                    >
                      <Minus size={16} strokeWidth={2.5} />
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        updateCartQuantity(item.id, item.quantity + 1)
                      }
                    >
                      <Plus size={16} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row discount">
              <span>Discount</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

function ProfilePage({ setCurrentPage }) {
  const menuItems = [
    { icon: User, label: "Edit Profile", color: "#10b981" },
    { icon: MapPin, label: "Delivery Address", color: "#3b82f6" },
    { icon: CreditCard, label: "Payment Methods", color: "#f59e0b" },
    { icon: ShoppingBag, label: "Order History", color: "#8b5cf6" },
    { icon: Bell, label: "Notifications", color: "#ec4899" },
    { icon: Settings, label: "Settings", color: "#6b7280" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="profile-page">
      <div className="page-header">
        <button className="back-button" onClick={() => setCurrentPage("home")}>
          <ArrowLeft size={20} />
        </button>
        <h1 className="page-title">Profile</h1>
        <div style={{ width: "40px" }}></div>
      </div>

      <div className="profile-card">
        <div className="profile-avatar">
          <User size={48} color="#10b981" strokeWidth={1.5} />
        </div>
        <h2 className="profile-name">John Doe</h2>
        <p className="profile-email">john.doe@example.com</p>
        <p className="profile-phone">+1 234 567 8900</p>
      </div>

      <div className="profile-menu">
        {menuItems.map((item, index) => (
          <button key={index} className="menu-item">
            <div
              className="menu-item-icon"
              style={{ backgroundColor: `${item.color}15` }}
            >
              <item.icon size={22} color={item.color} strokeWidth={2} />
            </div>
            <span className="menu-item-label">{item.label}</span>
            <ArrowLeft
              size={20}
              color="#9ca3af"
              style={{ transform: "rotate(180deg)" }}
            />
          </button>
        ))}
      </div>

      <button className="logout-button">
        <LogOut size={20} strokeWidth={2} />
        <span>Logout</span>
      </button>
    </div>
  );
}

function Header({
  searchQuery = "",
  onSearchChange,
  onBack,
  isHomePage,
  onSearch,
}) {
  const [localQuery, setLocalQuery] = useState(searchQuery);

  const handleSearchClick = () => {
    if (isHomePage && onSearch) {
      onSearch("Fresh Organic Apple");
    }
  };

  return (
    <div className="header">
      {!isHomePage && (
        <button className="back-button" onClick={onBack}>
          <ArrowLeft size={20} />
        </button>
      )}

      <div className="search-bar" onClick={handleSearchClick}>
        <Search size={20} className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder={
            isHomePage ? "Fresh Organic Apple" : searchQuery || "Search..."
          }
          value={isHomePage ? "" : localQuery}
          onChange={(e) => {
            setLocalQuery(e.target.value);
            if (onSearchChange) {
              onSearchChange(e.target.value);
            }
          }}
          readOnly={isHomePage}
        />
        {!isHomePage && localQuery && (
          <button
            className="clear-button"
            onClick={(e) => {
              e.stopPropagation();
              setLocalQuery("");
              if (onSearchChange) {
                onSearchChange("");
              }
            }}
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

function BuyNowFooter({ product, onClose }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="buy-now-footer">
      <div className="quantity-control">
        <button
          className="quantity-button minus"
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
        >
          <Minus size={18} strokeWidth={2.5} />
        </button>
        <span className="quantity-text">{quantity} Kg</span>
        <button
          className="quantity-button plus"
          onClick={() => setQuantity(quantity + 1)}
        >
          <Plus size={18} strokeWidth={2.5} />
        </button>
      </div>

      <span className="product-discount-footer">{product.discount}</span>

      <button className="buy-now-button">Buy Now</button>
    </div>
  );
}

function BottomNav({ currentPage, setCurrentPage, cartCount, wishlistCount }) {
  return (
    <div className="bottom-nav">
      <button
        className={`nav-item ${currentPage === "home" ? "active" : ""}`}
        onClick={() => setCurrentPage("home")}
      >
        <Home size={24} className="nav-icon" strokeWidth={2} />
        <span className="nav-label">Home</span>
      </button>

      <button
        className={`nav-item ${currentPage === "wishlist" ? "active" : ""}`}
        onClick={() => setCurrentPage("wishlist")}
      >
        <div className="nav-icon-wrapper">
          <Heart size={24} className="nav-icon" strokeWidth={2} />
          {wishlistCount > 0 && (
            <span className="nav-badge">{wishlistCount}</span>
          )}
        </div>
        <span className="nav-label">Wishlist</span>
      </button>

      <button
        className={`nav-item ${currentPage === "cart" ? "active" : ""}`}
        onClick={() => setCurrentPage("cart")}
      >
        <div className="nav-icon-wrapper">
          <ShoppingCart size={24} className="nav-icon" strokeWidth={2} />
          {cartCount > 0 && <span className="nav-badge">{cartCount}</span>}
        </div>
        <span className="nav-label">Cart</span>
      </button>

      <button
        className={`nav-item ${currentPage === "profile" ? "active" : ""}`}
        onClick={() => setCurrentPage("profile")}
      >
        <User size={24} className="nav-icon" strokeWidth={2} />
        <span className="nav-label">Profile</span>
      </button>
    </div>
  );
}

export default App;
