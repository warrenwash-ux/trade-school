/* =====================================================================
   access-gate.js
   A simple "please knock" sign for Trade School and Trade Tutor.
   Put this as the FIRST line of the page:
     <script src="access-gate.js"></script>
   Visitors type a password and a 4-digit code. The page stays hidden
   until both are right, and this device remembers it afterward.
   NOTE: this is not real security. The page code is public. For paid
   students, use a real login. See the notes from Claude.
   ===================================================================== */
(function () {
  'use strict';
  var STORE = 'ts_access_v1';
  var VALID = ["573a228daf7e4604b3fa0a3a75a9654622f76a670b4269b0103ebe8a0c3bfdd2", "05da4e20146bde69d83c37975eac2db4ce12db96a787ab07499642aa54f0dcdd"];

  // ---- SHA-256 (plain JavaScript, ASCII input) ----
  function sha256(str) {
    var primes = [], n = 2;
    while (primes.length < 64) {
      var isP = true;
      for (var q = 0; q < primes.length && primes[q] * primes[q] <= n; q++) {
        if (n % primes[q] === 0) { isP = false; break; }
      }
      if (isP) { primes.push(n); }
      n++;
    }
    var frac = function (x) { return ((x - Math.floor(x)) * 4294967296) >>> 0; };
    var K = primes.map(function (p) { return frac(Math.cbrt(p)); });
    var H = primes.slice(0, 8).map(function (p) { return frac(Math.sqrt(p)); });
    var bytes = [];
    for (var i = 0; i < str.length; i++) { bytes.push(str.charCodeAt(i) & 255); }
    var bitLen = bytes.length * 8;
    bytes.push(0x80);
    while (bytes.length % 64 !== 56) { bytes.push(0); }
    var hi = Math.floor(bitLen / 4294967296), lo = bitLen >>> 0;
    bytes.push((hi >>> 24) & 255, (hi >>> 16) & 255, (hi >>> 8) & 255, hi & 255,
               (lo >>> 24) & 255, (lo >>> 16) & 255, (lo >>> 8) & 255, lo & 255);
    var rotr = function (x, s) { return (x >>> s) | (x << (32 - s)); };
    for (var off = 0; off < bytes.length; off += 64) {
      var w = new Array(64), t;
      for (t = 0; t < 16; t++) {
        w[t] = ((bytes[off + 4 * t] << 24) | (bytes[off + 4 * t + 1] << 16) | (bytes[off + 4 * t + 2] << 8) | bytes[off + 4 * t + 3]) | 0;
      }
      for (t = 16; t < 64; t++) {
        var s0 = rotr(w[t - 15], 7) ^ rotr(w[t - 15], 18) ^ (w[t - 15] >>> 3);
        var s1 = rotr(w[t - 2], 17) ^ rotr(w[t - 2], 19) ^ (w[t - 2] >>> 10);
        w[t] = (w[t - 16] + s0 + w[t - 7] + s1) | 0;
      }
      var a = H[0], b = H[1], c = H[2], d = H[3], e = H[4], f = H[5], g = H[6], hh = H[7];
      for (t = 0; t < 64; t++) {
        var S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
        var ch = (e & f) ^ (~e & g);
        var t1 = (hh + S1 + ch + K[t] + w[t]) | 0;
        var S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
        var mj = (a & b) ^ (a & c) ^ (b & c);
        var t2 = (S0 + mj) | 0;
        hh = g; g = f; f = e; e = (d + t1) | 0; d = c; c = b; b = a; a = (t1 + t2) | 0;
      }
      H[0] = (H[0] + a) | 0; H[1] = (H[1] + b) | 0; H[2] = (H[2] + c) | 0; H[3] = (H[3] + d) | 0;
      H[4] = (H[4] + e) | 0; H[5] = (H[5] + f) | 0; H[6] = (H[6] + g) | 0; H[7] = (H[7] + hh) | 0;
    }
    return H.map(function (x) { return ('00000000' + (x >>> 0).toString(16)).slice(-8); }).join('');
  }
  function hashFor(pw, code) {
    var p = String(pw || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    var c = String(code || '').replace(/\D/g, '');
    return sha256('ts-gate|' + p + '|' + c);
  }
  function isValid(hash) { return VALID.indexOf(hash) !== -1; }
  function getSaved() { try { return window.localStorage.getItem(STORE); } catch (e) { return null; } }
  function setSaved(v) { try { window.localStorage.setItem(STORE, v); } catch (e) {} }
  function clearSaved() { try { window.localStorage.removeItem(STORE); } catch (e) {} }

  // ---- Lock button (only on pages with a .topnav) ----
  function addLockButton() {
    var nav = document.querySelector('.topnav');
    if (!nav || document.getElementById('lockBtn')) { return; }
    var b = document.createElement('button');
    b.id = 'lockBtn'; b.type = 'button'; b.className = 'theme-toggle';
    b.title = 'Lock'; b.setAttribute('aria-label', 'Lock this device');
    b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" width="16" height="16"><rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>';
    b.addEventListener('click', function () { clearSaved(); window.location.reload(); });
    var avatar = nav.querySelector('.avatar');
    if (avatar) { nav.insertBefore(b, avatar); } else { nav.appendChild(b); }
  }
  function onReady(fn) {
    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', fn); } else { fn(); }
  }

  // Already unlocked on this device? Let the page load normally.
  var saved = getSaved();
  if (saved && isValid(saved)) { onReady(addLockButton); return; }

  // ---- Hide the page until unlocked ----
  var root = document.documentElement;
  root.setAttribute('data-gated', '1');
  var st = document.createElement('style');
  st.id = 'gate-style';
  st.textContent = 'html[data-gated]{overflow:hidden}html[data-gated] body>*:not(#tgate){visibility:hidden!important}';
  (document.head || root).appendChild(st);

  function unlock(hash) {
    setSaved(hash);
    root.removeAttribute('data-gated');
    var s = document.getElementById('gate-style'); if (s && s.parentNode) { s.parentNode.removeChild(s); }
    var o = document.getElementById('tgate'); if (o && o.parentNode) { o.parentNode.removeChild(o); }
    addLockButton();
  }

  function build() {
    var o = document.createElement('div');
    o.id = 'tgate'; o.setAttribute('role', 'dialog'); o.setAttribute('aria-modal', 'true'); o.setAttribute('aria-label', 'Enter password');
    o.style.cssText = 'position:fixed;inset:0;z-index:2147483647;background:#141A2E;color:#EDF1F7;display:flex;align-items:center;justify-content:center;padding:20px;font-family:Karla,-apple-system,Segoe UI,sans-serif;box-sizing:border-box;overflow:auto';
    var inputCss = 'width:100%;box-sizing:border-box;font:inherit;font-size:16px;padding:12px;border-radius:10px;border:1.5px solid #3B4568;background:#141A2E;color:#EDF1F7;margin:4px 0 14px';
    o.innerHTML =
      '<div style="width:100%;max-width:380px;background:#1E2742;border:1px solid #2A3352;border-radius:16px;padding:26px 22px">'
      + '<div style="font-family:\'Big Shoulders Display\',\'Arial Narrow\',sans-serif;font-weight:800;font-size:2rem;line-height:1;margin-bottom:6px">Welcome</div>'
      + '<p style="margin:0 0 18px;color:#9AA3C0;font-size:.95rem">Type the password and the 4-digit code to come in.</p>'
      + '<label for="tg-pw" style="font-size:.8rem;font-weight:700;color:#9AA3C0">Password</label>'
      + '<input id="tg-pw" type="password" autocomplete="off" autocapitalize="none" style="' + inputCss + '">'
      + '<label for="tg-code" style="font-size:.8rem;font-weight:700;color:#9AA3C0">Code</label>'
      + '<input id="tg-code" type="password" inputmode="numeric" autocomplete="off" maxlength="8" style="' + inputCss + '">'
      + '<div id="tg-msg" role="alert" style="min-height:1.3em;color:#F2786C;font-size:.9rem;margin:-4px 0 10px"></div>'
      + '<button id="tg-go" type="button" style="width:100%;font:inherit;font-weight:700;padding:13px;border:0;border-radius:10px;background:#F5B23A;color:#1a1200;cursor:pointer">Come in</button>'
      + '</div>';
    document.body.appendChild(o);

    var pw = document.getElementById('tg-pw'), code = document.getElementById('tg-code');
    var msg = document.getElementById('tg-msg'), go = document.getElementById('tg-go');
    var wrong = 0, lockedUntil = 0;

    function attempt() {
      var now = Date.now();
      if (now < lockedUntil) {
        msg.textContent = 'Too many tries. Wait ' + Math.ceil((lockedUntil - now) / 1000) + ' seconds.';
        return;
      }
      var h = hashFor(pw.value, code.value);
      if (isValid(h)) { unlock(h); return; }
      wrong++;
      code.value = '';
      if (wrong >= 5) { lockedUntil = Date.now() + 20000; wrong = 0; msg.textContent = 'Too many tries. Wait 20 seconds.'; }
      else { msg.textContent = 'That password or code is not right. Try again.'; }
    }
    go.addEventListener('click', attempt);
    [pw, code].forEach(function (el) {
      el.addEventListener('keydown', function (ev) { if (ev.key === 'Enter') { attempt(); } });
    });
    try { pw.focus(); } catch (e) {}
  }
  onReady(build);
})();
