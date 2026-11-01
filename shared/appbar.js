/* Cosmic Cat app bar: one strip across the top of every tool.
   Add a tool: add one entry to APPS (set soon:true until it exists).
   Use on a page: <script src="../shared/appbar.js" data-app="leads"></script> */
(function () {
  var APPS = [
    { id: 'leads',     name: 'Lead Board', path: 'leads/',     icon: 'target' },
    { id: 'proposals', name: 'Proposals',  path: 'proposals/', icon: 'doc' },
    { id: 'training',  name: 'Training',   soon: true,         icon: 'cap' },
    { id: 'clients',   name: 'Clients',    soon: true,         icon: 'users' }
  ];
  var ICONS = {
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".6"/>',
    doc: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/>',
    cap: '<path d="M3 9l9-4 9 4-9 4z"/><path d="M7 11v4c0 1.5 2.5 3 5 3s5-1.5 5-3v-4"/>',
    users: '<circle cx="9" cy="9" r="3"/><path d="M3.5 19c.8-3 3-4.5 5.5-4.5s4.7 1.5 5.5 4.5"/><circle cx="17" cy="8" r="2.4"/><path d="M15.5 13.6c2.4-.4 4.4 1 5 3.9"/>'
  };
  var me = document.currentScript;
  var current = (me && me.getAttribute('data-app')) || '';
  var root = me ? new URL('../', me.src).href : '/';
  var logo = root + 'logo.png';

  var css = '' +
    '.ccc-appbar{position:relative;z-index:60;height:44px;flex-shrink:0;display:flex;align-items:center;gap:4px;padding:0 14px;background:#14161c;color:#c4c7d0;font:500 13px/1 "Figtree","DM Sans",system-ui,-apple-system,sans-serif;border-bottom:1px solid #22252e;overflow-x:auto;scrollbar-width:none}' +
    '.ccc-appbar::-webkit-scrollbar{display:none}' +
    '.ccc-ab-brand{display:flex;align-items:center;gap:8px;margin-right:14px;color:#fff;text-decoration:none;font-weight:700;font-size:14px;letter-spacing:.1px;white-space:nowrap}' +
    '.ccc-ab-brand img{width:24px;height:24px;border-radius:50%}' +
    '.ccc-ab-sep{width:1px;height:20px;background:#2c303b;margin-right:8px;flex-shrink:0}' +
    '.ccc-ab-tab{position:relative;display:flex;align-items:center;gap:7px;height:44px;padding:0 12px;color:#c4c7d0;text-decoration:none;white-space:nowrap;transition:color .15s}' +
    '.ccc-ab-tab svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}' +
    'a.ccc-ab-tab:hover{color:#fff}' +
    '.ccc-ab-tab.on{color:#fff;font-weight:600}' +
    '.ccc-ab-tab.on::after{content:"";position:absolute;left:10px;right:10px;bottom:0;height:2px;border-radius:2px 2px 0 0;background:#5271FF}' +
    '.ccc-ab-tab.soon{color:#5d6270;cursor:default}' +
    '.ccc-ab-tab.soon small{font-size:10px;font-weight:600;letter-spacing:.3px;text-transform:uppercase;padding:2px 6px;border-radius:4px;background:#22252e;color:#7d8291}' +
    '@media print{.ccc-appbar{display:none!important}}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  function svg(name) { return '<svg viewBox="0 0 24 24">' + (ICONS[name] || '') + '</svg>'; }
  var bar = document.createElement('nav');
  bar.className = 'ccc-appbar';
  bar.setAttribute('aria-label', 'Cosmic Cat tools');
  var html = '<a class="ccc-ab-brand" href="' + root + '" title="Cosmic Cat home"><img src="' + logo + '" alt="">Cosmic Cat</a><span class="ccc-ab-sep"></span>';
  APPS.forEach(function (a) {
    if (a.soon) {
      html += '<span class="ccc-ab-tab soon" title="Coming soon">' + svg(a.icon) + a.name + ' <small>Soon</small></span>';
    } else {
      html += '<a class="ccc-ab-tab' + (a.id === current ? ' on' : '') + '" href="' + root + a.path + '"' +
        (a.id === current ? ' aria-current="page"' : '') + '>' + svg(a.icon) + a.name + '</a>';
    }
  });
  bar.innerHTML = html;
  function mount() {
    document.body.insertBefore(bar, document.body.firstChild);
    // span edge to edge even when the page pads its body, keeping the page's own top spacing below the bar
    var cs = getComputedStyle(document.body);
    var pt = parseFloat(cs.paddingTop) || 0, pl = parseFloat(cs.paddingLeft) || 0, pr = parseFloat(cs.paddingRight) || 0;
    var mt = parseFloat(cs.marginTop) || 0, ml = parseFloat(cs.marginLeft) || 0, mr = parseFloat(cs.marginRight) || 0;
    if (pt || pl || pr || mt || ml || mr) {
      bar.style.margin = (-(pt + mt)) + 'px ' + (-(pr + mr)) + 'px ' + pt + 'px ' + (-(pl + ml)) + 'px';
    }
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
