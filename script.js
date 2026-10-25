const CONFIG = {
  email: '',
  github: '',
  linkedin: '',
  twitter: '',
  cv: ''
};
const SKILLS = {
  big: { k: '01 / Frontend', t: 'Interfaces that feel effortless.', d: 'Semantic structure, responsive layouts and interactions with a clear purpose.', tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'], file: 'interface.html', code: ['<main class="page">', '  <h1>Build with care</h1>', '  <button class="action">Explore</button>', '</main>'] },
  more: [
    { k: '02', t: 'UI & Web', d: 'Responsive design · Accessibility · Design systems', file: 'accessible-ui.html', code: ['<button aria-label="Open menu">', '  <span aria-hidden="true">☰</span>', '</button>', '@media (max-width: 640px) { ... }'] },
    { k: '03', t: 'Workflow', d: 'Git · GitHub · Figma · DevTools', file: 'workflow.git', code: ['git checkout -b feature/ui', 'git add .', 'git commit -m "Build UI"', 'git push origin feature/ui'] },
    { k: '04', t: 'Exploring', d: 'Three.js · React · API integration', file: 'scene.js', code: ['const scene = new THREE.Scene()', 'const mesh = new THREE.Mesh(geometry, material)', 'scene.add(mesh)', 'root.render(<App />)'] }
  ]
};
const PROJECTS = [
  { t: 'Pulse Analytics', cat: 'web', type: 'Web app · Concept', d: 'A calm, at-a-glance dashboard that makes product metrics easier to read.', tags: ['HTML', 'CSS', 'JavaScript'], c: ['#4f46e5', '#22d3ee'], m: 'dash' },
  { t: 'Nabta Store', cat: 'web', type: 'E-commerce · Concept', d: 'A warm storefront that pairs product discovery with a more human feel.', tags: ['Tailwind', 'JavaScript', 'UI'], c: ['#16a34a', '#facc15'], m: 'store' },
  { t: 'Orbit Notes', cat: 'creative', type: 'Creative tool · Concept', d: 'A focused note-taking interface exploring gentle motion and visual organization.', tags: ['JavaScript', 'CSS', 'Three.js'], c: ['#ec4899', '#f97316'], m: 'notes' }
];
const SERVICES = [
  { i: '◧', t: 'Websites & landing pages', d: 'Fast, responsive sites that explain your idea clearly and look sharp on every screen.' },
  { i: '◈', t: 'UI implementation', d: 'Turning Figma designs into clean, pixel-faithful and accessible interfaces.' },
  { i: '✦', t: 'Creative & interactive', d: 'Motion, 3D and small interactive details that make a page memorable.' },
  { i: '⌘', t: 'Frontend for web apps', d: 'Dashboards, stores and tools with organized, maintainable JavaScript.' }
];
const STEPS = [
  { t: 'Understand', d: 'Start with the goal, the audience and what success looks like.' },
  { t: 'Design', d: 'Sketch structure and style before writing code.' },
  { t: 'Build', d: 'Clean, responsive, accessible code — shared early for feedback.' },
  { t: 'Refine', d: 'Test, polish and hand over something easy to maintain.' }
];
const FAQ = [
  { q: 'What kind of projects do you take on?', a: 'Portfolio and business websites, landing pages, dashboards and interactive frontend work.' },
  { q: 'Can you work from a design?', a: 'Yes — I can implement Figma designs, or help shape the design from a rough idea.' },
  { q: 'Are you open to full-time or internship roles?', a: 'Yes, I’m open to meaningful opportunities. Reach out through the contact form.' },
  { q: 'How do we get started?', a: 'Send a short message about your idea and timeline, and I’ll reply with next steps.' }
];
const TIMELINE = [
  { date: 'Education', t: 'Engineering — Ain Shams University', d: 'Engineering studies in Cairo, Egypt. Where I learned to break complex problems into clear steps.' }
];

const $ = s => document.querySelector(s), root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
const el = (h) => { const t = document.createElement('template'); t.innerHTML = h.trim(); return t.content.firstChild; };

$('#theme').onclick = () => { const n = root.dataset.theme === 'dark' ? 'light' : 'dark'; root.dataset.theme = n; try { localStorage.setItem('ms-theme', n) } catch (e) {} };
$('#menu').onclick = e => { const o = $('#links').classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', o); };
$('#links').onclick = () => $('#links').classList.remove('open');

const soc = [['GitHub', CONFIG.github], ['LinkedIn', CONFIG.linkedin], ['Email', CONFIG.email && 'mailto:' + CONFIG.email]].filter(x => x[1]);
$('#socials').innerHTML = soc.map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener">${n} ↗</a>`).join('');
const aboutProfiles = [
 ['LinkedIn', CONFIG.linkedin, '<path d="M5 3.5A1.75 1.75 0 1 1 1.5 3.5a1.75 1.75 0 0 1 3.5 0ZM1.8 7h3.4v11H1.8zM7.2 7h3.25v1.5h.05A3.56 3.56 0 0 1 13.7 6.7c3.5 0 4.15 2.3 4.15 5.3V18h-3.4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.38-2.05 2.8V18H7.2z"/>'],
 ['X / Twitter', CONFIG.twitter, '<path d="M18.9 2H21l-6.87 7.85L22.2 22h-6.25l-4.9-7.45L4.5 22H2.38l7.35-8.4L1.8 2h6.4l4.43 6.78L18.9 2Zm-1.1 18h1.17L7.27 3.9H6.02L17.8 20Z"/>'],
 ['Email', CONFIG.email && `mailto:${CONFIG.email}`, '<path d="M3 4h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.5l9 6.3 9-6.3V6H3Zm18 12V9l-8.43 5.9a1 1 0 0 1-1.14 0L3 9v9h18Z"/>'],
 ['GitHub', CONFIG.github, '<path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.24-5.1 5.52.4.35.75 1.03.75 2.08v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/>']
];
document.querySelectorAll('#contactSocials, #footerSocials').forEach(socialNav => {
  aboutProfiles.forEach(([name, url, path]) => {
    const link = document.createElement('a');
    link.href = url || '#contact';
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.classList.add('social-mark');
    icon.setAttribute('viewBox', name === 'LinkedIn' ? '0 0 20 20' : '0 0 24 24');
    icon.setAttribute('focusable', 'false');
    icon.setAttribute('aria-hidden', 'true');
    icon.innerHTML = path;
    link.append(icon, document.createTextNode(name));
    if (url && !url.startsWith('mailto:')) { link.target = '_blank'; link.rel = 'noopener'; }
    socialNav.append(link);
  });
});
if (CONFIG.cv) {
  const cv = $('#cv'), cvTop = $('#cvTop'), footerCv = $('#footerCv');
  cv.href = CONFIG.cv;
  cv.hidden = false;
  cv.setAttribute('download', '');
  cvTop.href = CONFIG.cv;
  cvTop.setAttribute('download', '');
  footerCv.href = CONFIG.cv;
  footerCv.setAttribute('download', '');
}

const words = ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Git', 'Figma', 'Three.js', 'React', 'Accessibility', 'UI Design'];
$('#marquee').innerHTML = [...words, ...words].map(w => `<span>${w}</span><span>✳</span>`).join('');

const escapeCode = line => line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const skillCard = s => `<article class="card skill-card rv"><div class="skill-code" aria-hidden="true"><div class="skill-code-top"><span></span><span></span><span></span><small>${s.file}</small></div><pre>${s.code.map((line, i) => `<span><i>${String(i + 1).padStart(2, '0')}</i><code>${escapeCode(line)}</code></span>`).join('')}</pre><b class="code-orbit"></b></div><span class="k">${s.k}</span><h3>${s.t}</h3><p>${s.d}</p>${s.tags ? `<div class="tags">${s.tags.map(t => `<span>${t}</span>`).join('')}</div>` : ''}</article>`;
$('#bento').innerHTML = [SKILLS.big, ...SKILLS.more].map(skillCard).join('');

const addTechCube = (section, i, extraClass = '') => {
  const cube = document.createElement('div');
  cube.className = `tech-cube ${extraClass}`.trim();
  cube.setAttribute('aria-hidden', 'true');
  cube.style.setProperty('--cube-delay', `${i * -2.7}s`);
  cube.innerHTML = `<div class="tech-cube-spin"><span>HTML</span><span>CSS</span><span>JS</span><span>Git</span><span>Figma</span><span>UI</span></div>`;
  section.append(cube);
};
['#faq', '#contact'].forEach((selector, i) => {
  const section = $(selector);
  addTechCube(section, i, 'tech-cube-whitespace');
});
addTechCube($('#experience'), 2, 'tech-cube-experience');

const W = 'rgba(255,255,255,', win = '<rect x="30" y="22" width="340" height="190" rx="12" fill="rgba(10,12,20,.55)"/><circle cx="46" cy="38" r="4" fill="#ff6b6b"/><circle cx="60" cy="38" r="4" fill="#ffd166"/><circle cx="74" cy="38" r="4" fill="#6ee7a0"/>';
const MOCKS = {
  dash: `${win}<rect x="42" y="54" width="52" height="146" rx="8" fill="${W}.12)"/><rect x="104" y="54" width="76" height="40" rx="8" fill="${W}.18)"/><rect x="190" y="54" width="76" height="40" rx="8" fill="${W}.18)"/><rect x="276" y="54" width="82" height="40" rx="8" fill="${W}.18)"/><path d="M110 176 L150 148 L190 160 L235 120 L280 134 L350 104" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M110 176 L150 148 L190 160 L235 120 L280 134 L350 104 V196 H110Z" fill="${W}.1)"/>`,
  store: `${win}<rect x="42" y="52" width="316" height="60" rx="8" fill="${W}.2)"/><circle cx="318" cy="82" r="22" fill="#fff" opacity=".85"/><rect x="58" y="70" width="110" height="9" rx="4" fill="#fff"/><rect x="58" y="88" width="72" height="7" rx="3" fill="${W}.6)"/>${[0, 1, 2].map(i => `<rect x="${42 + i * 108}" y="124" width="100" height="76" rx="8" fill="${W}.15)"/><circle cx="${92 + i * 108}" cy="152" r="16" fill="${W}.5)"/><rect x="${56 + i * 108}" y="182" width="50" height="6" rx="3" fill="#fff"/>`).join('')}`,
  notes: `<circle cx="200" cy="112" r="78" fill="none" stroke="${W}.35)" stroke-dasharray="4 6"/><circle cx="200" cy="112" r="46" fill="none" stroke="${W}.5)"/><circle cx="200" cy="112" r="14" fill="#fff"/><g transform="rotate(-8 90 80)"><rect x="40" y="48" width="104" height="64" rx="10" fill="${W}.88)"/><rect x="52" y="62" width="62" height="7" rx="3" fill="#333" opacity=".6"/><rect x="52" y="78" width="80" height="6" rx="3" fill="#333" opacity=".3"/></g><g transform="rotate(7 310 150)"><rect x="258" y="116" width="106" height="66" rx="10" fill="${W}.88)"/><rect x="270" y="130" width="64" height="7" rx="3" fill="#333" opacity=".6"/><rect x="270" y="146" width="80" height="6" rx="3" fill="#333" opacity=".3"/></g>`
};
const cats = ['all', ...new Set(PROJECTS.map(p => p.cat))];
$('#filters').innerHTML = cats.map((c, i) => `<button type="button" data-c="${c}" class="${i ? '' : 'on'}">${c === 'all' ? 'All' : c[0].toUpperCase() + c.slice(1)}</button>`).join('');
$('#grid').innerHTML = PROJECTS.map(p => `<article class="card pj rv" data-c="${p.cat}"><div class="cvw"><div class="cover" style="background:linear-gradient(135deg,${p.c[0]},${p.c[1]})" aria-hidden="true"><svg class="mock" viewBox="0 0 400 210" preserveAspectRatio="xMidYMid slice">${MOCKS[p.m]}</svg></div></div><div class="in"><span class="k">${p.type}</span><h3>${p.t}</h3><p>${p.d}</p><div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>${p.links ? `<div class="lk">${p.links.code ? `<a href="${p.links.code}" target="_blank" rel="noopener">Code ↗</a>` : ''}${p.links.live ? `<a href="${p.links.live}" target="_blank" rel="noopener">Live ↗</a>` : ''}</div>` : ''}</div></article>`).join('');
$('#filters').onclick = e => { const b = e.target.closest('button'); if (!b) return; document.querySelectorAll('#filters button').forEach(x => x.classList.toggle('on', x === b)); document.querySelectorAll('.pj').forEach(c => c.hidden = b.dataset.c !== 'all' && c.dataset.c !== b.dataset.c); };

$('#svc').innerHTML = SERVICES.map(s => `<div class="card rv"><span class="ic">${s.i}</span><h3>${s.t}</h3><p>${s.d}</p></div>`).join('');
$('#steps').innerHTML = STEPS.map((s, i) => `<li class="rv"><b>0${i + 1}</b><h3>${s.t}</h3><p>${s.d}</p></li>`).join('');
$('#faqList').innerHTML = FAQ.map(f => `<details class="rv"><summary>${f.q}</summary><p>${f.a}</p></details>`).join('');
$('#timeline').innerHTML = TIMELINE.map(x => `<li class="rv"><small>${x.date}</small><h3>${x.t}</h3><p>${x.d}</p></li>`).join('');

$('#form').onsubmit = e => {
  e.preventDefault();
  const f = new FormData(e.target), n = $('#note');
  if (!CONFIG.email) { n.textContent = 'Email isn’t configured yet — add it in script.js (CONFIG.email).'; return; }
  location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent('Portfolio message from ' + f.get('name'))}&body=${encodeURIComponent(f.get('message') + '\n\n— ' + f.get('name') + ' (' + f.get('email') + ')')}`;
  n.textContent = 'Your email app should open with the message ready.';
};
$('#year').textContent = new Date().getFullYear();

const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { threshold: .1 });
document.querySelectorAll('.rv').forEach((n, i) => { n.style.setProperty('--d', (i % 3) * 90 + 'ms'); io.observe(n); });
document.querySelectorAll('.sec>.num,.sec>h2,.about>*').forEach(n => { n.classList.add('rv'); io.observe(n); });
const bar = $('#bar');
addEventListener('scroll', () => requestAnimationFrame(() => bar.style.setProperty('--p', scrollY / Math.max(1, root.scrollHeight - innerHeight))), { passive: true });
const so = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) document.querySelectorAll('#links a').forEach(a => a.toggleAttribute('aria-current', a.hash === '#' + x.target.id)); }), { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('main section[id]').forEach(s => so.observe(s));
addEventListener('pointermove', e => { root.style.setProperty('--mx', e.clientX + 'px'); root.style.setProperty('--my', e.clientY + 'px'); }, { passive: true });

function net2d() {
  const cv = $('#net'), ctx = cv.getContext('2d'); let W, H, pts = [], mx = -999, my = -999, raf;
  const color = () => getComputedStyle(root).getPropertyValue('--ac').trim();
  function size() { const r = cv.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2); W = r.width; H = r.height; cv.width = W * d; cv.height = H * d; ctx.setTransform(d, 0, 0, d, 0, 0); const n = Math.round(W * H / 14000); pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 })); }
  function draw() {
    ctx.clearRect(0, 0, W, H); const c = color();
    for (const p of pts) {
      if (!reduce) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1; }
      const dm = Math.hypot(p.x - mx, p.y - my); if (dm < 140) { p.x += (p.x - mx) * .012; p.y += (p.y - my) * .012; }
      ctx.globalAlpha = .7; ctx.fillStyle = c; ctx.beginPath(); ctx.arc(p.x, p.y, 1.8, 0, 7); ctx.fill();
    }
    ctx.strokeStyle = c;
    for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
      const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
      if (d < 120) { ctx.globalAlpha = (1 - d / 120) * .28; ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke(); }
    }
    if (!reduce) raf = requestAnimationFrame(draw);
  }
  cv.parentElement.addEventListener('pointermove', e => { const r = cv.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; }, { passive: true });
  addEventListener('resize', () => { cancelAnimationFrame(raf); size(); draw(); });
  size(); draw();
}

const safe = f => { try { f(); } catch (e) { console.warn(e); } };
safe(() => { const h1 = $('h1'); let i = 0; const L = s => [...s].map(c => `<span class="ch" style="--i:${i++}">${c}</span>`).join(''); h1.innerHTML = L('Mostafa') + '<br>' + L('Salem') + '<span class="accent">' + L('.') + '</span>'; });
safe(() => { const w = ['websites', 'interfaces', 'experiences', 'ideas that move'], t = $('#typed'); if (reduce) { t.textContent = w[0]; return; } let i = 0, k = 0, del = false;
  (function tick() { const s = w[i]; t.textContent = s.slice(0, k); if (!del && k === s.length) { del = true; return setTimeout(tick, 1400); } if (del && k === 0) { del = false; i = (i + 1) % w.length; } k += del ? -1 : 1; setTimeout(tick, del ? 40 : 85); })(); });
safe(() => { if (reduce || matchMedia('(hover:none)').matches) return; document.querySelectorAll('.card').forEach(c => {
  c.addEventListener('pointermove', e => { const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height; c.style.transition = 'transform .08s'; c.style.transform = `perspective(800px) rotateX(${(.5 - y) * 12}deg) rotateY(${(x - .5) * 14}deg) translateY(-6px)`; c.style.setProperty('--gx', x * 100 + '%'); c.style.setProperty('--gy', y * 100 + '%'); });
  c.addEventListener('pointerleave', () => { c.style.transition = ''; c.style.transform = ''; }); }); });
safe(() => { if (reduce) return; document.querySelectorAll('.btn').forEach(b => { b.addEventListener('pointermove', e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .22}px,${(e.clientY - r.top - r.height / 2) * .3}px)`; }); b.addEventListener('pointerleave', () => b.style.transform = ''); }); });
safe(() => { if (reduce) return; const s = $('.hart svg'); addEventListener('pointermove', e => { const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5; s.style.transform = `rotateY(${x * 9}deg) rotateX(${-y * 5}deg)`; }, { passive: true }); });
function init3d() {
  if (!window.THREE || reduce) return false;
  try {
    const cv = $('#gl'), host = cv.parentElement, ac = () => getComputedStyle(root).getPropertyValue('--ac').trim(), ac2 = () => getComputedStyle(root).getPropertyValue('--ac2').trim();
    const R = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: true }); R.setPixelRatio(Math.min(devicePixelRatio || 1, 1.75));
    const S = new THREE.Scene(), C = new THREE.PerspectiveCamera(45, 1, .1, 100); C.position.z = 9;
    const G = new THREE.Group(); S.add(G);
    const mat = (c, o = .6) => new THREE.MeshBasicMaterial({ color: c, wireframe: true, transparent: true, opacity: o });
    const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(1.6, .42, 170, 22), mat(ac(), .5));
    const ico = new THREE.Mesh(new THREE.IcosahedronGeometry(.75, 0), mat(ac2(), .8)); ico.position.set(-3.8, 1.9, 0);
    const oct = new THREE.Mesh(new THREE.OctahedronGeometry(.55, 0), mat(ac(), .8)); oct.position.set(-2.6, -2.3, 1);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.15, .025, 8, 80), mat(ac2(), .9)); ring.position.set(4.8, -2.3, 0);
    const box = new THREE.Mesh(new THREE.BoxGeometry(.8, .8, .8), mat(ac2(), .7)); box.position.set(1, 2.8, -1);
    G.add(knot, ico, oct, ring, box);
    const n = 420, pos = new Float32Array(n * 3); for (let i = 0; i < n * 3; i++) pos[i] = (Math.random() - .5) * (i % 3 === 2 ? 8 : 18);
    const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(pg, new THREE.PointsMaterial({ color: ac(), size: .035, transparent: true, opacity: .7 })); S.add(pts);
    const recolor = () => { knot.material.color.set(ac()); oct.material.color.set(ac()); pts.material.color.set(ac()); ico.material.color.set(ac2()); ring.material.color.set(ac2()); box.material.color.set(ac2()); };
    new MutationObserver(recolor).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    let mx = 0, my = 0;
    const fit = () => { const w = host.clientWidth, h = host.clientHeight; R.setSize(w, h, false); C.aspect = w / h; C.updateProjectionMatrix(); const wide = w > 860; G.position.x = wide ? 0 : -1.2; knot.position.set(wide ? 2.9 : 1.5, 0, -1); };
    new ResizeObserver(fit).observe(host); fit();
    addEventListener('pointermove', e => { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5; }, { passive: true });
    let vis = true; new IntersectionObserver(e => vis = e[0].isIntersecting).observe(host);
    const clock = new THREE.Clock();
    (function loop() {
      requestAnimationFrame(loop); if (!vis) return; const t = clock.getElapsedTime();
      knot.rotation.x = t * .22; knot.rotation.y = t * .3; ico.rotation.set(t * .5, t * .4, 0); oct.rotation.set(t * .4, t * .6, 0); box.rotation.set(t * .3, t * .5, 0); ring.rotation.x = t * .7; ring.rotation.y = t * .3;
      ico.position.y = 1.9 + Math.sin(t) * .3; oct.position.y = -2.3 + Math.cos(t * .8) * .3; box.position.y = 2.8 + Math.sin(t * .7) * .25;
      G.rotation.y += (mx * .7 - G.rotation.y) * .05; G.rotation.x += (my * .5 - G.rotation.x) * .05;
      pts.rotation.y = t * .03 + scrollY * .0004; G.position.y = scrollY * .004;
      R.render(S, C);
    })();
    $('#net').style.display = 'none'; return true;
  } catch (e) { console.warn('3D unavailable', e); return false; }
}
if (!init3d()) net2d();
window.__ok = true;
