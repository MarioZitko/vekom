# 🚀 Next.js 15 + TypeScript + ShadCN UI Template

This is a **Next.js 15** template built with **TypeScript** and **ShadCN UI**, optimized for a scalable, component-based frontend.

---

## 🔥 Features
✅ **Next.js 15 with App Router**  
✅ **TypeScript for type safety**  
✅ **ShadCN UI for flexible, customizable components**  
✅ **Tailwind CSS for styling**  
✅ **ESLint & Prettier for code quality**  
✅ **GitHub-ready repository structure**  

---

## 📂 Project Structure
```
my-template/
│── src/
│   ├── app/             # Next.js App Router (Replaces pages/)
│   │   ├── layout.tsx   # Global Layout (Required)
│   │   ├── page.tsx     # Home Page
│   │   ├── api/         # API Routes (If Needed)
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utility functions
│   ├── public/          # Static assets
│   ├── styles/          # Global styles
│   ├── types/           # TypeScript types/interfaces
│── .eslintrc.json       # ESLint config
│── .prettierrc.json     # Prettier config
│── tailwind.config.ts   # Tailwind config
│── tsconfig.json        # TypeScript config
│── next.config.ts       # Next.js config
│── package.json         # Dependencies
```

---

## 🛠️ Installation & Setup
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Run the Development Server**
```bash
npm run dev
```
Open **`http://localhost:3000`** to see your project.

---

## 🎨 Using ShadCN UI
ShadCN UI is a **customizable component library** built with Radix UI and Tailwind CSS.

### **1️⃣ Add New Components**
To add UI components, use:
```bash
npx shadcn-ui@latest add button card input
```
This will generate the components inside **`src/components/ui/`**.

---

## 🎯 Absolute Imports
✅ **Why?** No more `../../../components/Button.tsx` imports!

Now import like this:
```tsx
import Button from "@/components/ui/button";
```

---

## 🎨 Theming

### **1️⃣ Define Your Theme in `globals.css`**
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 47.4% 11.2%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
}

.dark {
  --background: 222.2 47.4% 11.2%;
  --foreground: 0 0% 100%;
}
```

### **2️⃣ Update Tailwind Config (`tailwind.config.ts`)**
```ts
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
```

---

## 🔥 Toast Notifications (Sonner)

```tsx
import { Toaster, toast } from "sonner";

<Toaster position="top-right" />;
toast.success("Action completed successfully!");
```
🎯 **Benefit:** Instant toast messages with no setup hassle.

---

## ✨ Linting & Formatting
### **ESLint (Code Quality)**
```bash
npm run lint
```
### **Prettier (Code Formatting)**
```bash
npx prettier --write .
```

---

## 🗺️ SEO & Sitemap Configuration
### **1️⃣ Metadata & OpenGraph**
Modify `layout.tsx` for global SEO:
```tsx
export const metadata = {
  title: "My Next.js 15 App",
  description: "A high-performance Next.js 15 website optimized for SEO.",
  openGraph: {
    title: "My Next.js 15 App",
    description: "Optimized for SEO & performance",
    url: "https://yourwebsite.com",
    images: [{ url: "https://yourwebsite.com/og-image.jpg" }],
  },
};
```

### **2️⃣ Modify Sitemap config**
Modify `next-sitemap.config.ts` to include your webpage URL:
```tsx
const config: IConfig = {
  siteUrl: 'https://yourwebsite.com', // Change this to your actual site URL
  generateRobotsTxt: true, // Generates robots.txt file
};
```

### **3️⃣ Sitemap Behavior**
Run:
```bash
npm run build && npm run postbuild
```
Now Next.js will generate:
- **`public/sitemap.xml`** → List of all pages for search engines.
- **`public/robots.txt`** → Controls what search engines can crawl.

---

## 📦 Building for Production
To generate a production build:
```bash
npm run build
```
Then, start the app:
```bash
npm start
```

---

## 🚀 Deployment
### **Vercel (Recommended)**
1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Run:
   ```bash
   vercel
   ```
3. Follow the prompts to deploy.

---

## 📜 License
This project is open-source under the **MIT License**.

---