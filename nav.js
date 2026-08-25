/* ============================================================
   Shared site navigation for sal-khan.com (GitHub Pages)
   ------------------------------------------------------------
   Single-platform setup: the entire site is served from GitHub
   Pages at the root domain sal-khan.com. To change nav links or
   labels, edit the LINKS array below — one file updates every page.
   Add this line just after <body> on every HTML page:
     <script src="nav.js"></script>
   ============================================================ */
(function () {
  var LINKS = [
    { label: "Home",                     href: "https://sal-khan.com/" },
    { label: "Research",                 href: "https://sal-khan.com/research.html" },
    { label: "Teaching",                 href: "https://sal-khan.com/teaching.html" },
    { label: "Tutoring Evidence Library", href: "https://sal-khan.com/tutoring-evidence-library.html" },
    { label: "Data & Curiosity",         href: "https://sal-khan.com/data-curiosity.html" },
    { label: "CV",                       href: "https://sal-khan.com/CV_Khan.pdf" }
  ];
  var SITE_NAME = "Salman A. Khan";
  var HOME_URL  = "https://sal-khan.com/";
  /* Highlight current page by filename ("" and "index.html" both = Home) */
  var here = window.location.pathname.split("/").pop() || "index.html";
  if (here === "") here = "index.html";
  var css = [
    ".sk-nav{background:#20242c;border-bottom:3px solid #7d1e2e;font-family:'Public Sans',system-ui,-apple-system,sans-serif}",
    ".sk-nav-inner{max-width:1060px;margin:0 auto;padding:11px 20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px}",
    ".sk-nav-home{color:#fff;font-weight:700;font-size:15px;text-decoration:none;letter-spacing:.01em}",
    ".sk-nav-home:hover{color:#e9b9c1}",
    ".sk-nav-links{display:flex;gap:18px;flex-wrap:wrap;align-items:center}",
    ".sk-nav-links a{color:#c9cdd6;font-size:13.5px;font-weight:600;text-decoration:none;padding:2px 0;border-bottom:2px solid transparent}",
    ".sk-nav-links a:hover{color:#fff}",
    ".sk-nav-links a.sk-current{color:#fff;border-bottom-color:#e9b9c1}"
  ].join("");
  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
  var nav = document.createElement("nav");
  nav.className = "sk-nav";
  nav.setAttribute("aria-label", "Site");
  var linksHtml = LINKS.map(function (l) {
    var file = l.href.replace(/\/$/, "/index.html").split("/").pop();
    var isCurrent = file === here;
    return '<a href="' + l.href + '"' +
      (isCurrent ? ' class="sk-current" aria-current="page"' : "") +
      ">" + l.label + "</a>";
  }).join("");
  nav.innerHTML =
    '<div class="sk-nav-inner">' +
      '<a class="sk-nav-home" href="' + HOME_URL + '">' + SITE_NAME + "</a>" +
      '<div class="sk-nav-links">' + linksHtml + "</div>" +
    "</div>";
  function insert() { document.body.insertBefore(nav, document.body.firstChild); }
  if (document.body) { insert(); }
  else { document.addEventListener("DOMContentLoaded", insert); }
})();
