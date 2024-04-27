const resource = [
  /* --- CSS --- */
  '/assets/css/jekyll-theme-chirpy.css',

  /* --- PWA --- */
  '/app.js',
  '/sw.js',

  /* --- HTML --- */
  '/index.html',
  '/404.html',

  
    '/categories/',
  
    '/tags/',
  
    '/archives/',
  
    '/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/assets/img/favicons/android-chrome-192x192.png',
    '/assets/img/favicons/android-chrome-512x512.png',
    '/assets/img/favicons/apple-touch-icon.png',
    '/assets/img/favicons/browserconfig.xml',
    '/assets/img/favicons/favicon-16x16.png',
    '/assets/img/favicons/favicon-32x32.png',
    '/assets/img/favicons/favicon.ico',
    '/assets/img/favicons/mstile-150x150.png',
    '/assets/img/favicons/safari-pinned-tab.svg',
    '/assets/js/dist/categories.min.js',
    '/assets/js/dist/categories.min.js.map',
    '/assets/js/dist/commons.min.js',
    '/assets/js/dist/commons.min.js.map',
    '/assets/js/dist/home.min.js',
    '/assets/js/dist/home.min.js.map',
    '/assets/js/dist/misc.min.js',
    '/assets/js/dist/misc.min.js.map',
    '/assets/js/dist/page.min.js',
    '/assets/js/dist/page.min.js.map',
    '/assets/js/dist/post.min.js',
    '/assets/js/dist/post.min.js.map'
];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  
    '127.0.0.1:4000',
  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];

