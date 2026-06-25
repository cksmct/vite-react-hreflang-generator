const fs = require('fs');
const path = require('path');

// Configure your supported languages here
const supportedLanguages = ['en', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'zh', 'ja', 'ko', 'ar', 'hi', 'id'];
const defaultLang = 'en';
const siteUrl = 'https://your-domain.com';

const buildDir = path.join(__dirname, 'dist');
const indexPath = path.join(buildDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error("❌ index.html not found. Please run your Vite/React build first.");
  process.exit(1);
}

const originalHtml = fs.readFileSync(indexPath, 'utf8');

// Generate hreflang tags
let hreflangTags = supportedLanguages.map(lang => 
  `\n    <link rel="alternate" hreflang="${lang}" href="${siteUrl}/${lang}/" />`
).join('');
hreflangTags += `\n    <link rel="alternate" hreflang="x-default" href="${siteUrl}/" />`;

// Create language-specific directories and HTML files
supportedLanguages.forEach(lang => {
  const langDir = path.join(buildDir, lang);
  if (!fs.existsSync(langDir)) {
    fs.mkdirSync(langDir, { recursive: true });
  }

  // Inject hreflang tags into the head
  const localizedHtml = originalHtml.replace(
    '</head>', 
    `${hreflangTags}\n    <meta name="language" content="${lang}">\n  </head>`
  );

  fs.writeFileSync(path.join(langDir, 'index.html'), localizedHtml);
  console.log(`✅ Generated SEO static page for: ${lang}`);
});

console.log("🎉 Multi-lingual SEO build complete!");
