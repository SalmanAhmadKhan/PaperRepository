/* ============================================================
   Shared site navigation for papers.sal-khan.com (GitHub Pages)
   ------------------------------------------------------------
   Usage: add this line right after <body> on every HTML page:

     <script src="nav.js"></script>

   Why this exists: the main site (www.sal-khan.com) runs on
   Google Sites and the document/tool pages run on GitHub Pages.
   Google Sites cannot add its header to pages it doesn't host,
   so every GitHub-hosted page injects this nav itself.
   All cross-host links must be ABSOLUTE URLs.

   To change links: edit the LINKS array below. One file, all pages.
   ============================================================ */
(function () {
  var LINKS = [
    { label: "Home",             href: "https://papers.sal-khan.com/home.html" },
    { label: "Research",         href: "https://www.sal-khan.com/research" },
    { label: "Teaching",         href: "https://www.sal-khan.com/teaching" },
    { label: "Tutoring Studies", href: "https://papers.sal-khan.com/tutoring-evidence-library.html" },
    { label: "CV",               href: "https://papers.sal-khan.com/CV_Khan.pdf" }
  ];
  var SITE_NAME = "Salman A. Khan";
  var HOME_URL  = "https://papers.sal-khan.com/home.html";

  /* Highlight the link matching the current page's filename */
  var here = window.location.pathname.split("/").pop() || "home.html";

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
    var file = l.href.split("/").pop();
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
