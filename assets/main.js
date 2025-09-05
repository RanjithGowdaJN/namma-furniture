// Namma Furniture — simple JS (no framework)
const WHATSAPP_NUMBER = '917349332777'; // update if needed

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// WhatsApp helpers
function isValidHttpUrl(str) {
  try { const u = new URL(str); return u.protocol === 'http:' || u.protocol === 'https:'; }
  catch { return false; }
}
function openWhatsAppWithLink(url) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const text = encodeURIComponent(`Hi, I'm interested in this product: ${url}`);
  window.open(`${base}?text=${text}`, '_blank');
}

document.getElementById('waSendBtn')?.addEventListener('click', () => {
  const input = document.getElementById('productUrl');
  const val = input.value.trim();
  if (!val || !isValidHttpUrl(val)) {
    alert('Please paste a valid product link (https://...)');
    input.focus(); return;
  }
  openWhatsAppWithLink(val);
});

document.getElementById('waNow')?.addEventListener('click', () => {
  const val = document.getElementById('productUrl')?.value.trim();
  openWhatsAppWithLink(val || '');
});

// Year
document.getElementById('year').textContent = String(new Date().getFullYear());
