# 🎨 Boda Design - Official Portfolio Website

Welcome to the official portfolio website for **Boda Design** (Graphic Designer).

This website was custom-crafted to deliver a **modern, premium, and professional** brand presence with full **bilingual (English & Arabic) RTL support**, sleek dark mode visual aesthetics, interactive portfolio filtering, and a direct WhatsApp inquiry builder.

---

## 🌟 Key Features

1. **Bilingual Engine (English & Arabic)**:
   - Instant language switching with zero page reload.
   - Seamless RTL (Right-to-Left) typography and layout adjustments tailored for Arabic audiences.
   - Preserves user language preference using `localStorage`.

2. **Hero Section**:
   - Modern brand showcase featuring the tagline: *“Turning Ideas Into Creative Visual Experiences.”*
   - Subtle animated visual layers inspired by graphic design principles (grid, coordinates, layers, floating badges).
   - Direct CTA buttons: **View My Work** and **Contact Me**.

3. **Curated Sections**:
   - **About Me**: Highlights the 2-year design journey, passion for creative growth, and commitment to thinking outside the box.
   - **Skills & Tools**: Dedicated feature breakdowns for **Adobe Photoshop** and **Canva**.
   - **Creative Services**: 7 core service cards (Social Media Designs, Logo Design, Advertisement Design, Educational Summaries, Teachers' Materials, Notes & Booklets, Custom Graphic Design).
   - **What I Love Designing**: Prominently spotlights favorite disciplines: **Advertisements, Educational Summaries, and Logos**.
   - **Designing for Education**: Dedicated showcase of experience creating tailored educational resources for teachers and secondary school students.
   - **Design Philosophy**: Bold manifesto emphasizing the *“Think Outside the Box”* standard.
   - **Contact & WhatsApp Inquiry**: Direct phone link (`01154591411`), direct WhatsApp chat link, and an interactive message builder.

4. **Portfolio Gallery & Lightbox**:
   - Interactive filtering by categories: *All, Social Media Designs, Logos, Advertisements, Educational Designs, Teachers' Materials, Posters*.
   - Full-screen lightbox preview with zoom, category tags, project descriptions, and direct WhatsApp project inquiry button.

---

## 📁 File Structure

```text
boda-design-portfolio/
├── index.html                   # Semantic HTML5 master document
├── css/
│   └── style.css                # Dark luxury styling, glassmorphism, responsive grid & RTL
├── js/
│   ├── main.js                  # Core interactivity (lightbox, filters, mobile menu, WhatsApp)
│   ├── projects.js              # Easily editable project dataset
│   └── translations.js          # Bilingual dictionary (English & Arabic)
├── assets/
│   └── images/                  # High-resolution vector mockups & brand logo
│       ├── boda-logo.svg
│       ├── project-edu-summary.svg
│       ├── project-logo-concept.svg
│       ├── project-ad-promo.svg
│       ├── project-teacher-booklet.svg
│       ├── project-social-grid.svg
│       ├── project-poster-creative.svg
│       ├── project-teacher-cards.svg
│       ├── project-ad-story.svg
│       └── project-edu-infographic.svg
└── README.md                    # Project documentation & guide
```

---

## 🚀 How to Run the Website

### Option 1: Direct File Opening
Double-click `index.html` to open it in Google Chrome, Microsoft Edge, Firefox, or Safari.

### Option 2: Live Server (Recommended for Development)
If you are using VS Code, right-click `index.html` and choose **"Open with Live Server"**.

Alternatively, in your terminal run:
```bash
# Using Python
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

---

## ✏️ How to Add or Replace Portfolio Projects

To add your own client artwork and designs:
1. Save your design images (`.png` or `.jpg`) inside the `assets/images/` folder.
2. Open `js/projects.js` in any text editor.
3. Replace the `image` field with your image file path, or add a new project object:

```javascript
{
  id: 10,
  titleEn: "Your Project Title in English",
  titleAr: "عنوان المشروع باللغة العربية",
  category: "logos", // Options: 'social', 'logos', 'ads', 'educational', 'teachers', 'posters'
  categoryLabelEn: "Logo Design",
  categoryLabelAr: "تصميم شعار",
  descEn: "English description of your design...",
  descAr: "وصف المشروع باللغة العربية...",
  image: "assets/images/my-new-artwork.jpg",
  tags: ["Photoshop", "Branding"]
}
```

The website will automatically render the new project with responsive cards and lightbox previews!

---

## 🌐 Free Hosting & Deployment

You can host this website online for free using any of these platforms:

- **GitHub Pages**:
  1. Push this folder to a GitHub repository.
  2. In repository Settings > Pages, set branch to `main` and root `/`.
- **Vercel / Netlify**:
  - Drag and drop the `boda-design-portfolio` folder directly into [Vercel](https://vercel.com) or [Netlify](https://netlify.com) for instant deployment with a free SSL certificate.
