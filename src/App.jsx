import React, { useState } from "react";
import {
  ShoppingCart,
  Menu,
  X,
  MapPin,
  Sun,
  Moon,
  Plus,
  Minus,
  Trash2,
} from "lucide-react";

const JollofRepublic = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [deliveryMethod, setDeliveryMethod] = useState("delivery");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = {
    "Jollof Rice": [
      {
        id: 1,
        name: "Classic Jollof",
        price: 2500,
        image:
          "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&h=600&fit=crop",
        description: "The OG. Smoky, spicy, perfect.",
      },
      {
        id: 2,
        name: "Party Jollof",
        price: 3000,
        image:
          "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=800&h=600&fit=crop",
        description: "Extra smoky bottom pot vibes",
      },
      {
        id: 3,
        name: "Seafood Jollof",
        price: 4500,
        image:
          "https://images.unsplash.com/photo-1633337474564-1d9478ca4e2e?w=800&h=600&fit=crop",
        description: "Loaded with prawns & fish",
      },
    ],
    Suya: [
      {
        id: 4,
        name: "Beef Suya",
        price: 2000,
        image:
          "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&h=600&fit=crop",
        description: "Spicy grilled perfection",
      },
      {
        id: 5,
        name: "Chicken Suya",
        price: 1800,
        image:
          "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop",
        description: "Tender & flavorful",
      },
      {
        id: 6,
        name: "Asun (Goat)",
        price: 3500,
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop",
        description: "Pepper goat meat, no cap",
      },
    ],
    "Add-ons": [
      {
        id: 7,
        name: "Plantain",
        price: 500,
        image:
          "https://images.unsplash.com/photo-1595475207225-428b7f6f4d63?w=800&h=600&fit=crop",
        description: "Sweet fried goodness",
      },
      {
        id: 8,
        name: "Coleslaw",
        price: 300,
        image:
          "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800&h=600&fit=crop",
        description: "Cool down the heat",
      },
      {
        id: 9,
        name: "Moi Moi",
        price: 800,
        image:
          "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop",
        description: "Steamed bean pudding",
      },
    ],
    Drinks: [
      {
        id: 10,
        name: "Chapman",
        price: 1000,
        image:
          "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=600&fit=crop",
        description: "The party starter",
      },
      {
        id: 11,
        name: "Zobo",
        price: 800,
        image:
          "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=600&fit=crop",
        description: "Hibiscus refreshment",
      },
      {
        id: 12,
        name: "Palm Wine",
        price: 1500,
        image:
          "https://images.unsplash.com/photo-1481671703460-040cb8a2d909?w=800&h=600&fit=crop",
        description: "Natural & authentic",
      },
    ],
  };

  const addToCart = (item) => {
    const existingItem = cart.find((i) => i.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, change) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity + change;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const getAllMenuItems = () => {
    return Object.values(menuItems).flat();
  };

  const getFilteredItems = () => {
    if (selectedCategory === "all") return getAllMenuItems();
    return menuItems[selectedCategory] || [];
  };

  const bgColor = darkMode ? "bg-[#0d0d0d]" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-[#0d0d0d]";
  const cardBg = darkMode ? "bg-[#1a1a1a]" : "bg-white";

  return (
    <div
      className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-300`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 ${
          darkMode ? "bg-[#1a1a1a]" : "bg-white"
        } border-b-4 border-[#7a0f00] shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setCurrentPage("home")}
            >
              <span className="text-3xl sm:text-4xl font-black">
                <span className="text-[#7a0f00]">JOLLOF</span>
                <span className="text-[#FFBA08]"> REPUBLIC</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setCurrentPage("home")}
                className={`font-bold hover:text-[#e55900] transition ${
                  currentPage === "home"
                    ? "text-[#e55900]"
                    : darkMode
                    ? "text-white"
                    : "text-[#0d0d0d]"
                }`}
              >
                HOME
              </button>
              <button
                onClick={() => setCurrentPage("menu")}
                className={`font-bold hover:text-[#e55900] transition ${
                  currentPage === "menu"
                    ? "text-[#e55900]"
                    : darkMode
                    ? "text-white"
                    : "text-[#0d0d0d]"
                }`}
              >
                MENU
              </button>
              <button
                onClick={() => setCurrentPage("about")}
                className={`font-bold hover:text-[#e55900] transition ${
                  currentPage === "about"
                    ? "text-[#e55900]"
                    : darkMode
                    ? "text-white"
                    : "text-[#0d0d0d]"
                }`}
              >
                ABOUT
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-[#1c9612] hover:bg-opacity-20 transition"
              >
                {darkMode ? (
                  <Sun className="text-[#FFBA08]" />
                ) : (
                  <Moon className="text-[#0d0d0d]" />
                )}
              </button>
              <button
                onClick={() => setShowCart(!showCart)}
                className="relative p-2 bg-[#7a0f00] text-white rounded-full hover:bg-[#e55900] transition"
              >
                <ShoppingCart />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#FFBA08] text-[#0d0d0d] rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button onClick={() => setDarkMode(!darkMode)} className="p-2">
                {darkMode ? (
                  <Sun className="text-[#FFBA08]" size={20} />
                ) : (
                  <Moon size={20} className="text-[#0d0d0d]" />
                )}
              </button>
              <button
                onClick={() => setShowCart(!showCart)}
                className="relative p-2"
              >
                <ShoppingCart
                  size={20}
                  className={darkMode ? "text-white" : "text-[#0d0d0d]"}
                />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FFBA08] text-[#0d0d0d] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cart.length}
                  </span>
                )}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? (
                  <X
                    size={24}
                    className={darkMode ? "text-white" : "text-[#0d0d0d]"}
                  />
                ) : (
                  <Menu
                    size={24}
                    className={darkMode ? "text-white" : "text-[#0d0d0d]"}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden ${
              darkMode ? "bg-[#1a1a1a]" : "bg-gray-50"
            } border-t-2 border-[#7a0f00]`}
          >
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => {
                  setCurrentPage("home");
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left font-bold py-2 hover:text-[#e55900] transition ${
                  darkMode ? "text-white" : "text-[#0d0d0d]"
                }`}
              >
                HOME
              </button>
              <button
                onClick={() => {
                  setCurrentPage("menu");
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left font-bold py-2 hover:text-[#e55900] transition ${
                  darkMode ? "text-white" : "text-[#0d0d0d]"
                }`}
              >
                MENU
              </button>
              <button
                onClick={() => {
                  setCurrentPage("about");
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left font-bold py-2 hover:text-[#e55900] transition ${
                  darkMode ? "text-white" : "text-[#0d0d0d]"
                }`}
              >
                ABOUT
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setShowCart(false)}
          ></div>
          <div
            className={`relative w-full sm:w-96 h-full ${cardBg} shadow-2xl overflow-y-auto`}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-black">YOUR ORDER</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="p-2 hover:bg-[#7a0f00] hover:text-white rounded-full transition"
                >
                  <X />
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="text-center text-gray-500 py-8">
                  Cart is empty. Add some vibes! 🔥
                </p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className={`p-4 rounded-lg ${
                          darkMode ? "bg-[#0d0d0d]" : "bg-gray-50"
                        } border-2 border-[#1c9612]`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <p className="font-bold">{item.name}</p>
                              <p className="text-sm text-[#1c9612]">
                                ₦{item.price.toLocaleString()}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#7a0f00] hover:text-[#e55900]"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 bg-[#7a0f00] text-white rounded-full flex items-center justify-center hover:bg-[#e55900]"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="font-bold text-lg">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 bg-[#1c9612] text-white rounded-full flex items-center justify-center hover:bg-[#e55900]"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t-2 border-[#FFBA08] pt-4 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-black">TOTAL</span>
                      <span className="text-2xl font-black text-[#1c9612]">
                        ₦{getTotal().toLocaleString()}
                      </span>
                    </div>

                    <div className="mb-4">
                      <label className="block font-bold mb-2">
                        Delivery Method
                      </label>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setDeliveryMethod("delivery")}
                          className={`flex-1 py-3 rounded-lg font-bold transition ${
                            deliveryMethod === "delivery"
                              ? "bg-[#7a0f00] text-white"
                              : "bg-gray-200 text-[#0d0d0d]"
                          }`}
                        >
                          <MapPin className="inline mr-2" size={18} />
                          DELIVERY
                        </button>
                        <button
                          onClick={() => setDeliveryMethod("pickup")}
                          className={`flex-1 py-3 rounded-lg font-bold transition ${
                            deliveryMethod === "pickup"
                              ? "bg-[#7a0f00] text-white"
                              : "bg-gray-200 text-[#0d0d0d]"
                          }`}
                        >
                          PICKUP
                        </button>
                      </div>
                    </div>

                    <button className="w-full bg-[#FFBA08] text-[#0d0d0d] py-4 rounded-lg font-black text-lg hover:bg-[#e55900] hover:text-white transition transform hover:scale-105">
                      CHECKOUT NOW 🔥
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="pt-20">
        {currentPage === "home" && (
          <>
            {/* Hero Section */}
            <section
              className="relative min-h-screen flex items-center justify-center overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${
                  darkMode ? "#0d0d0d" : "#7a0f00"
                } 0%, ${darkMode ? "#1a1a1a" : "#e55900"} 100%)`,
              }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute text-9xl top-10 left-10 animate-pulse">
                  🍚
                </div>
                <div className="absolute text-9xl bottom-20 right-10 animate-pulse delay-100">
                  🔥
                </div>
                <div className="absolute text-9xl top-1/2 left-1/4 animate-pulse delay-200">
                  🥘
                </div>
              </div>

              <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
                <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black text-white mb-6 animate-bounce">
                  JOLLOF
                  <br />
                  REPUBLIC
                </h1>
                <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#FFBA08] mb-4">
                  Bold Flavour with Real Vibes.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-white mb-8 max-w-3xl mx-auto">
                  Unapologetically African street food. Loud colors, chunky
                  fonts, sizzling spice. For young people who love vibes, memes,
                  and food trucks. 🔥
                </p>
                <button
                  onClick={() => setCurrentPage("menu")}
                  className="bg-[#FFBA08] text-[#0d0d0d] px-8 sm:px-12 py-4 sm:py-6 rounded-full text-xl sm:text-2xl font-black hover:bg-[#1c9612] hover:text-white transition transform hover:scale-110 shadow-2xl"
                >
                  ORDER NOW 🍽️
                </button>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-black text-center mb-12 text-[#7a0f00]">
                  WHY WE'RE DIFFERENT 💯
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {[
                    {
                      emoji: "🔥",
                      title: "AUTHENTIC VIBES",
                      desc: "Real Naija flavors, no cap",
                    },
                    {
                      emoji: "⚡",
                      title: "FAST DELIVERY",
                      desc: "Hot food, faster than your crush's reply",
                    },
                    {
                      emoji: "🎉",
                      title: "PARTY JOLLOF",
                      desc: "That smoky bottom pot energy",
                    },
                    {
                      emoji: "💰",
                      title: "STUDENT FRIENDLY",
                      desc: "Prices that won't break the bank",
                    },
                    {
                      emoji: "📱",
                      title: "EASY ORDERING",
                      desc: "Quick checkout, no stress",
                    },
                    {
                      emoji: "🌶️",
                      title: "SPICE LEVELS",
                      desc: 'From mild to "are you okay?"',
                    },
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className={`${cardBg} p-6 rounded-2xl border-4 border-[#1c9612] hover:border-[#FFBA08] transition transform hover:scale-105 shadow-lg`}
                    >
                      <div className="text-6xl mb-4">{feature.emoji}</div>
                      <h3 className="text-xl font-black mb-2 text-[#7a0f00]">
                        {feature.title}
                      </h3>
                      <p className="text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {currentPage === "menu" && (
          <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl sm:text-6xl font-black text-center mb-8 text-[#7a0f00]">
                OUR MENU 🍽️
              </h2>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold transition transform hover:scale-105 ${
                    selectedCategory === "all"
                      ? "bg-[#7a0f00] text-white"
                      : darkMode
                      ? "bg-[#2a2a2a] text-white border-2 border-[#7a0f00]"
                      : "bg-white text-[#0d0d0d] border-2 border-[#7a0f00]"
                  }`}
                >
                  ALL
                </button>
                {Object.keys(menuItems).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold transition transform hover:scale-105 ${
                      selectedCategory === category
                        ? "bg-[#7a0f00] text-white"
                        : darkMode
                        ? "bg-[#2a2a2a] text-white border-2 border-[#7a0f00]"
                        : "bg-white text-[#0d0d0d] border-2 border-[#7a0f00]"
                    }`}
                  >
                    {category.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Menu Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {getFilteredItems().map((item) => (
                  <div
                    key={item.id}
                    className={`${cardBg} rounded-2xl overflow-hidden border-4 border-[#1c9612] hover:border-[#FFBA08] transition transform hover:scale-105 shadow-xl group`}
                  >
                    <div className="h-48 sm:h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-black mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl sm:text-3xl font-black text-[#1c9612]">
                          ₦{item.price.toLocaleString()}
                        </span>
                        <button
                          onClick={() => addToCart(item)}
                          className="bg-[#FFBA08] text-[#0d0d0d] px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold hover:bg-[#7a0f00] hover:text-white transition transform hover:scale-110"
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {currentPage === "about" && (
          <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-6xl font-black text-center mb-12 text-[#7a0f00]">
                ABOUT US 🔥
              </h2>

              <div
                className={`${cardBg} rounded-3xl p-8 sm:p-12 border-4 border-[#FFBA08] shadow-2xl`}
              >
                <div className="text-center mb-8">
                  <div className="text-7xl sm:text-9xl mb-6">🍚🔥</div>
                  <h3 className="text-3xl sm:text-4xl font-black mb-4 text-[#e55900]">
                    THE JOLLOF REPUBLIC STORY
                  </h3>
                </div>

                <div className="space-y-6 text-base sm:text-lg leading-relaxed">
                  <p>
                    We're not just a food brand. We're a{" "}
                    <span className="font-black text-[#7a0f00]">MOVEMENT</span>.
                    A bold, loud, and unapologetically African street food
                    experience that celebrates Naija pop culture, slang, energy,
                    and chaos.
                  </p>

                  <p>
                    Think{" "}
                    <span className="font-black text-[#1c9612]">
                      loud colors
                    </span>
                    ,{" "}
                    <span className="font-black text-[#e55900]">
                      chunky fonts
                    </span>
                    ,{" "}
                    <span className="font-black text-[#FFBA08]">
                      sizzling spice
                    </span>
                    , and{" "}
                    <span className="font-black text-[#7a0f00]">movement</span>.
                    We're here to make food fun and cultural.
                  </p>

                  <p>
                    For young people who love{" "}
                    <span className="font-black">vibes 🎵</span>,{" "}
                    <span className="font-black">memes 😂</span>, and{" "}
                    <span className="font-black">food trucks 🚚</span>.
                  </p>

                  <div className="bg-gradient-to-r from-[#7a0f00] to-[#e55900] p-6 sm:p-8 rounded-2xl text-white mt-8">
                    <p className="text-xl sm:text-2xl font-black text-center">
                      "Bold Flavour with Real Vibes." 🔥
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
                    <div className="bg-[#1c9612] p-4 sm:p-6 rounded-xl text-white">
                      <h4 className="font-black text-lg sm:text-xl mb-2">
                        OUR MISSION
                      </h4>
                      <p className="text-sm sm:text-base">
                        Bring authentic African street food to your doorstep
                        with speed, spice, and style.
                      </p>
                    </div>
                    <div className="bg-[#FFBA08] p-4 sm:p-6 rounded-xl text-[#0d0d0d]">
                      <h4 className="font-black text-lg sm:text-xl mb-2">
                        OUR VIBE
                      </h4>
                      <p className="text-sm sm:text-base">
                        Loud, proud, and full of flavor. No boring food, only
                        bangers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer
        className={`${
          darkMode ? "bg-[#0d0d0d]" : "bg-gray-900"
        } text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t-4 border-[#FFBA08]`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-black mb-4">
            <span className="text-[#7a0f00]">JOLLOF</span>{" "}
            <span className="text-[#FFBA08]">REPUBLIC</span>
          </h3>
          <p className="text-base sm:text-lg mb-4">
            Bold Flavour with Real Vibes. 🔥
          </p>
          <p className="text-xs sm:text-sm text-gray-400">
            © 2024 Jollof Republic. All rights reserved. Made with ❤️ and 🌶️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default JollofRepublic;
