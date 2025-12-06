# 🍚 Jollof Republic - Bold Flavour with Real Vibes

A bold, loud, and unapologetically African street food ordering website. Built with React, Vite, and Tailwind CSS.

![Jollof Republic](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)

## 🔥 About

Jollof Republic celebrates Naija pop culture, slang, energy, and chaos through authentic African street food. Think loud colors, chunky fonts, sizzling spice, and movement.

For young people who love vibes 🎵, memes 😂, and food trucks 🚚.

## ✨ Features

- 🏠 **Landing Page** - Eye-catching hero section with bold branding
- 🍽️ **Interactive Menu** - Browse Jollof Rice, Suya, Add-ons, and Drinks
- 🛒 **Shopping Cart** - Add items, adjust quantities, and checkout
- 📦 **Delivery Options** - Toggle between delivery and pickup
- 🌓 **Dark Mode** - Light and dark theme support
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast loading
- 🎨 **Vibrant Design** - Uses authentic Nigerian color palette

## 🎨 Color Palette

- **Tomato Red**: `#7a0f00` - Primary brand color
- **Spicy Orange**: `#e55900` - Accent and hover states
- **Green Leaf**: `#1c9612` - Success and highlights
- **Golden Yellow**: `#FFBA08` - Call-to-action buttons
- **Charcoal Black**: `#0d0d0d` - Dark mode background

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/jollof-republic.git
cd jollof-republic
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**
   Navigate to `http://localhost:5173/`

## 📦 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI

```bash
npm install -g vercel
```

2. Deploy

```bash
vercel
```

### Deploy to GitHub Pages

1. Update `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: "/jollof-republic/",
});
```

2. Install gh-pages

```bash
npm install --save-dev gh-pages
```

3. Add to `package.json` scripts:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

4. Deploy

```bash
npm run deploy
```

### Deploy to Netlify

1. Build the project

```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

## 🛠️ Built With

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## 📱 Pages

- **Home** - Hero section with brand messaging and features
- **Menu** - Interactive menu with category filtering
- **About** - Brand story and mission
- **Cart** - Shopping cart with checkout flow

## 🎯 Key Features Implemented

✅ Homepage with hero section and "Order Now" CTA  
✅ Interactive menu with categories (Jollof Rice, Suya, Add-ons, Drinks)  
✅ Hover effects and price animations  
✅ Add to cart functionality  
✅ Quantity controls (increase/decrease)  
✅ Remove items from cart  
✅ Order total calculation  
✅ Delivery/Pickup toggle  
✅ Light and dark mode  
✅ Fully responsive design  
✅ Mobile navigation menu  
✅ About Us page

## 🎨 Design Philosophy

The design embraces:

- **Bold Typography** - Chunky, impactful fonts
- **Vibrant Colors** - Authentic Nigerian color palette
- **Cultural Elements** - Emojis and street food vibes
- **Energy & Movement** - Smooth animations and transitions
- **Youth-Focused** - Modern, meme-friendly aesthetic

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Hamzat Muhsin**

- GitHub: (https://github.com/Dollypee18)

## 🙏 Acknowledgments

- Anthropic's Claude for development assistance
- Nigerian street food culture for the inspiration

---

Made with ❤️ and 🌶️

**"Bold Flavour with Real Vibes."** 🔥
