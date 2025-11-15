# Next.js Quick Reference - Your Project

## 📋 At a Glance: What Each File Does

### Core Files

| File | Purpose | Example |
|------|--------|---------|
| `app/layout.tsx` | Wraps ALL pages | Sets fonts, theme, global components |
| `app/page.tsx` | Homepage (`/`) | Your landing page with hero section |
| `app/globals.css` | Global styles | Colors, fonts that apply everywhere |

### Route Files (Create URLs)

| File | Creates URL | What It Shows |
|------|-------------|---------------|
| `app/page.tsx` | `/` | Homepage |
| `app/about/page.tsx` | `/about` | About page |
| `app/contact/page.tsx` | `/contact` | Contact page |
| `app/work/page.tsx` | `/work` | Work listing |
| `app/work/cdp/page.tsx` | `/work/cdp` | Specific project |

### Component Files (Reusable Pieces)

| File | Used Where | Purpose |
|------|------------|---------|
| `components/Navigation.tsx` | Every page | Menu bar, theme toggle |
| `components/Footer.tsx` | Every page | Footer with links |
| `components/StatsCounter.tsx` | Homepage | Animated stats display |

---

## 🔗 Real Examples from Your Code

### Example 1: How Homepage Uses Components

**File:** `app/page.tsx`

```tsx
// Step 1: Import components (get them from the toolbox)
import Navigation from "@/components/Navigation";
import StatsCounter from "@/components/StatsCounter";
import Footer from "@/components/Footer";

// Step 2: Use them in your page
export default function Home() {
  return (
    <div>
      <Navigation />        ← Navigation bar appears here
      <main>...</main>      ← Your content here
      <StatsCounter />     ← Stats appear here
      <Footer />           ← Footer appears here
    </div>
  )
}
```

**What happens:**
1. Browser requests `/`
2. Next.js finds `app/page.tsx`
3. Page imports Navigation, StatsCounter, Footer
4. All pieces render together
5. User sees complete homepage

---

### Example 2: How Layout Wraps Pages

**File:** `app/layout.tsx`

```tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>
          <SkipLink />
          <PageTracker />
          
          {children}  ← THIS is where each page gets inserted!
          
          <AchievementSystem />
        </ThemeProvider>
      </body>
    </html>
  )
}
```

**What happens:**
- When you visit `/` → `{children}` = `app/page.tsx`
- When you visit `/contact` → `{children}` = `app/contact/page.tsx`
- Same wrapper, different content!

---

### Example 3: How Contact Page Reuses Components

**File:** `app/contact/page.tsx`

```tsx
import Navigation from "@/components/Navigation";  ← Same component!
import Footer from "@/components/Footer";          ← Same component!

export default function ContactPage() {
  return (
    <div>
      <Navigation />  ← Same menu bar as homepage
      <section>
        Contact form content here
      </section>
      <Footer />      ← Same footer as homepage
    </div>
  )
}
```

**Key point:** Navigation and Footer are written once, used everywhere!

---

## 🎯 The Import System Explained

### What `@/` Means

```tsx
// ❌ Without @/ (confusing paths)
import Navigation from "../../../components/Navigation";

// ✅ With @/ (clean and simple)
import Navigation from "@/components/Navigation";
```

**`@/` = "Start from project root"**

### Import Paths in Your Project

```tsx
// From app/ folder
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// From components/ folder
import { useTheme } from "next-themes";  // External package
import Link from "next/link";            // Next.js built-in
```

---

## 🏗️ Folder Structure Rules

### Rule 1: `page.tsx` = Creates a Route

```
app/
└── about/
    └── page.tsx    ← Creates /about URL
```

### Rule 2: Folders Can Nest

```
app/
└── work/
    ├── page.tsx           ← Creates /work URL
    └── cdp/
        └── page.tsx       ← Creates /work/cdp URL
```

### Rule 3: `layout.tsx` = Wraps Child Routes

```
app/
├── layout.tsx          ← Wraps ALL pages
└── work/
    ├── layout.tsx      ← Would wrap only /work/* pages
    └── cdp/
        └── page.tsx
```

*(You only have one layout.tsx at the root, which is fine!)*

---

## 🔄 Data Flow Examples

### Static Data (Your Current Setup)

```tsx
// In app/page.tsx
const stats = [
  { value: 6, suffix: "+", label: "Products Shipped" },
  { value: 10000, suffix: "+", label: "Users Impacted" },
];

// Pass to component
<StatsCounter stats={stats} />
```

**Flow:** Data defined in page → Passed to component → Displayed

### If You Had Backend (Future)

```tsx
// In app/page.tsx (Frontend)
const response = await fetch('/api/stats');
const stats = await response.json();
<StatsCounter stats={stats} />

// In app/api/stats/route.ts (Backend)
export async function GET() {
  const stats = await getStatsFromDatabase();
  return Response.json(stats);
}
```

**Flow:** Frontend requests → Backend processes → Returns data → Frontend displays

---

## 🎨 "use client" Explained

### When You Need It

```tsx
// ✅ NEED "use client" for:
"use client";
import { useState } from "react";  // React hooks
import { motion } from "framer-motion";  // Animations
import { useTheme } from "next-themes";  // Theme switching

export default function InteractiveComponent() {
  const [count, setCount] = useState(0);  // Needs client
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### When You Don't Need It

```tsx
// ✅ NO "use client" needed for:
export default function StaticPage() {
  return (
    <div>
      <h1>Hello World</h1>  // Just static content
      <p>This is a paragraph</p>
    </div>
  );
}
```

**Your files:**
- `app/page.tsx` → Has `"use client"` (needs animations)
- `app/layout.tsx` → No `"use client"` (just structure)
- `components/Navigation.tsx` → Has `"use client"` (needs interactivity)

---

## 🚀 Common Commands

```bash
# Start development server (see changes live)
npm run dev

# Build for production (creates static files)
npm run build

# Start production server (after build)
npm start

# Check for errors
npm run lint
```

---

## 📝 Creating a New Page (Step by Step)

### Step 1: Create Folder and File

```
app/
└── blog/
    └── page.tsx  ← Create this
```

### Step 2: Write the Page

```tsx
// app/blog/page.tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <div>
      <Navigation />
      <main>
        <h1>My Blog</h1>
        <p>Blog content here...</p>
      </main>
      <Footer />
    </div>
  );
}
```

### Step 3: Visit the URL

Go to: `http://localhost:3000/blog`

**That's it!** Next.js automatically creates the route.

---

## 🧩 Component Creation Example

### Step 1: Create Component File

```
components/
└── MyButton.tsx  ← Create this
```

### Step 2: Write Component

```tsx
// components/MyButton.tsx
export default function MyButton({ text, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-primary text-white rounded"
    >
      {text}
    </button>
  );
}
```

### Step 3: Use It in a Page

```tsx
// app/page.tsx
import MyButton from "@/components/MyButton";

export default function Home() {
  return (
    <div>
      <MyButton text="Click Me" onClick={() => alert("Hi!")} />
    </div>
  );
}
```

---

## 🎓 Understanding Your Project Structure

### What's Frontend?
- Everything in `app/` and `components/`
- What users see and interact with
- Runs in the browser

### What's Backend?
- Would be in `app/api/` (you don't have this)
- Handles data processing, databases
- Runs on server

### Your Project Type
- **Static Site**: Pre-built HTML/CSS/JS files
- **No Backend**: Everything runs in browser
- **Perfect For**: Portfolios, blogs, marketing sites

---

## 🔍 Debugging Tips

### Problem: Page not showing
**Check:**
- Is the file named `page.tsx`? (not `Page.tsx` or `page.ts`)
- Is it in the right folder?
- Did you restart the dev server?

### Problem: Component not found
**Check:**
- Is the import path correct? (`@/components/ComponentName`)
- Does the file exist?
- Is the export correct? (`export default function ComponentName`)

### Problem: Styles not working
**Check:**
- Are you using Tailwind classes correctly?
- Is `globals.css` imported in `layout.tsx`?
- Check browser console for errors

---

## 📚 Key Concepts Cheat Sheet

| Concept | What It Means | Example |
|---------|---------------|---------|
| **Route** | URL path | `/about` = `app/about/page.tsx` |
| **Component** | Reusable UI piece | `Navigation.tsx` used on all pages |
| **Layout** | Wrapper for pages | `layout.tsx` wraps everything |
| **Import** | Get code from another file | `import Navigation from "@/components/Navigation"` |
| **"use client"** | Run in browser | Needed for interactivity |
| **Static Export** | Pre-built files | No server needed |

---

## ✅ You're Ready!

You now understand:
- ✅ How folders create routes
- ✅ How components work
- ✅ How imports connect files
- ✅ How layout wraps pages
- ✅ Frontend vs backend basics

**Next Steps:**
1. Try creating a new page
2. Create a simple component
3. Modify an existing page
4. Experiment and learn!

Remember: Next.js is just organized folders that become a website. The more you practice, the clearer it becomes! 🚀


